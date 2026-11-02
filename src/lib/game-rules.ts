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
  /** Whether the Codificador's answer was counted (it is skipped if the player's answer already ended the round). */
  codificadorCounted: boolean;
}

/**
 * Scoring per question:
 * - player right → player +1; player wrong → codificador +1
 * - codificador right → codificador +1; codificador wrong → player +1
 * The round ends as soon as someone reaches ROUND_TARGET.
 */
export function applyAnswer(
  player: number,
  codificador: number,
  playerCorrect: boolean,
  codificadorCorrect: boolean,
): ScoreResult {
  if (playerCorrect) player++;
  else codificador++;
  let winner = checkWinner(player, codificador);
  if (winner) return { player, codificador, roundWinner: winner, codificadorCounted: false };
  if (codificadorCorrect) codificador++;
  else player++;
  winner = checkWinner(player, codificador);
  return { player, codificador, roundWinner: winner, codificadorCounted: true };
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

/** Chance the Codificador answers correctly, by difficulty. */
export const CODIFICADOR_ACCURACY: Record<string, number> = {
  facil: 0.85,
  medio: 0.7,
  dificil: 0.55,
};
