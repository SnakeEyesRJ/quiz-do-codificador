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

export type BookId =
  | "livro_espiritos"
  | "livro_mediuns"
  | "evangelho"
  | "ceu_inferno"
  | "genese"
  | "obras_postumas"
  | "o_que_e_espiritismo"
  | "nosso_lar"
  | "os_mensageiros";
export type BookSelection = "todos" | BookId;

export const BOOK_OPTIONS: { value: BookSelection; label: string; disabled?: boolean }[] = [
  { value: "todos", label: "Todos os livros" },
  { value: "genese", label: "01 - A Gênese" },
  { value: "ceu_inferno", label: "02 - O Céu e o Inferno" },
  {
    value: "evangelho",
    label: "03 - O Evangelho Segundo o Espiritismo",
  },
  {
    value: "livro_espiritos",
    label: "04 - O Livro dos Espíritos",
  },
  { value: "livro_mediuns", label: "05 - O Livro dos Médiuns" },
  { value: "os_mensageiros", label: "06 - Os Mensageiros" },
  { value: "nosso_lar", label: "07 - Nosso Lar" },
  { value: "obras_postumas", label: "08 - Obras Póstumas" },
  { value: "o_que_e_espiritismo", label: "09 - O Que é o Espiritismo" },
];

export function extractMatchBook(match: any): BookSelection {
  const tag = match?.player_name?.match(/\[B:(todos|livro_espiritos|livro_mediuns|evangelho|ceu_inferno|genese|obras_postumas|o_que_e_espiritismo|nosso_lar|os_mensageiros)\]/i);
  return (tag?.[1]?.toLowerCase() as BookSelection) || "todos";
}

export function resolveQuestionBook(question: { book?: string | null; code?: number }): BookId | null {
  const validBooks: readonly string[] = [
    "livro_espiritos",
    "livro_mediuns",
    "evangelho",
    "ceu_inferno",
    "genese",
    "obras_postumas",
    "o_que_e_espiritismo",
    "nosso_lar",
    "os_mensageiros",
  ];
  // The explicit database classification is authoritative. Numeric ranges are
  // retained only as a fallback for legacy rows without a recognized book.
  if (
    question.code !== undefined &&
    question.code >= 801 &&
    (!question.book || question.book === "o_que_e_espiritismo" || question.book === "obras_postumas")
  ) {
    return "o_que_e_espiritismo";
  }
  if (question.book && validBooks.includes(question.book)) {
    return question.book as BookId;
  }
  if (question.code !== undefined) {
    if (question.code >= 801 && question.code <= 900) return "o_que_e_espiritismo";
    if ((question.code >= 351 && question.code <= 400) || (question.code >= 751 && question.code <= 800)) return "os_mensageiros";
    if ((question.code >= 301 && question.code <= 350) || (question.code >= 701 && question.code <= 750)) return "nosso_lar";
  }
  return null;
}


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
  expert: "Expert",
};

/**
 * Dificuldades armazenadas em cada pergunta (coluna `questions.difficulty`).
 * São quatro níveis e `expert` nunca é convertido em `dificil`.
 */
export const QUESTION_DIFFICULTIES = ["facil", "medio", "dificil", "expert"] as const;
export type QuestionDifficulty = (typeof QUESTION_DIFFICULTIES)[number];

export function isQuestionDifficulty(value: unknown): value is QuestionDifficulty {
  return (QUESTION_DIFFICULTIES as readonly unknown[]).includes(value);
}

/** Prefixo comum das mensagens de erro relacionadas ao estoque de perguntas. */
export const QUESTION_POOL_MESSAGE_PREFIX = "Perguntas insuficientes";

/** Erro controlado: o estoque de perguntas do livro/nível não permite continuar sem repetir. */
export class QuestionPoolError extends Error {
  readonly reason: "empty" | "insufficient" | "exhausted";

  constructor(reason: "empty" | "insufficient" | "exhausted", message: string) {
    super(message);
    this.name = "QuestionPoolError";
    this.reason = reason;
  }
}

/** As mensagens chegam ao navegador sem a classe do erro; o prefixo permite reconhecê-las. */
export function isQuestionPoolMessage(message: string | null | undefined): boolean {
  return !!message && message.startsWith(QUESTION_POOL_MESSAGE_PREFIX);
}

/** Nome da obra sem o número de ordem usado no seletor. */
export function bookDisplayName(book: BookSelection): string {
  const label = BOOK_OPTIONS.find((option) => option.value === book)?.label ?? book;
  return label.replace(/^\d+\s*-\s*/, "");
}

function poolScopeLabel(book: BookSelection, difficulty: GameDifficulty): string {
  const scope = book === "todos" ? "todos os livros" : `"${bookDisplayName(book)}"`;
  return `${scope} no nível ${DIFFICULTY_LABELS[difficulty]}`;
}

/**
 * Número mínimo de perguntas distintas para iniciar uma partida: uma por rodada
 * escolhida (3, 5, 7 ou 9). Partidas menores exigem menos perguntas. Se o estoque
 * acabar durante a partida, o jogo informa o jogador em vez de repetir perguntas.
 */
export function minQuestionsForMatch(totalRounds: number): number {
  return Math.max(1, totalRounds);
}

/** Perguntas elegíveis para o livro e para a dificuldade fixa da partida. */
export function filterQuestionPool<
  T extends QuestionCandidate & { book?: string | null; code?: number },
>(questions: readonly T[], book: BookSelection, difficulty: GameDifficulty): T[] {
  const required = DIFFICULTY_QUESTION_MAP[difficulty];
  return questions.filter(
    (q) => q.difficulty === required && (book === "todos" || resolveQuestionBook(q) === book),
  );
}

/** Valida se o estoque real comporta o início de uma partida; nunca troca de nível. */
export function assertPoolCanStartMatch(
  poolSize: number,
  totalRounds: number,
  book: BookSelection,
  difficulty: GameDifficulty,
): void {
  const needed = minQuestionsForMatch(totalRounds);
  if (poolSize < needed) {
    throw new QuestionPoolError(
      poolSize === 0 ? "empty" : "insufficient",
      `${QUESTION_POOL_MESSAGE_PREFIX}: ${poolScopeLabel(book, difficulty)} possui ${poolSize} ${
        poolSize === 1 ? "pergunta" : "perguntas"
      }, e uma partida de ${totalRounds} rodadas precisa de pelo menos ${needed}. Escolha outro livro, outro nível ou uma partida menor.`,
    );
  }
}

export interface QuestionCandidate {
  id: string;
  /** Linhas vindas do banco trazem `string`; os valores válidos são `QuestionDifficulty`. */
  difficulty: QuestionDifficulty | string;
}

/**
 * Dificuldade da pergunta exigida por cada nível de jogo.
 * O nível Expert possui classificação própria no banco de perguntas.
 */
export const DIFFICULTY_QUESTION_MAP: Record<GameDifficulty, QuestionDifficulty> = {
  facil: "facil",
  normal: "medio",
  dificil: "dificil",
  expert: "expert",
};

/**
 * Escolhe aleatoriamente uma pergunta exclusivamente da dificuldade correspondente
 * ao nível selecionado. Nunca utiliza perguntas de outra dificuldade como fallback:
 * se não houver nenhuma disponível no nível exigido, lança um erro controlado.
 */
export function pickQuestionCandidate<T extends QuestionCandidate>(
  candidates: T[],
  difficulty: GameDifficulty,
  random: () => number = Math.random,
): T {
  const requiredDifficulty = DIFFICULTY_QUESTION_MAP[difficulty];
  const pool = candidates.filter((q) => q.difficulty === requiredDifficulty);

  if (pool.length === 0) {
    throw new Error(`Nenhuma pergunta da dificuldade "${requiredDifficulty}" disponível.`);
  }

  const candidate = pool[Math.floor(random() * pool.length)];
  if (!candidate) throw new Error("Não foi possível selecionar uma pergunta.");
  return candidate;
}

/**
 * Escolhe uma pergunta ainda não usada na partida (comparando pelo ID único), sempre da
 * dificuldade fixa da partida. Quando todas as elegíveis já foram usadas, lança
 * `QuestionPoolError`: nunca repete pergunta e nunca troca de nível.
 */
export function pickUnusedQuestionCandidate<T extends QuestionCandidate>(
  candidates: T[],
  usedIds: ReadonlySet<string>,
  difficulty: GameDifficulty,
  random: () => number = Math.random,
  book: BookSelection = "todos",
): T {
  const eligible = candidates.filter((q) => q.difficulty === DIFFICULTY_QUESTION_MAP[difficulty]);
  const fresh = eligible.filter((q) => !usedIds.has(q.id));
  if (eligible.length > 0 && fresh.length === 0) {
    throw new QuestionPoolError(
      "exhausted",
      `${QUESTION_POOL_MESSAGE_PREFIX}: as ${eligible.length} ${
        eligible.length === 1 ? "pergunta disponível" : "perguntas disponíveis"
      } de ${poolScopeLabel(book, difficulty)} já foram usadas nesta partida. Para não repetir perguntas, a partida não pode continuar neste livro e nível. Inicie outra partida com outro livro ou nível.`,
    );
  }
  return pickQuestionCandidate(fresh, difficulty, random);
}

export function cleanPlayerName(rawName: string): string {
  return rawName
    .replace(/\s*\[MP:[A-Z0-9]+\]/g, "")
    .replace(/\s*\[G:[^\]]*\]/g, "")
    .replace(/\s*\[GN:[^\]]*\]/g, "")
    .replace(/\s*\[[3579]R\]/g, "")
    .replace(/\s*\[D:[a-z]+\]/gi, "")
    .replace(/\s*\[B:[a-z_]+\]/gi, "")
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
