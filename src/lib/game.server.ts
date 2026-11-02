import { getRequest } from "@tanstack/react-start/server";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

/** Returns the signed-in user id when a valid bearer token is present, otherwise null (guest). */
export async function getOptionalUserId(): Promise<string | null> {
  const auth = getRequest()?.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const token = auth.slice(7);
  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data.user) return null;
  return data.user.id;
}

export async function loadOwnedMatch(matchId: string) {
  const userId = await getOptionalUserId();
  const { data: match, error } = await supabaseAdmin
    .from("matches")
    .select("*")
    .eq("id", matchId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!match) throw new Error("Partida não encontrada.");
  if (match.user_id && match.user_id !== userId)
    throw new Error("Partida não pertence a este jogador.");
  return match;
}

export async function getCurrentRound(matchId: string, number: number) {
  const { data, error } = await supabaseAdmin
    .from("rounds")
    .select("*")
    .eq("match_id", matchId)
    .eq("number", number)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function ensureQuestionsSeeded() {
  try {
    const { data: ceuQuestions, error: checkErr } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("book", "ceu_inferno")
      .limit(1);

    if (!checkErr && (!ceuQuestions || ceuQuestions.length === 0)) {
      const { CEU_INFERNO_QUESTIONS } = await import("@/data/ceu-inferno-questions");
      await supabaseAdmin.from("questions").upsert(
        CEU_INFERNO_QUESTIONS.map((q) => ({
          code: q.code,
          book: q.book,
          statement: q.statement,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          option_e: q.option_e,
          correct_option: q.correct_option,
          explanation: q.explanation,
          reference: q.reference,
          difficulty: q.difficulty,
          active: q.active,
        })),
        { onConflict: "statement" },
      );
    }

    const { data: geneseQuestions, error: geneseCheckErr } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("book", "genese")
      .limit(1);

    if (!geneseCheckErr && (!geneseQuestions || geneseQuestions.length === 0)) {
      const { GENESE_QUESTIONS } = await import("@/data/genese-questions");
      await supabaseAdmin.from("questions").upsert(
        GENESE_QUESTIONS.map((q) => ({
          code: q.code,
          book: q.book,
          statement: q.statement,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          option_e: q.option_e,
          correct_option: q.correct_option,
          explanation: q.explanation,
          reference: q.reference,
          difficulty: q.difficulty,
          active: q.active,
        })),
        { onConflict: "statement" },
      );
    }

    const { data: mediunsQuestions, error: mediunsCheckErr } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("book", "livro_mediuns")
      .limit(1);

    if (!mediunsCheckErr && (!mediunsQuestions || mediunsQuestions.length === 0)) {
      const { LIVRO_MEDIUNS_QUESTIONS } = await import("@/data/livro-mediuns-questions");
      await supabaseAdmin.from("questions").upsert(
        LIVRO_MEDIUNS_QUESTIONS.map((q) => ({
          code: q.code,
          book: q.book,
          statement: q.statement,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          option_e: q.option_e,
          correct_option: q.correct_option,
          explanation: q.explanation,
          reference: q.reference,
          difficulty: q.difficulty,
          active: q.active,
        })),
        { onConflict: "statement" },
      );
    }

    const { data: obrasQuestions, error: obrasCheckErr } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("book", "obras_postumas")
      .limit(1);

    if (!obrasCheckErr && (!obrasQuestions || obrasQuestions.length === 0)) {
      const { OBRAS_POSTUMAS_QUESTIONS } = await import("@/data/obras-postumas-questions");
      await supabaseAdmin.from("questions").upsert(
        OBRAS_POSTUMAS_QUESTIONS.map((q) => ({
          code: q.code,
          book: q.book,
          statement: q.statement,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          option_e: q.option_e,
          correct_option: q.correct_option,
          explanation: q.explanation,
          reference: q.reference,
          difficulty: q.difficulty,
          active: q.active,
        })),
        { onConflict: "statement" },
      );
    }
  } catch (e) {
    console.warn("[Seed] Aviso ao verificar/sincronizar perguntas complementares:", e);
  }
}

export { supabaseAdmin };
