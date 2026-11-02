import { describe, expect, it } from "vitest";
import {
  applyAnswer,
  applyRoundWin,
  cleanPlayerName,
  extractMatchDifficulty,
  getRoundsToWin,
  pickQuestionCandidate,
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

describe("condução das perguntas por nível de dificuldade", () => {
  const pool: QuestionCandidate[] = [
    { id: "q_f1", difficulty: "facil" },
    { id: "q_f2", difficulty: "facil" },
    { id: "q_m1", difficulty: "medio" },
    { id: "q_m2", difficulty: "medio" },
    { id: "q_d1", difficulty: "dificil" },
    { id: "q_d2", difficulty: "dificil" },
  ];

  it("nível Fácil: seleciona pergunta fácil prioritariamente", () => {
    // com random < 0.9, deve retornar fácil
    const picked = pickQuestionCandidate(pool, "facil", () => 0.5);
    expect(picked.difficulty).toBe("facil");
  });

  it("nível Normal: equilibra médio e fácil", () => {
    const pickedMedio = pickQuestionCandidate(pool, "normal", () => 0.2);
    expect(pickedMedio.difficulty).toBe("medio");

    const pickedFacil = pickQuestionCandidate(pool, "normal", () => 0.85);
    expect(pickedFacil.difficulty).toBe("facil");
  });

  it("nível Difícil: prioriza perguntas difíceis", () => {
    const picked = pickQuestionCandidate(pool, "dificil", () => 0.3);
    expect(picked.difficulty).toBe("dificil");

    const pickedMedio = pickQuestionCandidate(pool, "dificil", () => 0.85);
    expect(pickedMedio.difficulty).toBe("medio");
  });

  it("nível Expert: seleciona exclusivamente difíceis enquanto houver", () => {
    const picked = pickQuestionCandidate(pool, "expert", () => 0.1);
    expect(picked.difficulty).toBe("dificil");
  });

  it("nível Expert: faz fallback para médio se todas as difíceis já foram usadas", () => {
    const poolSemDificil: QuestionCandidate[] = [
      { id: "q_f1", difficulty: "facil" },
      { id: "q_m1", difficulty: "medio" },
    ];
    const picked = pickQuestionCandidate(poolSemDificil, "expert", () => 0.1);
    expect(picked.difficulty).toBe("medio");
  });

  it("faz fallback gracioso caso só reste uma categoria no pool", () => {
    const poolSoFacil: QuestionCandidate[] = [{ id: "q_f1", difficulty: "facil" }];
    expect(pickQuestionCandidate(poolSoFacil, "expert").difficulty).toBe("facil");
    expect(pickQuestionCandidate(poolSoFacil, "dificil").difficulty).toBe("facil");
  });

  it("extrai nível de dificuldade da partida e limpa nome do jogador", () => {
    expect(extractMatchDifficulty({ difficulty: "expert" })).toBe("expert");
    expect(extractMatchDifficulty({ player_name: "Allan [3R] [D:dificil]" })).toBe("dificil");
    expect(extractMatchDifficulty({ player_name: "Kardec" })).toBe("normal");

    expect(cleanPlayerName("Allan [5R] [D:expert]")).toBe("Allan");
    expect(cleanPlayerName("Player 1")).toBe("Player 1");
  });
});
