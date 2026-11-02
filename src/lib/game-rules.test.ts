import { describe, expect, it } from "vitest";
import { applyAnswer, applyRoundWin, getRoundsToWin } from "./game-rules";

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
