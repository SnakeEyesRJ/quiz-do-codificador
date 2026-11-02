import { describe, expect, it } from "vitest";
import { LIVRO_MEDIUNS_QUESTIONS } from "@/data/livro-mediuns-questions";

describe("O Livro dos Médiuns - 50 Perguntas", () => {
  it("contém exatamente 50 perguntas estruturadas", () => {
    expect(LIVRO_MEDIUNS_QUESTIONS).toHaveLength(50);
  });

  it("possui códigos sequenciais de 201 a 250 sem repetição", () => {
    const codes = LIVRO_MEDIUNS_QUESTIONS.map((q) => q.code);
    expect(new Set(codes).size).toBe(50);
    expect(Math.min(...codes)).toBe(201);
    expect(Math.max(...codes)).toBe(250);
  });

  it("todas as perguntas pertencem ao livro livro_mediuns", () => {
    LIVRO_MEDIUNS_QUESTIONS.forEach((q) => {
      expect(q.book).toBe("livro_mediuns");
    });
  });

  it("todas as perguntas têm enunciados únicos e opções válidas A-E", () => {
    const statements = new Set<string>();
    const validLetters = ["A", "B", "C", "D", "E"];

    LIVRO_MEDIUNS_QUESTIONS.forEach((q) => {
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

  it("distribui as alternativas corretas de forma equilibrada entre A, B, C, D e E", () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const q of LIVRO_MEDIUNS_QUESTIONS) {
      counts[q.correct_option]++;
    }
    expect(counts.A).toBeGreaterThanOrEqual(8);
    expect(counts.B).toBeGreaterThanOrEqual(8);
    expect(counts.C).toBeGreaterThanOrEqual(8);
    expect(counts.D).toBeGreaterThanOrEqual(8);
    expect(counts.E).toBeGreaterThanOrEqual(8);
  });

  it("cobre a 1ª Parte (Noções Preliminares) e a 2ª Parte (Manifestações Espíritas)", () => {
    const primeiraParte = LIVRO_MEDIUNS_QUESTIONS.filter((q) => q.code >= 201 && q.code <= 208);
    const segundaParte = LIVRO_MEDIUNS_QUESTIONS.filter((q) => q.code >= 209 && q.code <= 250);

    expect(primeiraParte.length).toBe(8);
    expect(segundaParte.length).toBe(42);
  });
});
