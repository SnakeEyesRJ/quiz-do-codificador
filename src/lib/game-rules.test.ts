import { describe, expect, it } from "vitest";
import { applyAnswer, applyRoundWin } from "./game-rules";

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

describe("melhor de três", () => {
  it("vence a partida quem ganha 2 rodadas", () => {
    expect(applyRoundWin(1, 0, "player").matchWinner).toBe("player");
    expect(applyRoundWin(1, 1, "codificador").matchWinner).toBe("codificador");
  });
  it("uma rodada vencida não encerra a partida", () => {
    expect(applyRoundWin(0, 0, "player").matchWinner).toBeNull();
  });
});
