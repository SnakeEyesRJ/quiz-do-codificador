import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import {
  applyRoundWin,
  DIFFICULTY_LEVELS,
  DIFFICULTY_QUESTION_MAP,
  extractMatchDifficulty,
  pickUnusedQuestionCandidate,
  resolveQuestionBook,
  type GameDifficulty,
  type Side,
} from "./game-rules";
import { overlayCleanQuestion } from "./game.server";
import {
  applyMultiplayerAnswers,
  buildRoomName,
  generateRoomCode,
  normalizeRoomCode,
  parseRoomName,
  QUESTION_SECONDS,
  REVEAL_SECONDS,
  ROOM_WAIT_MINUTES,
  type Letter,
  type MpPlayers,
  type MpQuestion,
  type MpReveal,
  type MpRole,
  type MpState,
} from "./multiplayer";

/**
 * Lógica de servidor do modo multiplayer. Recebe o cliente admin por parâmetro
 * (e o relógio) para poder ser testada com um banco em memória.
 */
export type Admin = SupabaseClient<Database>;

type Row = Record<string, any>;

const EXPIRY_GRACE_MS = 2000;

function sideOf(role: MpRole): Side {
  return role === "host" ? "player" : "codificador";
}

function roleOfSide(side: string | null | undefined): MpRole | null {
  return side === "player" ? "host" : side === "codificador" ? "guest" : null;
}

function fail(message: string): never {
  throw new Error(message);
}

async function loadRoom(admin: Admin, code: string): Promise<Row | null> {
  const { data, error } = await admin
    .from("matches")
    .select("*")
    .like("player_name", `%[MP:${code}]%`)
    .order("created_at", { ascending: false })
    .limit(10);
  if (error) fail(error.message);
  const rows = (data ?? []) as Row[];
  return rows.find((r) => parseRoomName(r["player_name"]).code === code) ?? null;
}

async function loadAnswers(admin: Admin, matchId: string): Promise<Row[]> {
  const { data, error } = await admin
    .from("answers")
    .select("*")
    .eq("match_id", matchId)
    .order("served_at", { ascending: true })
    .order("id", { ascending: true });
  if (error) fail(error.message);
  return (data ?? []) as Row[];
}

async function loadRoundById(admin: Admin, roundId: string): Promise<Row> {
  const { data, error } = await admin.from("rounds").select("*").eq("id", roundId).single();
  if (error) fail(error.message);
  return data as Row;
}

async function loadRoundByNumber(admin: Admin, matchId: string, number: number): Promise<Row> {
  const { data, error } = await admin
    .from("rounds")
    .select("*")
    .eq("match_id", matchId)
    .eq("number", number)
    .single();
  if (error) fail(error.message);
  return data as Row;
}

async function loadQuestionPublic(
  admin: Admin,
  questionId: string,
  answerId: string,
): Promise<MpQuestion> {
  const { data, error } = await admin
    .from("questions")
    .select("code, book, statement, option_a, option_b, option_c, option_d, option_e, difficulty")
    .eq("id", questionId)
    .single();
  if (error) fail(error.message);
  const q = overlayCleanQuestion(data as Row);
  const resolvedBook = resolveQuestionBook({ book: q["book"], code: q["code"] }) ?? q["book"];
  return {
    answerId,
    code: q["code"],
    book: resolvedBook,
    statement: q["statement"],
    difficulty: q["difficulty"],
    options: [
      { letter: "A", text: q["option_a"] },
      { letter: "B", text: q["option_b"] },
      { letter: "C", text: q["option_c"] },
      { letter: "D", text: q["option_d"] },
      { letter: "E", text: q["option_e"] },
    ],
  };
}

function roleOfUser(match: Row, userId: string): MpRole | null {
  if (match["user_id"] === userId) return "host";
  if (parseRoomName(match["player_name"]).guestId === userId) return "guest";
  return null;
}

function oldestPending(rows: Row[]): Row | undefined {
  return rows.find((r) => !r["answered_at"]);
}

function newestResolved(rows: Row[]): Row | undefined {
  return [...rows].reverse().find((r) => !!r["answered_at"]);
}

// ---------------------------------------------------------------------------
// Criar / entrar / sair
// ---------------------------------------------------------------------------

export interface MpUser {
  id: string;
  name: string;
}

export async function createRoom(
  admin: Admin,
  user: MpUser,
  opts: { totalRounds: number; difficulty: GameDifficulty },
  now: Date = new Date(),
  random?: () => number,
): Promise<{ code: string }> {
  // Validate the question pool before creating a room; otherwise the players
  // could join successfully and then be stranded without a first question.
  const { data: pool, error: poolError } = await admin
    .from("questions")
    .select("id, difficulty")
    .eq("active", true);
  if (poolError) fail(poolError.message);
  const availableCount = (pool ?? []).filter(
    (question) => question.difficulty === DIFFICULTY_QUESTION_MAP[opts.difficulty],
  ).length;
  if (availableCount < 10) {
    fail("Não há pelo menos 10 perguntas ativas neste nível para iniciar uma rodada sem repetição.");
  }

  // Remove salas anteriores do mesmo anfitrião que ainda aguardam adversário.
  const { data: mine } = await admin
    .from("matches")
    .select("id, player_name")
    .eq("user_id", user.id)
    .eq("status", "in_progress")
    .like("player_name", "%[MP:%");
  const stale = ((mine ?? []) as Row[]).filter((m) => !parseRoomName(m["player_name"]).guestId);
  if (stale.length) {
    const { error: cleanupError } = await admin
      .from("matches")
      .delete()
      .in("id", stale.map((m) => m["id"]));
    if (cleanupError) fail(cleanupError.message);
  }

  let code = "";
  for (let attempt = 0; attempt < 8; attempt++) {
    const candidate = generateRoomCode(random);
    const existing = await loadRoom(admin, candidate);
    if (!existing || existing["status"] === "finished") {
      code = candidate;
      break;
    }
  }
  if (!code) fail("Não foi possível gerar um código de sala. Tente novamente.");

  const payload: Row = {
    user_id: user.id,
    player_name: buildRoomName({
      hostName: user.name,
      code,
      totalRounds: opts.totalRounds,
      difficulty: opts.difficulty,
    }),
    total_rounds: opts.totalRounds,
    difficulty: opts.difficulty,
    created_at: now.toISOString(),
  };

  let inserted = await admin
    .from("matches")
    .insert(payload as any)
    .select()
    .single();
  const missingDifficultyColumn =
    inserted.error?.code === "42703" ||
    /column .*difficulty.* does not exist|difficulty.*column/i.test(inserted.error?.message ?? "");
  if (missingDifficultyColumn) {
    // Compatibility for older deployments only; never retry unrelated failures.
    delete payload["difficulty"];
    inserted = await admin
      .from("matches")
      .insert(payload as any)
      .select()
      .single();
  }
  if (inserted.error || !inserted.data) {
    fail(inserted.error?.message ?? "Não foi possível criar a sala.");
  }
  const match = inserted.data as Row;

  const { error: rErr } = await admin.from("rounds").insert({ match_id: match["id"], number: 1 });
  if (rErr) {
    await admin.from("matches").delete().eq("id", match["id"]);
    fail(rErr.message);
  }
  return { code };
}

export async function joinRoom(
  admin: Admin,
  user: MpUser,
  rawCode: string,
  now: Date = new Date(),
  random: () => number = Math.random,
): Promise<{ code: string }> {
  const code = normalizeRoomCode(rawCode);
  const match = await loadRoom(admin, code);
  if (!match) fail("Sala não encontrada. Confira o código e tente novamente.");
  const tags = parseRoomName(match["player_name"]);

  // Quem já faz parte da sala apenas volta para ela.
  if (match["user_id"] === user.id || tags.guestId === user.id) return { code };

  if (match["status"] !== "in_progress") fail("Esta partida já foi encerrada.");
  if (tags.guestId) fail("Esta sala já está completa.");
  const ageMin = (now.getTime() - new Date(match["created_at"]).getTime()) / 60000;
  if (ageMin > ROOM_WAIT_MINUTES) fail("Esta sala expirou. Peça ao anfitrião para criar outra.");

  const difficulty = extractMatchDifficulty(match);
  const newName = buildRoomName({
    hostName: tags.hostName,
    code,
    guestId: user.id,
    guestName: user.name,
    totalRounds: tags.totalRounds ?? 3,
    difficulty,
  });
  const { data: updated, error } = await admin
    .from("matches")
    .update({ player_name: newName })
    .eq("id", match["id"])
    .eq("player_name", match["player_name"])
    .select("*")
    .maybeSingle();
  if (error) fail(error.message);
  if (!updated) fail("Esta sala acabou de ser ocupada por outro jogador.");

  // A primeira pergunta é criada por quem entra, para os dois receberem a mesma.
  await createQuestion(admin, updated as Row, now, random);
  return { code };
}

export async function leaveRoom(
  admin: Admin,
  userId: string,
  rawCode: string,
  now: Date = new Date(),
): Promise<void> {
  const code = normalizeRoomCode(rawCode);
  const match = await loadRoom(admin, code);
  if (!match) return;
  const role = roleOfUser(match, userId);
  if (!role) fail("Você não faz parte desta sala.");
  if (match["status"] !== "in_progress") return;

  const tags = parseRoomName(match["player_name"]);
  if (!tags.guestId) {
    // Ninguém entrou ainda: a sala simplesmente deixa de existir.
    await admin.from("matches").delete().eq("id", match["id"]);
    return;
  }
  // Sair no meio da partida significa desistir: o adversário vence.
  const winnerSide: Side = role === "host" ? "codificador" : "player";
  const { error: leaveError } = await admin
    .from("matches")
    .update({ status: "finished", winner: winnerSide, finished_at: now.toISOString() })
    .eq("id", match["id"]);
  if (leaveError) fail(leaveError.message);
}

// ---------------------------------------------------------------------------
// Andamento da partida
// ---------------------------------------------------------------------------

async function createQuestion(
  admin: Admin,
  match: Row,
  now: Date,
  random: () => number,
): Promise<void> {
  const round = await loadRoundByNumber(admin, match["id"], match["current_round"]);
  const used = await loadAnswers(admin, match["id"]);
  const usedIds = new Set(used.map((u) => u["question_id"]));

  const { data: all, error } = await admin
    .from("questions")
    .select("id, difficulty")
    .eq("active", true);
  if (error) fail(error.message);
  if (!all?.length) fail("Não há perguntas ativas no banco.");

  const candidate = pickUnusedQuestionCandidate(all, usedIds, extractMatchDifficulty(match), random);

  const { error: insErr } = await admin
    .from("answers")
    .insert({
      match_id: match["id"],
      round_id: round["id"],
      question_id: candidate.id,
      served_at: now.toISOString(),
    });
  // The partial unique index guarantees only one unanswered question per match.
  // A concurrent request may win the insert; the existing pending row is reused.
  if (insErr && insErr.code !== "23505") fail(insErr.message);
}

/** Corrige o placar da rodada/partida após uma pergunta ser resolvida. Chamada uma única vez por pergunta. */
async function resolveQuestion(admin: Admin, match: Row, row: Row, now: Date): Promise<void> {
  const { data: q, error: qErr } = await admin
    .from("questions")
    .select("correct_option")
    .eq("id", row["question_id"])
    .single();
  if (qErr) fail(qErr.message);
  const correct = (q as Row)["correct_option"] as Letter;
  const hostCorrect = row["player_option"] === correct;
  const guestCorrect = row["codificador_option"] === correct;

  // Lock first: only one caller may resolve and score this question.
  const { data: locked, error: lockErr } = await admin
    .from("answers")
    .update({
      answered_at: now.toISOString(),
      player_correct: hostCorrect,
      codificador_correct: guestCorrect,
    })
    .eq("id", row["id"])
    .is("answered_at", null)
    .select("id")
    .maybeSingle();
  if (lockErr) fail(lockErr.message);
  if (!locked) return;

  const rollbackAnswer = async () => {
    const { error } = await admin
      .from("answers")
      .update({
        answered_at: null,
        player_correct: null,
        codificador_correct: null,
      })
      .eq("id", row["id"])
      .eq("answered_at", now.toISOString());
    if (error) fail(`Falha ao restaurar a resposta após erro: ${error.message}`);
  };

  const round = await loadRoundById(admin, row["round_id"]);
  const score = applyMultiplayerAnswers(
    round["player_score"],
    round["codificador_score"],
    hostCorrect,
    guestCorrect,
  );
  const { error: scoreError } = await admin
    .from("rounds")
    .update({
      player_score: score.host,
      codificador_score: score.guest,
      winner: score.roundWinner,
    })
    .eq("id", round["id"]);
  if (scoreError) {
    await rollbackAnswer();
    fail(scoreError.message);
  }

  if (!score.roundWinner) return;

  const totalRounds = parseRoomName(match["player_name"]).totalRounds ?? match["total_rounds"] ?? 3;
  const r = applyRoundWin(
    match["player_rounds"],
    match["codificador_rounds"],
    score.roundWinner,
    totalRounds,
  );
  const finished = r.matchWinner !== null;
  const nextRound = finished ? match["current_round"] : match["current_round"] + 1;
  const { error: matchError } = await admin
    .from("matches")
    .update({
      player_rounds: r.playerRounds,
      codificador_rounds: r.codRounds,
      current_round: nextRound,
      status: finished ? "finished" : "in_progress",
      winner: r.matchWinner,
      finished_at: finished ? now.toISOString() : null,
    })
    .eq("id", match["id"]);
  if (matchError) {
    await admin.from("rounds").update({
      player_score: round["player_score"],
      codificador_score: round["codificador_score"],
      winner: round["winner"],
    }).eq("id", round["id"]);
    await rollbackAnswer();
    fail(matchError.message);
  }

  if (!finished) {
    const { error: nextRoundError } = await admin
      .from("rounds")
      .insert({ match_id: match["id"], number: nextRound });
    if (nextRoundError) {
      await admin.from("matches").update({
        player_rounds: match["player_rounds"],
        codificador_rounds: match["codificador_rounds"],
        current_round: match["current_round"],
        status: match["status"],
        winner: match["winner"],
        finished_at: match["finished_at"],
      }).eq("id", match["id"]);
      await admin.from("rounds").update({
        player_score: round["player_score"],
        codificador_score: round["codificador_score"],
        winner: round["winner"],
      }).eq("id", round["id"]);
      await rollbackAnswer();
      fail(nextRoundError.message);
    }
  }
}

/** Faz a sala andar: resolve perguntas respondidas/expiradas e cria a próxima após o gabarito. */
async function advance(admin: Admin, code: string, match: Row, now: Date, random: () => number) {
  const rows = await loadAnswers(admin, match["id"]);
  const pending = oldestPending(rows);

  if (!rows.length) {
    await createQuestion(admin, match, now, random);
  } else if (pending) {
    const servedAt = new Date(pending["served_at"]).getTime();
    const bothAnswered = !!pending["player_option"] && !!pending["codificador_option"];
    const expired = now.getTime() - servedAt > (QUESTION_SECONDS + EXPIRY_GRACE_MS / 1000) * 1000;
    if (bothAnswered || expired) {
      await resolveQuestion(admin, match, pending, now);
    }
  } else {
    const last = newestResolved(rows);
    const answeredAt = last ? new Date(last["answered_at"]).getTime() : 0;
    if (last && now.getTime() - answeredAt >= REVEAL_SECONDS * 1000) {
      await createQuestion(admin, match, now, random);
    }
  }
  return (await loadRoom(admin, code)) ?? match;
}

async function buildReveal(
  admin: Admin,
  match: Row,
  row: Row,
  now: Date,
  finished: boolean,
): Promise<MpReveal> {
  const { data, error } = await admin
    .from("questions")
    .select("code, correct_option, explanation, reference")
    .eq("id", row["question_id"])
    .single();
  if (error) fail(error.message);
  const q = overlayCleanQuestion(data as Row);
  const round = await loadRoundById(admin, row["round_id"]);
  const question = await loadQuestionPublic(admin, row["question_id"], row["id"]);
  const elapsed = (now.getTime() - new Date(row["answered_at"]).getTime()) / 1000;
  return {
    question,
    correctOption: q["correct_option"],
    hostOption: row["player_option"] ?? null,
    guestOption: row["codificador_option"] ?? null,
    hostCorrect: !!row["player_correct"],
    guestCorrect: !!row["codificador_correct"],
    explanation: q["explanation"],
    reference: q["reference"],
    hostScore: round["player_score"],
    guestScore: round["codificador_score"],
    roundNumber: round["number"],
    roundWinner: roleOfSide(round["winner"]),
    nextInSeconds: finished ? null : Math.max(0, Math.ceil(REVEAL_SECONDS - elapsed)),
  };
}

export async function getRoomState(
  admin: Admin,
  rawCode: string,
  userId: string,
  now: Date = new Date(),
  random: () => number = Math.random,
): Promise<MpState> {
  const code = normalizeRoomCode(rawCode);
  let match = await loadRoom(admin, code);
  if (!match) fail("Sala não encontrada.");
  const role = roleOfUser(match, userId);
  if (!role) fail("Você não faz parte desta sala.");

  const tags = parseRoomName(match["player_name"]);
  if (tags.guestId && match["status"] === "in_progress") {
    match = await advance(admin, code, match, now, random);
  }

  const finished = match["status"] === "finished";
  const phase: MpState["phase"] = finished ? "finished" : tags.guestId ? "playing" : "waiting";
  const rows = tags.guestId ? await loadAnswers(admin, match["id"]) : [];
  const pending = finished ? undefined : oldestPending(rows);
  const lastResolved = newestResolved(rows);
  const round = await loadRoundByNumber(admin, match["id"], match["current_round"]);
  const difficulty = extractMatchDifficulty(match);
  const safeDifficulty: GameDifficulty = (DIFFICULTY_LEVELS as readonly string[]).includes(
    difficulty,
  )
    ? difficulty
    : "normal";

  let question: MpQuestion | null = null;
  let secondsLeft: number | null = null;
  let myOption: Letter | null = null;
  let myAnswered = false;
  let opponentAnswered = false;
  if (pending) {
    question = await loadQuestionPublic(admin, pending["question_id"], pending["id"]);
    const left =
      QUESTION_SECONDS - (now.getTime() - new Date(pending["served_at"]).getTime()) / 1000;
    secondsLeft = Math.max(0, Math.ceil(left));
    const mine = role === "host" ? pending["player_option"] : pending["codificador_option"];
    const theirs = role === "host" ? pending["codificador_option"] : pending["player_option"];
    myOption = (mine as Letter | null) ?? null;
    myAnswered = !!mine;
    opponentAnswered = !!theirs;
  }

  const reveal =
    !pending && lastResolved ? await buildReveal(admin, match, lastResolved, now, finished) : null;

  return {
    code,
    role,
    phase,
    totalRounds: tags.totalRounds ?? match["total_rounds"] ?? 3,
    difficulty: safeDifficulty,
    currentRound: match["current_round"],
    host: { id: match["user_id"], name: tags.hostName },
    guest: tags.guestId ? { id: tags.guestId, name: tags.guestName ?? "Jogador" } : null,
    hostRounds: match["player_rounds"],
    guestRounds: match["codificador_rounds"],
    hostScore: round["player_score"],
    guestScore: round["codificador_score"],
    winner: roleOfSide(match["winner"]),
    question,
    secondsLeft,
    myOption,
    myAnswered,
    opponentAnswered,
    reveal,
  };
}

export async function submitRoomAnswer(
  admin: Admin,
  rawCode: string,
  userId: string,
  answerId: string,
  option: Letter,
  now: Date = new Date(),
  random: () => number = Math.random,
): Promise<MpState> {
  const code = normalizeRoomCode(rawCode);
  const match = await loadRoom(admin, code);
  if (!match) fail("Sala não encontrada.");
  const role = roleOfUser(match, userId);
  if (!role) fail("Você não faz parte desta sala.");
  if (match["status"] !== "in_progress") fail("A partida já terminou.");

  const { data: row, error } = await admin
    .from("answers")
    .select("*")
    .eq("id", answerId)
    .eq("match_id", match["id"])
    .maybeSingle();
  if (error) fail(error.message);
  if (!row) fail("Pergunta não encontrada.");
  const servedAt = new Date((row as Row)["served_at"]).getTime();
  if (now.getTime() - servedAt > (QUESTION_SECONDS + EXPIRY_GRACE_MS / 1000) * 1000) {
    fail("O tempo desta pergunta acabou.");
  }

  const column = role === "host" ? "player_option" : "codificador_option";
  const updatePayload =
    role === "host" ? { player_option: option } : { codificador_option: option };
  const { data: saved, error: saveErr } = await admin
    .from("answers")
    .update(updatePayload)
    .eq("id", answerId)
    .is("answered_at", null)
    .is(column, null)
    .select("id")
    .maybeSingle();
  if (saveErr) fail(saveErr.message);
  if (!saved) fail("Você já respondeu esta pergunta.");

  return getRoomState(admin, code, userId, now, random);
}

export async function getRoomPlayers(
  admin: Admin,
  rawCode: string,
  userId: string,
): Promise<MpPlayers> {
  const code = normalizeRoomCode(rawCode);
  const match = await loadRoom(admin, code);
  if (!match) fail("Sala não encontrada.");
  if (!roleOfUser(match, userId)) fail("Você não faz parte desta sala.");
  const tags = parseRoomName(match["player_name"]);

  const ids = [match["user_id"], tags.guestId].filter(Boolean) as string[];
  const { data } = await admin
    .from("profiles")
    .select("id, display_name, avatar_url")
    .in("id", ids);
  const byId = new Map(((data ?? []) as Row[]).map((p) => [p["id"], p]));

  const build = (id: string, fallbackName: string) => ({
    id,
    name: fallbackName,
    avatarUrl: (byId.get(id)?.["avatar_url"] as string | null | undefined) ?? null,
  });
  return {
    host: build(match["user_id"], tags.hostName),
    guest: tags.guestId ? build(tags.guestId, tags.guestName ?? "Jogador") : null,
  };
}

/** Partidas em que o usuário entrou como convidado (para o histórico). */
export async function listGuestMatches(admin: Admin, userId: string): Promise<Row[]> {
  const { data, error } = await admin
    .from("matches")
    .select("*")
    .like("player_name", `%[G:${userId}]%`)
    .order("created_at", { ascending: false });
  if (error) fail(error.message);
  return (data ?? []) as Row[];
}
