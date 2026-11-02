import { ROUND_TARGET, type GameDifficulty, type Side } from "./game-rules";

/**
 * Modo multiplayer online (1 contra 1).
 *
 * O estado da sala é guardado nas tabelas já existentes (`matches`, `rounds`, `answers`):
 * - o anfitrião é o `user_id` da partida e ocupa o lado "player";
 * - o convidado ocupa o lado "codificador" (colunas *_option, *_correct, *_score, *_rounds);
 * - código da sala, id e nome do convidado ficam em tags no `player_name`,
 *   o mesmo padrão já usado para rodadas ([3R]) e dificuldade ([D:normal]).
 */

export type Letter = "A" | "B" | "C" | "D" | "E";
export type MpRole = "host" | "guest";

/** Tempo máximo para responder cada pergunta. */
export const QUESTION_SECONDS = 30;
/** Tempo de exibição do gabarito antes da próxima pergunta. */
export const REVEAL_SECONDS = 8;
/** Salas que continuam aguardando um adversário por mais tempo que isso expiram. */
export const ROOM_WAIT_MINUTES = 180;
export const ROOM_CODE_LENGTH = 5;

// Sem caracteres ambíguos (0/O, 1/I)
const ROOM_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateRoomCode(random: () => number = Math.random): string {
  let code = "";
  for (let i = 0; i < ROOM_CODE_LENGTH; i++) {
    code += ROOM_ALPHABET[Math.floor(random() * ROOM_ALPHABET.length)];
  }
  return code;
}

/** Normaliza o que o usuário digitou (ou veio no link) para o formato do código. */
export function normalizeRoomCode(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, ROOM_CODE_LENGTH);
}

export function isValidRoomCode(code: string): boolean {
  return code.length === ROOM_CODE_LENGTH && [...code].every((c) => ROOM_ALPHABET.includes(c));
}

export function sanitizeName(raw: string | null | undefined): string {
  const clean = (raw ?? "").replace(/[[\]]/g, "").replace(/\s+/g, " ").trim().slice(0, 40);
  return clean || "Jogador";
}

export interface RoomName {
  hostName: string;
  code: string | null;
  guestId: string | null;
  guestName: string | null;
  totalRounds: number | null;
  difficulty: string | null;
}

export function buildRoomName(opts: {
  hostName: string;
  code: string;
  guestId?: string | null;
  guestName?: string | null;
  totalRounds: number;
  difficulty: GameDifficulty;
}): string {
  const parts = [`${sanitizeName(opts.hostName)} [MP:${opts.code}]`];
  if (opts.guestId) {
    parts.push(`[G:${opts.guestId}]`, `[GN:${sanitizeName(opts.guestName)}]`);
  }
  parts.push(`[${opts.totalRounds}R]`, `[D:${opts.difficulty}]`);
  return parts.join(" ");
}

export function parseRoomName(raw: string | null | undefined): RoomName {
  const name = raw ?? "";
  const code = name.match(/\[MP:([A-Z0-9]+)\]/)?.[1] ?? null;
  const guestId = name.match(/\[G:([0-9a-f-]{36})\]/i)?.[1] ?? null;
  const guestName = name.match(/\[GN:([^\]]*)\]/)?.[1] ?? null;
  const rounds = name.match(/\[([3579])R\]/)?.[1];
  const difficulty = name.match(/\[D:([a-z]+)\]/i)?.[1]?.toLowerCase() ?? null;
  const hostName = name
    .replace(/\s*\[MP:[A-Z0-9]+\]/g, "")
    .replace(/\s*\[G:[^\]]*\]/g, "")
    .replace(/\s*\[GN:[^\]]*\]/g, "")
    .replace(/\s*\[[3579]R\]/g, "")
    .replace(/\s*\[D:[a-z]+\]/gi, "")
    .trim();
  return {
    hostName: hostName || "Jogador",
    code,
    guestId,
    guestName,
    totalRounds: rounds ? Number(rounds) : null,
    difficulty,
  };
}

export function isMultiplayerName(raw: string | null | undefined): boolean {
  return /\[MP:[A-Z0-9]+\]/.test(raw ?? "");
}

export interface MultiplayerScore {
  host: number;
  guest: number;
  /** "player" = anfitrião, "codificador" = convidado (colunas do banco). */
  roundWinner: Side | null;
}

/**
 * Pontuação por pergunta no 1×1: cada jogador que acerta soma 1 ponto para si.
 * A rodada termina quando alguém alcança ROUND_TARGET (10) com vantagem sobre o outro;
 * se os dois chegarem juntos ao alvo com o mesmo placar, a rodada continua (desempate).
 */
export function applyMultiplayerAnswers(
  hostScore: number,
  guestScore: number,
  hostCorrect: boolean,
  guestCorrect: boolean,
): MultiplayerScore {
  const host = hostScore + (hostCorrect ? 1 : 0);
  const guest = guestScore + (guestCorrect ? 1 : 0);
  let roundWinner: Side | null = null;
  if (Math.max(host, guest) >= ROUND_TARGET && host !== guest) {
    roundWinner = host > guest ? "player" : "codificador";
  }
  return { host, guest, roundWinner };
}

// ---------------------------------------------------------------------------
// Tipos trocados entre servidor e navegador
// ---------------------------------------------------------------------------

export interface MpQuestion {
  answerId: string;
  code: number;
  book: string;
  statement: string;
  difficulty: string;
  options: { letter: Letter; text: string }[];
}

export interface MpReveal {
  question: MpQuestion;
  correctOption: Letter;
  hostOption: Letter | null;
  guestOption: Letter | null;
  hostCorrect: boolean;
  guestCorrect: boolean;
  explanation: string;
  reference: string;
  /** Placar da rodada em que a pergunta foi respondida. */
  hostScore: number;
  guestScore: number;
  roundNumber: number;
  roundWinner: MpRole | null;
  /** Segundos até a próxima pergunta (null se a partida terminou). */
  nextInSeconds: number | null;
}

export interface MpState {
  code: string;
  role: MpRole;
  phase: "waiting" | "playing" | "finished";
  totalRounds: number;
  difficulty: GameDifficulty;
  currentRound: number;
  host: { id: string; name: string };
  guest: { id: string; name: string } | null;
  hostRounds: number;
  guestRounds: number;
  hostScore: number;
  guestScore: number;
  winner: MpRole | null;
  /** Pergunta em andamento (sem gabarito). */
  question: MpQuestion | null;
  secondsLeft: number | null;
  myOption: Letter | null;
  myAnswered: boolean;
  opponentAnswered: boolean;
  /** Resultado da última pergunta resolvida (mostrado até a próxima começar). */
  reveal: MpReveal | null;
}

export interface MpPlayers {
  host: { id: string; name: string; avatarUrl: string | null };
  guest: { id: string; name: string; avatarUrl: string | null } | null;
}
