import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  applyAnswer,
  applyRoundWin,
  cleanPlayerName,
  CODIFICADOR_ACCURACY,
  DIFFICULTY_LEVELS,
  extractMatchDifficulty,
  pickQuestionCandidate,
  type GameDifficulty,
  type Side,
} from "./game-rules";

const LETTERS = ["A", "B", "C", "D", "E"] as const;
type Letter = (typeof LETTERS)[number];

export interface MatchState {
  matchId: string;
  playerName: string;
  totalRounds: number;
  difficulty: GameDifficulty;
  status: "in_progress" | "finished";
  currentRound: number;
  playerRounds: number;
  codificadorRounds: number;
  playerScore: number;
  codificadorScore: number;
  winner: Side | null;
}

export interface PublicQuestion {
  answerId: string;
  code: number;
  book:
    | "livro_espiritos"
    | "evangelho"
    | "ceu_inferno"
    | "genese"
    | "livro_mediuns"
    | "obras_postumas";
  statement: string;
  difficulty: "facil" | "medio" | "dificil";
  options: { letter: Letter; text: string }[];
}

export interface AnswerResult {
  correctOption: Letter;
  playerOption: Letter;
  playerCorrect: boolean;
  codificadorOption?: Letter | string;
  codificadorCorrect?: boolean;
  codificadorCounted?: boolean;
  explanation: string;
  reference: string;
  roundWinner: Side | null;
  finishedRound: number;
  roundScore: { player: number; codificador: number };
  state: MatchState;
}

export function extractMatchTotalRounds(match: any): number {
  if (match.total_rounds && [3, 5, 7, 9].includes(Number(match.total_rounds))) {
    return Number(match.total_rounds);
  }
  const tag = match.player_name?.match(/\[([3579])R\]/);
  if (tag) {
    return parseInt(tag[1], 10);
  }
  return 3;
}

export const startMatch = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        playerName: z.string().trim().max(60).optional(),
        totalRounds: z
          .union([z.literal(3), z.literal(5), z.literal(7), z.literal(9)])
          .optional()
          .default(3),
        difficulty: z.enum(DIFFICULTY_LEVELS).optional().default("normal"),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<MatchState> => {
    const { supabaseAdmin, getOptionalUserId, ensureQuestionsSeeded } =
      await import("./game.server");
    await ensureQuestionsSeeded();
    const userId = await getOptionalUserId();
    let name = data.playerName || "Jogador";
    if (userId) {
      const { data: p } = await supabaseAdmin
        .from("profiles")
        .select("display_name")
        .eq("id", userId)
        .maybeSingle();
      if (p?.display_name) name = p.display_name;
    }
    const { count } = await supabaseAdmin
      .from("questions")
      .select("id", { count: "exact", head: true })
      .eq("active", true);
    if (!count)
      throw new Error("O banco de perguntas está vazio. Não é possível iniciar a partida.");

    const chosenRounds = data.totalRounds ?? 3;
    const chosenDifficulty = data.difficulty ?? "normal";
    const taggedName = `${name} [${chosenRounds}R] [D:${chosenDifficulty}]`;

    let insertPayload: any = {
      user_id: userId,
      player_name: taggedName,
      total_rounds: chosenRounds,
      difficulty: chosenDifficulty,
    };

    let match: any;
    const { data: mData, error: mError } = await supabaseAdmin
      .from("matches")
      .insert(insertPayload)
      .select()
      .single();

    if (mError) {
      // Se a coluna 'difficulty' ainda não estiver aplicada na tabela remota do Supabase,
      // insere sem ela (a tag [D:difficulty] no player_name garante a persistência).
      delete insertPayload.difficulty;
      const retry = await supabaseAdmin.from("matches").insert(insertPayload).select().single();
      if (retry.error) throw new Error(retry.error.message);
      match = retry.data;
    } else {
      match = mData;
    }

    const { error: rErr } = await supabaseAdmin
      .from("rounds")
      .insert({ match_id: match.id, number: 1 });
    if (rErr) throw new Error(rErr.message);

    return {
      matchId: match.id,
      playerName: cleanPlayerName(name),
      totalRounds: chosenRounds,
      difficulty: chosenDifficulty,
      status: "in_progress",
      currentRound: 1,
      playerRounds: 0,
      codificadorRounds: 0,
      playerScore: 0,
      codificadorScore: 0,
      winner: null,
    };
  });

export const nextQuestion = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ matchId: z.string().uuid() }).parse(d))
  .handler(async ({ data }): Promise<PublicQuestion> => {
    const { supabaseAdmin, loadOwnedMatch, getCurrentRound } = await import("./game.server");
    const match = await loadOwnedMatch(data.matchId);
    if (match.status !== "in_progress") throw new Error("A partida já terminou.");
    const round = await getCurrentRound(match.id, match.current_round);
    const matchDifficulty = extractMatchDifficulty(match);

    // Re-serve a pending (unanswered) question instead of creating another.
    const { data: pending } = await supabaseAdmin
      .from("answers")
      .select("id, question_id")
      .eq("match_id", match.id)
      .is("answered_at", null)
      .maybeSingle();

    let answerId: string;
    let questionId: string;
    if (pending) {
      answerId = pending.id;
      questionId = pending.question_id;
    } else {
      const { data: used } = await supabaseAdmin
        .from("answers")
        .select("question_id")
        .eq("match_id", match.id);
      const usedIds = new Set((used ?? []).map((u) => u.question_id));
      const { data: all, error } = await supabaseAdmin
        .from("questions")
        .select("id, difficulty")
        .eq("active", true);
      if (error) throw new Error(error.message);
      if (!all?.length) throw new Error("Não há perguntas ativas no banco.");

      const fresh = all.filter((q) => !usedIds.has(q.id));
      const pool = fresh.length ? fresh : all;

      // Conduz as perguntas de acordo com o nível de dificuldade selecionado para o jogador
      const candidate = pickQuestionCandidate(pool, matchDifficulty);
      questionId = candidate.id;

      const { data: ins, error: insErr } = await supabaseAdmin
        .from("answers")
        .insert({ match_id: match.id, round_id: round.id, question_id: questionId })
        .select("id")
        .single();
      if (insErr) throw new Error(insErr.message);
      answerId = ins.id;
    }

    const { data: q, error: qErr } = await supabaseAdmin
      .from("questions")
      .select("code, book, statement, option_a, option_b, option_c, option_d, option_e, difficulty")
      .eq("id", questionId)
      .single();
    if (qErr) throw new Error(qErr.message);

    return {
      answerId,
      code: q.code,
      book: q.book as PublicQuestion["book"],
      statement: q.statement,
      difficulty: q.difficulty as PublicQuestion["difficulty"],
      options: [
        { letter: "A", text: q.option_a },
        { letter: "B", text: q.option_b },
        { letter: "C", text: q.option_c },
        { letter: "D", text: q.option_d },
        { letter: "E", text: q.option_e },
      ],
    };
  });

export const submitAnswer = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({ matchId: z.string().uuid(), answerId: z.string().uuid(), option: z.enum(LETTERS) })
      .parse(d),
  )
  .handler(async ({ data }): Promise<AnswerResult> => {
    const { supabaseAdmin, loadOwnedMatch, getCurrentRound } = await import("./game.server");
    const match = await loadOwnedMatch(data.matchId);
    if (match.status !== "in_progress") throw new Error("A partida já terminou.");

    // Lock the answer: only the first submission is scored.
    const { data: locked, error: lockErr } = await supabaseAdmin
      .from("answers")
      .update({ answered_at: new Date().toISOString(), player_option: data.option })
      .eq("id", data.answerId)
      .eq("match_id", match.id)
      .is("answered_at", null)
      .select("id, question_id")
      .maybeSingle();
    if (lockErr) throw new Error(lockErr.message);
    if (!locked) throw new Error("Esta pergunta já foi respondida.");

    const { data: q, error: qErr } = await supabaseAdmin
      .from("questions")
      .select("correct_option, explanation, reference, difficulty")
      .eq("id", locked.question_id)
      .single();
    if (qErr) throw new Error(qErr.message);
    const correct = q.correct_option as Letter;
    const playerCorrect = data.option === correct;

    // O Codificador não responde: apenas registra se o jogador acertou ou errou.
    await supabaseAdmin
      .from("answers")
      .update({
        player_correct: playerCorrect,
        codificador_option: null,
        codificador_correct: null,
      })
      .eq("id", locked.id);

    const round = await getCurrentRound(match.id, match.current_round);
    const score = applyAnswer(round.player_score, round.codificador_score, playerCorrect);
    await supabaseAdmin
      .from("rounds")
      .update({
        player_score: score.player,
        codificador_score: score.codificador,
        winner: score.roundWinner,
      })
      .eq("id", round.id);

    const matchDifficulty = extractMatchDifficulty(match);
    let state: MatchState = {
      matchId: match.id,
      playerName: cleanPlayerName(match.player_name),
      totalRounds: extractMatchTotalRounds(match),
      difficulty: matchDifficulty,
      status: "in_progress",
      currentRound: match.current_round,
      playerRounds: match.player_rounds,
      codificadorRounds: match.codificador_rounds,
      playerScore: score.player,
      codificadorScore: score.codificador,
      winner: null,
    };

    if (score.roundWinner) {
      const r = applyRoundWin(
        match.player_rounds,
        match.codificador_rounds,
        score.roundWinner,
        extractMatchTotalRounds(match),
      );
      const finished = r.matchWinner !== null;
      const nextRound = finished ? match.current_round : match.current_round + 1;
      await supabaseAdmin
        .from("matches")
        .update({
          player_rounds: r.playerRounds,
          codificador_rounds: r.codRounds,
          current_round: nextRound,
          status: finished ? "finished" : "in_progress",
          winner: r.matchWinner,
          finished_at: finished ? new Date().toISOString() : null,
        })
        .eq("id", match.id);
      if (!finished) {
        await supabaseAdmin.from("rounds").insert({ match_id: match.id, number: nextRound });
      }
      state = {
        ...state,
        status: finished ? "finished" : "in_progress",
        playerRounds: r.playerRounds,
        codificadorRounds: r.codRounds,
        currentRound: nextRound,
        winner: r.matchWinner,
        playerScore: finished ? score.player : 0,
        codificadorScore: finished ? score.codificador : 0,
      };
    }

    return {
      correctOption: correct,
      playerOption: data.option,
      playerCorrect,
      codificadorOption: null,
      codificadorCorrect: null,
      codificadorCounted: false,
      explanation: q.explanation,
      reference: q.reference,
      roundWinner: score.roundWinner,
      finishedRound: match.current_round,
      roundScore: { player: score.player, codificador: score.codificador },
      state,
    };
  });
