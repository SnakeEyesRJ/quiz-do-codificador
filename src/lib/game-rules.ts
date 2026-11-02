export const ROUND_TARGET = 10;
export const ALLOWED_ROUNDS = [3, 5, 7, 9] as const;
export type TotalRounds = (typeof ALLOWED_ROUNDS)[number];
export const ROUNDS_TO_WIN = 2;

export function getRoundsToWin(totalRounds: number = 3): number {
  return Math.floor(totalRounds / 2) + 1;
}

export type Side = "player" | "codificador";

export const DIFFICULTY_LEVELS = ["facil", "normal", "dificil", "expert"] as const;
export type GameDifficulty = (typeof DIFFICULTY_LEVELS)[number];

export const DIFFICULTY_LABELS: Record<GameDifficulty, string> = {
  facil: "Fácil",
  normal: "Normal",
  dificil: "Difícil",
  expert: "Expert",
};

export const DIFFICULTY_DESCRIPTIONS: Record<GameDifficulty, string> = {
  facil: "Perguntas introdutórias e fundamentais para quem está começando o estudo.",
  normal: "Equilíbrio entre conceitos essenciais e questões intermediárias da doutrina.",
  dificil: "Perguntas mais aprofundadas exigindo conhecimento sólido das obras básicas.",
  expert: "Desafio supremo com as questões mais complexas e detalhadas da Codificação.",
};

export const QUESTION_DIFFICULTY_LABELS: Record<string, string> = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil",
};

export interface QuestionCandidate {
  id: string;
  difficulty: "facil" | "medio" | "dificil" | string;
}

/**
 * Conduz a escolha da pergunta de acordo com o nível de dificuldade selecionado:
 * - Fácil: prioriza perguntas 'facil' (90%) com suporte de 'medio' (10%).
 * - Normal: equilíbrio de perguntas 'medio' (70%) e 'facil' (30%).
 * - Difícil: prioriza perguntas 'dificil' (70%) e 'medio' (30%).
 * - Expert: 100% de perguntas 'dificil' enquanto houver; depois 'medio'.
 */
export function pickQuestionCandidate<T extends QuestionCandidate>(
  candidates: T[],
  difficulty: GameDifficulty,
  random: () => number = Math.random,
): T {
  if (candidates.length === 0) {
    throw new Error("Nenhuma pergunta disponível.");
  }
  if (candidates.length === 1) {
    return candidates[0]!;
  }

  const faciles = candidates.filter((q) => q.difficulty === "facil");
  const medios = candidates.filter((q) => q.difficulty === "medio");
  const dificeis = candidates.filter((q) => q.difficulty === "dificil");

  const pickFrom = (pool: T[]): T => pool[Math.floor(random() * pool.length)]!;

  switch (difficulty) {
    case "facil": {
      if (faciles.length > 0 && medios.length > 0) {
        return random() < 0.9 ? pickFrom(faciles) : pickFrom(medios);
      }
      if (faciles.length > 0) return pickFrom(faciles);
      if (medios.length > 0) return pickFrom(medios);
      return pickFrom(candidates);
    }
    case "normal": {
      if (medios.length > 0 && faciles.length > 0) {
        return random() < 0.7 ? pickFrom(medios) : pickFrom(faciles);
      }
      if (medios.length > 0) return pickFrom(medios);
      if (faciles.length > 0) return pickFrom(faciles);
      return pickFrom(candidates);
    }
    case "dificil": {
      if (dificeis.length > 0 && medios.length > 0) {
        return random() < 0.7 ? pickFrom(dificeis) : pickFrom(medios);
      }
      if (dificeis.length > 0) return pickFrom(dificeis);
      if (medios.length > 0) return pickFrom(medios);
      return pickFrom(candidates);
    }
    case "expert": {
      if (dificeis.length > 0) return pickFrom(dificeis);
      if (medios.length > 0) return pickFrom(medios);
      return pickFrom(candidates);
    }
  }
}

export function cleanPlayerName(rawName: string): string {
  return rawName
    .replace(/\s*\[[3579]R\]/g, "")
    .replace(/\s*\[D:[a-z]+\]/gi, "")
    .trim();
}

export function extractMatchDifficulty(match: any): GameDifficulty {
  if (match?.difficulty && DIFFICULTY_LEVELS.includes(match.difficulty as GameDifficulty)) {
    return match.difficulty as GameDifficulty;
  }
  const tag = match?.player_name?.match(/\[D:([a-z]+)\]/i);
  if (tag && DIFFICULTY_LEVELS.includes(tag[1].toLowerCase() as GameDifficulty)) {
    return tag[1].toLowerCase() as GameDifficulty;
  }
  return "normal";
}

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
