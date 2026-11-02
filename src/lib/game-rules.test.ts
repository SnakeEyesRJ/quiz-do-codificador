import { describe, expect, it } from "vitest";
import { applyAnswer, applyRoundWin, getRoundsToWin } from "./game-rules";

describe("pontuação", () => {
  it("jogador acerta e Codificador erra: jogador recebe 2 pontos", () => {
    expect(applyAnswer(0, 0, true, false)).toMatchObject({ player: 2, codificador: 0 });
  });
  it("jogador erra e Codificador acerta: Codificador recebe 2 pontos", () => {
    expect(applyAnswer(0, 0, false, true)).toMatchObject({ player: 0, codificador: 2 });
  });
  it("ambos acertam: 1 ponto para cada", () => {
    expect(applyAnswer(3, 3, true, true)).toMatchObject({ player: 4, codificador: 4 });
  });
  it("rodada termina ao atingir 10 pontos", () => {
    const r = applyAnswer(9, 5, true, true);
    expect(r.roundWinner).toBe("player");
    expect(r.player).toBe(10);
    expect(r.codificadorCounted).toBe(false);
  });
  it("não termina com 9 pontos", () => {
    expect(applyAnswer(7, 0, true, true).roundWinner).toBeNull();
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
