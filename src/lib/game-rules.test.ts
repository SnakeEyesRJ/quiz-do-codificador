import { describe, expect, it } from "vitest";
import {
  applyAnswer,
  applyRoundWin,
  cleanPlayerName,
  extractMatchDifficulty,
  getRoundsToWin,
  pickQuestionCandidate,
  pickUnusedQuestionCandidate,
  type QuestionCandidate,
} from "./game-rules";

describe("pontuação - regra oficial: Codificador não responde", () => {
  it("jogador acerta: jogador ganha 1 ponto e Codificador permanece com 0", () => {
    expect(applyAnswer(0, 0, true)).toMatchObject({ player: 1, codificador: 0 });
  });

  it("jogador erra: Codificador ganha 1 ponto e jogador permanece com 0", () => {
    expect(applyAnswer(0, 0, false)).toMatchObject({ player: 0, codificador: 1 });
  });

  it("acumula os pontos corretamente a cada acerto ou erro", () => {
    let score = applyAnswer(0, 0, true);
    expect(score).toMatchObject({ player: 1, codificador: 0 });

    score = applyAnswer(score.player, score.codificador, false);
    expect(score).toMatchObject({ player: 1, codificador: 1 });

    score = applyAnswer(score.player, score.codificador, true);
    expect(score).toMatchObject({ player: 2, codificador: 1 });
  });

  it("rodada termina quando jogador atinge 10 pontos", () => {
    const r = applyAnswer(9, 5, true);
    expect(r.roundWinner).toBe("player");
    expect(r.player).toBe(10);
    expect(r.codificador).toBe(5);
  });

  it("rodada termina quando Codificador atinge 10 pontos devido a erros do jogador", () => {
    const r = applyAnswer(5, 9, false);
    expect(r.roundWinner).toBe("codificador");
    expect(r.player).toBe(5);
    expect(r.codificador).toBe(10);
  });

  it("não termina rodada com 9 pontos", () => {
    expect(applyAnswer(8, 2, true).roundWinner).toBeNull();
  });
});

describe("seleção de rodadas (3, 5, 7 e 9)", () => {
  it("calcula corretamente vitórias necessárias para cada opção", () => {
    expect(getRoundsToWin(3)).toBe(2);
    expect(getRoundsToWin(5)).toBe(3);
    expect(getRoundsToWin(7)).toBe(4);
    expect(getRoundsToWin(9)).toBe(5);
  });

  it("melhor de 3 rodadas: vence quem ganha 2", () => {
    expect(applyRoundWin(1, 0, "player", 3).matchWinner).toBe("player");
    expect(applyRoundWin(1, 1, "codificador", 3).matchWinner).toBe("codificador");
    expect(applyRoundWin(0, 0, "player", 3).matchWinner).toBeNull();
  });

  it("melhor de 5 rodadas: vence quem ganha 3", () => {
    expect(applyRoundWin(2, 0, "player", 5).matchWinner).toBe("player");
    expect(applyRoundWin(2, 1, "player", 5).matchWinner).toBe("player");
    expect(applyRoundWin(1, 1, "player", 5).matchWinner).toBeNull();
  });

  it("melhor de 7 rodadas: vence quem ganha 4", () => {
    expect(applyRoundWin(3, 2, "player", 7).matchWinner).toBe("player");
    expect(applyRoundWin(2, 2, "player", 7).matchWinner).toBeNull();
  });

  it("melhor de 9 rodadas: vence quem ganha 5", () => {
    expect(applyRoundWin(4, 3, "player", 9).matchWinner).toBe("player");
    expect(applyRoundWin(3, 3, "player", 9).matchWinner).toBeNull();
  });
});

describe("seleção de perguntas por nível de dificuldade", () => {
  const pool: QuestionCandidate[] = [
    { id: "q_f1", difficulty: "facil" },
    { id: "q_f2", difficulty: "facil" },
    { id: "q_m1", difficulty: "medio" },
    { id: "q_m2", difficulty: "medio" },
    { id: "q_d1", difficulty: "dificil" },
    { id: "q_d2", difficulty: "dificil" },
  ];

  const expectOnlyDifficulty = (
    difficulty: Parameters<typeof pickQuestionCandidate>[1],
    expected: QuestionCandidate["difficulty"],
  ) => {
    for (const value of [0, 0.25, 0.5, 0.75, 0.99]) {
      expect(pickQuestionCandidate(pool, difficulty, () => value).difficulty).toBe(expected);
    }
  };

  it("Fácil: seleciona exclusivamente perguntas fáceis", () => {
    expectOnlyDifficulty("facil", "facil");
  });

  it("Normal: seleciona exclusivamente perguntas médias", () => {
    expectOnlyDifficulty("normal", "medio");
  });

  it("Difícil: seleciona exclusivamente perguntas difíceis", () => {
    expectOnlyDifficulty("dificil", "dificil");
  });

  it("Expert: seleciona exclusivamente perguntas difíceis (quarta classificação inexistente)", () => {
    expectOnlyDifficulty("expert", "dificil");
  });

  it("mantém a seleção aleatória entre as perguntas disponíveis do nível escolhido", () => {
    expect(pickQuestionCandidate(pool, "facil", () => 0)).toBe(pool[0]);
    expect(pickQuestionCandidate(pool, "facil", () => 0.99)).toBe(pool[1]);
    expect(pickQuestionCandidate(pool, "dificil", () => 0)).toBe(pool[4]);
    expect(pickQuestionCandidate(pool, "dificil", () => 0.99)).toBe(pool[5]);
  });

  it("nunca usa outra dificuldade como fallback", () => {
    const poolSemFacil: QuestionCandidate[] = [
      { id: "q_m1", difficulty: "medio" },
      { id: "q_d1", difficulty: "dificil" },
    ];
    const poolSemMedio: QuestionCandidate[] = [
      { id: "q_f1", difficulty: "facil" },
      { id: "q_d1", difficulty: "dificil" },
    ];
    const poolSemDificil: QuestionCandidate[] = [
      { id: "q_f1", difficulty: "facil" },
      { id: "q_m1", difficulty: "medio" },
    ];

    expect(() => pickQuestionCandidate(poolSemFacil, "facil")).toThrow();
    expect(() => pickQuestionCandidate(poolSemMedio, "normal")).toThrow();
    expect(() => pickQuestionCandidate(poolSemDificil, "dificil")).toThrow();
    expect(() => pickQuestionCandidate(poolSemDificil, "expert")).toThrow();
  });

  it("retorna erro controlado quando o pool está vazio", () => {
    expect(() => pickQuestionCandidate([], "normal")).toThrow(
      'Nenhuma pergunta da dificuldade "medio" disponível.',
    );
  });

  it.each(["facil", "normal", "dificil", "expert"] as const)(
    "%s: ao esgotar o nível, repete somente perguntas da dificuldade escolhida",
    (difficulty) => {
      const expected = difficulty === "facil" ? "facil" : difficulty === "normal" ? "medio" : "dificil";
      const used = new Set(pool.filter((q) => q.difficulty === expected).map((q) => q.id));
      for (const random of [0, 0.4, 0.99]) {
        expect(pickUnusedQuestionCandidate(pool, used, difficulty, () => random).difficulty).toBe(expected);
      }
    },
  );

  it("extrai nível de dificuldade da partida e limpa nome do jogador", () => {
    expect(extractMatchDifficulty({ difficulty: "expert" })).toBe("expert");
    expect(extractMatchDifficulty({ player_name: "Allan [3R] [D:dificil]" })).toBe("dificil");
    expect(extractMatchDifficulty({ player_name: "Kardec" })).toBe("normal");

    expect(cleanPlayerName("Allan [5R] [D:expert]")).toBe("Allan");
    expect(cleanPlayerName("Player 1")).toBe("Player 1");
  });
});
