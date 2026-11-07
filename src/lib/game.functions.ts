import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  applyAnswer,
  applyRoundWin,
  cleanPlayerName,
  DIFFICULTY_LEVELS,
  DIFFICULTY_QUESTION_MAP,
  extractMatchDifficulty,
  extractMatchBook,
  resolveQuestionBook,
  pickUnusedQuestionCandidate,
  type GameDifficulty,
  type BookSelection,
  type Side,
} from "./game-rules";

const LETTERS = ["A", "B", "C", "D", "E"] as const;
type Letter = (typeof LETTERS)[number];

export interface MatchState {
  matchId: string;
  playerName: string;
  totalRounds: number;
  difficulty: GameDifficulty;
  book: BookSelection;
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
    | "obras_postumas"
    | "o_que_e_espiritismo"
    | "nosso_lar"
    | "os_mensageiros";
  statement: string;
  difficulty: "facil" | "medio" | "dificil" | "expert";
  options: { letter: Letter; text: string }[];
}

export interface AnswerResult {
  correctOption: Letter;
  playerOption: Letter;
  playerCorrect: boolean;
  codificadorOption?: Letter | string | null;
  codificadorCorrect?: boolean | null;
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
        playerName: z.string().trim().min(1).max(60).optional(),
        totalRounds: z
          .union([z.literal(3), z.literal(5), z.literal(7), z.literal(9)])
          .optional()
          .default(3),
        difficulty: z.enum(DIFFICULTY_LEVELS).optional().default("normal"),
        book: z.enum(["todos", "livro_espiritos", "livro_mediuns", "evangelho", "ceu_inferno", "genese", "obras_postumas", "o_que_e_espiritismo", "nosso_lar", "os_mensageiros"]).optional().default("todos"),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<MatchState> => {
    const { supabaseAdmin, getOptionalUserId, ensureOQueEEspiritismoQuestions } =
      await import("./game.server");
    await ensureOQueEEspiritismoQuestions();
    const userId = await getOptionalUserId();
    let name = cleanPlayerName(data.playerName || "Jogador") || "Jogador";
    if (userId) {
      const { data: p } = await supabaseAdmin
        .from("profiles")
        .select("display_name")
        .eq("id", userId)
        .maybeSingle();
      if (p?.display_name) name = p.display_name;
    }
    const { data: availableQuestions, error: availableError } = await supabaseAdmin
      .from("questions")
      .select("id, book, code, difficulty")
      .eq("active", true);
    if (availableError) throw new Error(availableError.message);
    const chosenRounds = data.totalRounds ?? 3;
    const chosenDifficulty = data.difficulty ?? "normal";
    const chosenBook = data.book ?? "todos";
    const availableForBook = chosenBook === "todos"
      ? (availableQuestions ?? [])
      : (availableQuestions ?? []).filter(
          (question) => resolveQuestionBook(question) === chosenBook,
        );
    if (!availableForBook.length) {
      throw new Error(chosenBook === "todos"
        ? "O banco de perguntas está vazio. Não é possível iniciar a partida."
        : "Não há perguntas ativas para este livro. Escolha outra obra ou Todos os livros.");
    }
    const requiredDifficulty = DIFFICULTY_QUESTION_MAP[chosenDifficulty];
    const difficultyCount = availableForBook.filter(
      (question) => question.difficulty === requiredDifficulty,
    ).length;
    if (difficultyCount < 10) {
      throw new Error(
        `Este livro tem apenas ${difficultyCount} perguntas no nível escolhido. São necessárias pelo menos 10 para completar uma rodada sem repetição.`,
      );
    }
    const taggedName = `${name} [${chosenRounds}R] [D:${chosenDifficulty}] [B:${chosenBook}]`;

    const { data: match, error: mError } = await supabaseAdmin
      .from("matches")
      .insert({
        user_id: userId,
        player_name: taggedName,
        total_rounds: chosenRounds,
        difficulty: chosenDifficulty,
      })
      .select()
      .single();
    if (mError || !match) throw new Error(mError?.message ?? "Não foi possível criar a partida.");

    const { error: rErr } = await supabaseAdmin
      .from("rounds")
      .insert({ match_id: match.id, number: 1 });
    if (rErr) {
      await supabaseAdmin.from("matches").delete().eq("id", match.id);
      throw new Error(rErr.message);
    }

    return {
      matchId: match.id,
      playerName: cleanPlayerName(name),
      totalRounds: chosenRounds,
      difficulty: chosenDifficulty,
      book: chosenBook,
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
    const { supabaseAdmin, loadOwnedMatch, getCurrentRound, ensureOQueEEspiritismoQuestions, overlayCleanQuestion } = await import("./game.server");
    await ensureOQueEEspiritismoQuestions();
    const match = await loadOwnedMatch(data.matchId);
    if (match.status !== "in_progress") throw new Error("A partida já terminou.");
    const round = await getCurrentRound(match.id, match.current_round);
    const matchDifficulty = extractMatchDifficulty(match);
    const matchBook = extractMatchBook(match);

    // Re-serve a pending (unanswered) question instead of creating another.
    const { data: pending, error: pendingError } = await supabaseAdmin
      .from("answers")
      .select("id, question_id")
      .eq("match_id", match.id)
      .eq("round_id", round.id)
      .is("answered_at", null)
      .maybeSingle();
    if (pendingError) throw new Error(pendingError.message);

    let answerId: string;
    let questionId: string;
    if (pending) {
      answerId = pending.id;
      questionId = pending.question_id;
    } else {
      const { data: used, error: usedError } = await supabaseAdmin
        .from("answers")
        .select("question_id")
        .eq("match_id", match.id);
      if (usedError) throw new Error(usedError.message);
      const usedIds = new Set((used ?? []).map((u) => u.question_id));
      const { data: all, error } = await supabaseAdmin
        .from("questions")
        .select("id, difficulty, book, code")
        .eq("active", true);
      if (error) throw new Error(error.message);
      if (!all?.length) throw new Error("Não há perguntas ativas no banco.");
      const bookCandidates = matchBook === "todos"
        ? all
        : all.filter(
            (item) => resolveQuestionBook(item) === matchBook,
          );
      if (!bookCandidates.length)
        throw new Error("Não há perguntas ativas para o livro selecionado.");
      const difficultyCandidates = bookCandidates.filter(
        (item) => item.difficulty === DIFFICULTY_QUESTION_MAP[matchDifficulty],
      );
      if (!difficultyCandidates.length)
        throw new Error("Não há perguntas deste livro no nível de dificuldade escolhido. Selecione outra dificuldade ou outro livro.");

      // Filtra primeiro pela obra escolhida e depois pela dificuldade fixa da partida.
      const candidate = pickUnusedQuestionCandidate(difficultyCandidates, usedIds, matchDifficulty);
      questionId = candidate.id;

      const { data: ins, error: insErr } = await supabaseAdmin
        .from("answers")
        .insert({ match_id: match.id, round_id: round.id, question_id: questionId })
        .select("id")
        .single();
      if (insErr?.code === "23505") {
        // Another request created the pending question first; reuse that row.
        const { data: raced, error: racedError } = await supabaseAdmin
          .from("answers")
          .select("id, question_id")
          .eq("match_id", match.id)
          .eq("round_id", round.id)
          .is("answered_at", null)
          .single();
        if (racedError || !raced) throw new Error(racedError?.message ?? "Não foi possível recuperar a pergunta.");
        answerId = raced.id;
        questionId = raced.question_id;
      } else {
        if (insErr || !ins) throw new Error(insErr?.message ?? "Não foi possível criar a pergunta.");
        answerId = ins.id;
      }
    }

    const { data: q, error: qErr } = await supabaseAdmin
      .from("questions")
      .select("code, book, statement, option_a, option_b, option_c, option_d, option_e, difficulty")
      .eq("id", questionId)
      .single();
    if (qErr) throw new Error(qErr.message);

    const resolvedBook = resolveQuestionBook(q) as PublicQuestion["book"] | null;
    const cleanQ = overlayCleanQuestion(q);
    if (!resolvedBook) throw new Error("Não foi possível identificar a obra desta pergunta.");

    return {
      answerId,
      code: q.code,
      book: resolvedBook,
      statement: cleanQ.statement,
      difficulty: q.difficulty as PublicQuestion["difficulty"],
      options: [
        { letter: "A", text: cleanQ.option_a },
        { letter: "B", text: cleanQ.option_b },
        { letter: "C", text: cleanQ.option_c },
        { letter: "D", text: cleanQ.option_d },
        { letter: "E", text: cleanQ.option_e },
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
    const { supabaseAdmin, loadOwnedMatch, getCurrentRound, overlayCleanQuestion } = await import("./game.server");
    const ownedMatch = await loadOwnedMatch(data.matchId);
    if (ownedMatch.status !== "in_progress") throw new Error("A partida já terminou.");

    const { data: locked, error: lockErr } = await supabaseAdmin
      .from("answers")
      .update({ answered_at: new Date().toISOString(), player_option: data.option })
      .eq("id", data.answerId)
      .eq("match_id", ownedMatch.id)
      .is("answered_at", null)
      .select("id, question_id")
      .maybeSingle();
    if (lockErr) throw new Error(lockErr.message);
    if (!locked) throw new Error("Esta pergunta já foi respondida.");

    const { data: q, error: qErr } = await supabaseAdmin
      .from("questions")
      .select("code, book, correct_option, explanation, reference, difficulty")
      .eq("id", locked.question_id)
      .single();
    if (qErr) throw new Error(qErr.message);
    const cleanAnsweredQ = overlayCleanQuestion(q);
    const correct = cleanAnsweredQ.correct_option as Letter;
    const playerCorrect = data.option === correct;

    await supabaseAdmin
      .from("answers")
      .update({
        player_correct: playerCorrect,
        codificador_option: null,
        codificador_correct: null,
      })
      .eq("id", locked.id);

    const round = await getCurrentRound(ownedMatch.id, ownedMatch.current_round);
    const score = applyAnswer(round.player_score, round.codificador_score, playerCorrect);
    await supabaseAdmin
      .from("rounds")
      .update({
        player_score: score.player,
        codificador_score: score.codificador,
        winner: score.roundWinner,
      })
      .eq("id", round.id);

    const matchDifficulty = extractMatchDifficulty(ownedMatch);
    let state: MatchState = {
      matchId: ownedMatch.id,
      playerName: cleanPlayerName(ownedMatch.player_name),
      totalRounds: extractMatchTotalRounds(ownedMatch),
      difficulty: matchDifficulty,
      book: extractMatchBook(ownedMatch),
      status: "in_progress",
      currentRound: ownedMatch.current_round,
      playerRounds: ownedMatch.player_rounds,
      codificadorRounds: ownedMatch.codificador_rounds,
      playerScore: score.player,
      codificadorScore: score.codificador,
      winner: null,
    };

    if (score.roundWinner) {
      const r = applyRoundWin(
        ownedMatch.player_rounds,
        ownedMatch.codificador_rounds,
        score.roundWinner,
        extractMatchTotalRounds(ownedMatch),
      );
      const finished = r.matchWinner !== null;
      const nextRound = finished ? ownedMatch.current_round : ownedMatch.current_round + 1;
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
        .eq("id", ownedMatch.id);
      if (!finished) {
        await supabaseAdmin.from("rounds").insert({ match_id: ownedMatch.id, number: nextRound });
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
      explanation: cleanAnsweredQ.explanation,
      reference: cleanAnsweredQ.reference,
      roundWinner: score.roundWinner,
      finishedRound: ownedMatch.current_round,
      roundScore: { player: score.player, codificador: score.codificador },
      state,
    };
  });

/** Exclui todo o histórico de partidas do jogador logado (rounds e answers caem em cascata). */
export const clearMatchHistory = createServerFn({ method: "POST" }).handler(
  async (): Promise<{ deleted: number }> => {
    const { supabaseAdmin, getOptionalUserId } = await import("./game.server");
    const userId = await getOptionalUserId();
    if (!userId) throw new Error("Entre com sua conta Google para limpar o histórico.");
    const { data, error } = await supabaseAdmin
      .from("matches")
      .delete()
      .eq("user_id", userId)
      .select("id");
    if (error) throw new Error(error.message);
    return { deleted: data?.length ?? 0 };
  },
);
