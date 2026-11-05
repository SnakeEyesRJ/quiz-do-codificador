import { describe, expect, it } from "vitest";
import { OS_MENSAGEIROS_QUESTIONS } from "@/data/os-mensageiros-questions";

describe("OS_MENSAGEIROS_QUESTIONS", () => {
  it("contains exactly 100 questions from Os Mensageiros", () => {
    expect(OS_MENSAGEIROS_QUESTIONS).toHaveLength(100);
  });

  it("assigns sequential codes from 351 to 450", () => {
    const codes = OS_MENSAGEIROS_QUESTIONS.map((q) => q.code);
    const expected = Array.from({ length: 100 }, (_, i) => 351 + i);
    expect(codes).toEqual(expected);
  });

  it("uses book = 'os_mensageiros' and valid difficulty/options for every question", () => {
    for (const q of OS_MENSAGEIROS_QUESTIONS) {
      expect(q.book).toBe("os_mensageiros");
      expect(["facil", "medio", "dificil"]).toContain(q.difficulty);
      expect(["A", "B", "C", "D", "E"]).toContain(q.correct_option);
      expect(q.statement.length).toBeGreaterThan(20);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.reference).toContain("Os Mensageiros");
      expect(q.active).toBe(true);

      for (const key of ["A", "B", "C", "D", "E"] as const) {
        expect(q.options[key].trim().length).toBeGreaterThan(5);
      }
    }
  });

  it("has unique statements across all 100 questions", () => {
    const statements = new Set(OS_MENSAGEIROS_QUESTIONS.map((q) => q.statement));
    expect(statements.size).toBe(100);
  });

  it("distributes correct_option evenly across A, B, C, D, and E (10 each)", () => {
    const counts: Record<"A" | "B" | "C" | "D" | "E", number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const q of OS_MENSAGEIROS_QUESTIONS) {
      counts[q.correct_option]++;
    }
    expect(counts).toEqual({ A: 20, B: 20, C: 20, D: 20, E: 20 });
  });
});
