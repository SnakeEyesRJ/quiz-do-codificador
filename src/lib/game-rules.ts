export const ROUND_TARGET = 10;
export const ALLOWED_ROUNDS = [3, 5, 7, 9] as const;
export type TotalRounds = (typeof ALLOWED_ROUNDS)[number];
export const ROUNDS_TO_WIN = 2;

export function getRoundsToWin(totalRounds: number = 3): number {
  return Math.floor(totalRounds / 2) + 1;
}

export type Side = "player" | "codificador";

export interface ScoreResult {
  player: number;
  codificador: number;
  roundWinner: Side | null;
  /** Kept for interface compatibility */
  codificadorCounted: boolean;
}

/**
 * Regra de pontuação por pergunta:
 * - O Codificador NÃO responde às perguntas.
 * - Se o jogador acerta → Jogador ganha 1 ponto.
 * - Se o jogador erra → Codificador ganha 1 ponto.
 * A rodada termina assim que alguém alcança ROUND_TARGET (10 pontos).
 */
export function applyAnswer(
  player: number,
  codificador: number,
  playerCorrect: boolean,
  _codificadorCorrect?: boolean,
): ScoreResult {
  if (playerCorrect) {
    player++;
  } else {
    codificador++;
  }
  const winner = checkWinner(player, codificador);
  return { player, codificador, roundWinner: winner, codificadorCounted: false };
}

function checkWinner(p: number, c: number): Side | null {
  if (p >= ROUND_TARGET) return "player";
  if (c >= ROUND_TARGET) return "codificador";
  return null;
}

export function applyRoundWin(
  playerRounds: number,
  codRounds: number,
  winner: Side,
  totalRounds: number = 3,
) {
  if (winner === "player") playerRounds++;
  else codRounds++;
  const target = getRoundsToWin(totalRounds);
  const matchWinner: Side | null =
    playerRounds >= target ? "player" : codRounds >= target ? "codificador" : null;
  return { playerRounds, codRounds, matchWinner };
}

/** Obsoleta: mantida apenas para evitar quebras de importação caso referenciada */
export const CODIFICADOR_ACCURACY: Record<string, number> = {
  facil: 0.85,
  medio: 0.7,
  dificil: 0.55,
};
