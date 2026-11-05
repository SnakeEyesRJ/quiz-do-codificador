import { describe, expect, it } from "vitest";
import { OBRAS_POSTUMAS_QUESTIONS } from "@/data/obras-postumas-questions";

describe("Obras Póstumas - 50 Perguntas", () => {
  it("contém exatamente 50 perguntas estruturadas", () => {
    expect(OBRAS_POSTUMAS_QUESTIONS).toHaveLength(100);
  });

  it("possui códigos sequenciais de 251 a 350 sem repetição", () => {
    const codes = OBRAS_POSTUMAS_QUESTIONS.map((q) => q.code);
    expect(new Set(codes).size).toBe(100);
    expect(Math.min(...codes)).toBe(251);
    expect(Math.max(...codes)).toBe(350);
  });

  it("todas as perguntas pertencem ao livro obras_postumas", () => {
    OBRAS_POSTUMAS_QUESTIONS.forEach((q) => {
      expect(q.book).toBe("obras_postumas");
    });
  });

  it("todas as perguntas têm enunciados únicos e opções válidas A-E", () => {
    const statements = new Set<string>();
    const validLetters = ["A", "B", "C", "D", "E"];

    OBRAS_POSTUMAS_QUESTIONS.forEach((q) => {
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
      expect(q.reference.trim().length).toBeGreaterThan(3);
      expect(["facil", "medio", "dificil"]).toContain(q.difficulty);
      expect(q.active).toBe(true);
    });
  });

  it("distribui as alternativas corretas de forma equilibrada entre A, B, C, D e E (exatamente 10 de cada)", () => {
    const counts: Record<"A" | "B" | "C" | "D" | "E", number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const q of OBRAS_POSTUMAS_QUESTIONS) {
      counts[q.correct_option]++;
    }
    expect(counts.A).toBe(20);
    expect(counts.B).toBe(20);
    expect(counts.C).toBe(20);
    expect(counts.D).toBe(20);
    expect(counts.E).toBe(20);
  });

  it("cobre a 1ª Parte (Filosofia, Doutrina e Teoria) e a 2ª Parte (História, Previsões e Constituição)", () => {
    const primeiraParte = OBRAS_POSTUMAS_QUESTIONS.filter((q) => q.code >= 251 && q.code <= 275);
    const segundaParte = OBRAS_POSTUMAS_QUESTIONS.filter((q) => q.code >= 276 && q.code <= 300);

    expect(primeiraParte.length).toBe(25);
    expect(segundaParte.length).toBe(25);
  });
});
