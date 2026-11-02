import { describe, expect, it } from "vitest";
import { CEU_INFERNO_QUESTIONS } from "@/data/ceu-inferno-questions";

describe("O Céu e o Inferno - 50 Perguntas", () => {
  it("contém exatamente 50 perguntas estruturadas", () => {
    expect(CEU_INFERNO_QUESTIONS).toHaveLength(50);
  });

  it("possui códigos sequenciais de 101 a 150 sem repetição", () => {
    const codes = CEU_INFERNO_QUESTIONS.map((q) => q.code);
    expect(new Set(codes).size).toBe(50);
    expect(Math.min(...codes)).toBe(101);
    expect(Math.max(...codes)).toBe(150);
  });

  it("todas as perguntas pertencem ao livro ceu_inferno", () => {
    CEU_INFERNO_QUESTIONS.forEach((q) => {
      expect(q.book).toBe("ceu_inferno");
    });
  });

  it("todas as perguntas têm enunciados únicos e opções válidas A-E", () => {
    const statements = new Set<string>();
    const validLetters = ["A", "B", "C", "D", "E"];

    CEU_INFERNO_QUESTIONS.forEach((q) => {
      expect(q.statement.trim().length).toBeGreaterThan(15);
      expect(statements.has(q.statement)).toBe(false);
      statements.add(q.statement);

      expect(q.option_a.trim().length).toBeGreaterThan(0);
      expect(q.option_b.trim().length).toBeGreaterThan(0);
      expect(q.option_c.trim().length).toBeGreaterThan(0);
      expect(q.option_d.trim().length).toBeGreaterThan(0);
      expect(q.option_e.trim().length).toBeGreaterThan(0);

      expect(validLetters).toContain(q.correct_option);
      expect(q.explanation.trim().length).toBeGreaterThan(10);
      expect(q.reference.trim().length).toBeGreaterThan(5);
      expect(["facil", "medio", "dificil"]).toContain(q.difficulty);
      expect(q.active).toBe(true);
    });
  });

  it("distribuição balanceada entre a 1ª Parte (Doutrina) e 2ª Parte (Exemplos)", () => {
    const parte1 = CEU_INFERNO_QUESTIONS.filter((q) => q.reference.includes("1ª Parte"));
    const parte2 = CEU_INFERNO_QUESTIONS.filter((q) => q.reference.includes("2ª Parte"));
    expect(parte1.length).toBe(25);
    expect(parte2.length).toBe(25);
  });
});
