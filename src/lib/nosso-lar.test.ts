import { describe, expect, it } from "vitest";
import { NOSSO_LAR_QUESTIONS } from "@/data/nosso-lar-questions";

describe("NOSSO_LAR_QUESTIONS", () => {
  it("contains exactly 50 questions from Nosso Lar", () => {
    expect(NOSSO_LAR_QUESTIONS).toHaveLength(50);
  });

  it("assigns sequential codes from 301 to 350", () => {
    const codes = NOSSO_LAR_QUESTIONS.map((q) => q.code);
    const expected = Array.from({ length: 50 }, (_, i) => 301 + i);
    expect(codes).toEqual(expected);
  });

  it("uses book = 'nosso_lar' and valid difficulty/options for every question", () => {
    for (const q of NOSSO_LAR_QUESTIONS) {
      expect(q.book).toBe("nosso_lar");
      expect(["facil", "medio", "dificil"]).toContain(q.difficulty);
      expect(["A", "B", "C", "D", "E"]).toContain(q.correct_option);
      expect(q.statement.length).toBeGreaterThan(20);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.reference).toContain("Nosso Lar");
      expect(q.active).toBe(true);

      for (const key of ["A", "B", "C", "D", "E"] as const) {
        expect(q.options[key].trim().length).toBeGreaterThan(5);
      }
    }
  });

  it("has unique statements across all 50 questions", () => {
    const statements = new Set(NOSSO_LAR_QUESTIONS.map((q) => q.statement));
    expect(statements.size).toBe(50);
  });

  it("distributes correct_option evenly across A, B, C, D, and E (10 each)", () => {
    const counts: Record<"A" | "B" | "C" | "D" | "E", number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const q of NOSSO_LAR_QUESTIONS) {
      counts[q.correct_option]++;
    }
    expect(counts).toEqual({ A: 10, B: 10, C: 10, D: 10, E: 10 });
  });
});
