import { describe, expect, it } from "vitest";
import { GENESE_QUESTIONS } from "@/data/genese-questions";

describe("A Gênese - 50 Perguntas", () => {
  it("contém exatamente 50 perguntas estruturadas", () => {
    expect(GENESE_QUESTIONS).toHaveLength(50);
  });

  it("possui códigos sequenciais de 151 a 200 sem repetição", () => {
    const codes = GENESE_QUESTIONS.map((q) => q.code);
    expect(new Set(codes).size).toBe(50);
    expect(Math.min(...codes)).toBe(151);
    expect(Math.max(...codes)).toBe(200);
  });

  it("todas as perguntas pertencem ao livro genese", () => {
    GENESE_QUESTIONS.forEach((q) => {
      expect(q.book).toBe("genese");
    });
  });

  it("todas as perguntas têm enunciados únicos e opções válidas A-E", () => {
    const statements = new Set<string>();
    const validLetters = ["A", "B", "C", "D", "E"];

    GENESE_QUESTIONS.forEach((q) => {
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

  it("cobre os 18 capítulos e as 3 partes fundamentais da obra", () => {
    // 151 a 170: Gênese (Cap. I a XII)
    // 171 a 188: Milagres (Cap. XIII a XV)
    // 189 a 200: Predições (Cap. XVI a XVIII)
    const genesePart = GENESE_QUESTIONS.filter((q) => q.code >= 151 && q.code <= 170);
    const milagresPart = GENESE_QUESTIONS.filter((q) => q.code >= 171 && q.code <= 188);
    const predicoesPart = GENESE_QUESTIONS.filter((q) => q.code >= 189 && q.code <= 200);

    expect(genesePart.length).toBe(20);
    expect(milagresPart.length).toBe(18);
    expect(predicoesPart.length).toBe(12);
  });
});
