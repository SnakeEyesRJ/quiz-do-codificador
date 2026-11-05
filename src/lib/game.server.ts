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

/** Exige um usuário logado (modo multiplayer) e devolve seu id e nome de exibição. */
export async function requireUser(): Promise<{ id: string; name: string }> {
  const auth = getRequest()?.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    throw new Error("Entre com sua conta Google para jogar no modo multiplayer.");
  }
  const { data, error } = await supabaseAdmin.auth.getUser(auth.slice(7));
  if (error || !data.user) {
    throw new Error("Sua sessão expirou. Entre novamente com o Google.");
  }
  const u = data.user;
  const meta = (u.user_metadata ?? {}) as Record<string, any>;
  const { data: p } = await supabaseAdmin
    .from("profiles")
    .select("display_name")
    .eq("id", u.id)
    .maybeSingle();
  const name: string =
    p?.display_name ||
    meta["display_name"] ||
    meta["name"] ||
    meta["full_name"] ||
    u.email?.split("@")[0] ||
    "Jogador";
  return { id: u.id, name };
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

    const { data: nlCheck } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("code", 301)
      .limit(1);

    if (!nlCheck || nlCheck.length === 0) {
      const { NOSSO_LAR_QUESTIONS } = await import("@/data/nosso-lar-questions");
      const rows = NOSSO_LAR_QUESTIONS.map((q) => ({
        code: q.code,
        book: q.book as string,
        statement: q.statement,
        option_a: q.options.A,
        option_b: q.options.B,
        option_c: q.options.C,
        option_d: q.options.D,
        option_e: q.options.E,
        correct_option: q.correct_option,
        explanation: q.explanation,
        reference: q.reference,
        difficulty: q.difficulty,
        active: q.active,
      }));
      const { error: nlErr } = await supabaseAdmin
        .from("questions")
        .upsert(rows, { onConflict: "statement" });
      if (nlErr) {
        await supabaseAdmin.from("questions").upsert(
          rows.map((r) => ({ ...r, book: "obras_postumas" })),
          { onConflict: "statement" },
        );
      }
    }

    const { data: omCheck } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("code", 351)
      .limit(1);

    if (!omCheck || omCheck.length === 0) {
      const { OS_MENSAGEIROS_QUESTIONS } = await import("@/data/os-mensageiros-questions");
      const rows = OS_MENSAGEIROS_QUESTIONS.map((q) => ({
        code: q.code,
        book: q.book as string,
        statement: q.statement,
        option_a: q.options.A,
        option_b: q.options.B,
        option_c: q.options.C,
        option_d: q.options.D,
        option_e: q.options.E,
        correct_option: q.correct_option,
        explanation: q.explanation,
        reference: q.reference,
        difficulty: q.difficulty,
        active: q.active,
      }));
      const { error: omErr } = await supabaseAdmin
        .from("questions")
        .upsert(rows, { onConflict: "statement" });
      if (omErr) {
        await supabaseAdmin.from("questions").upsert(
          rows.map((r) => ({ ...r, book: "obras_postumas" })),
          { onConflict: "statement" },
        );
      }
    }

    const { data: oqeCheck } = await supabaseAdmin
      .from("questions")
      .select("id")
      .eq("code", 801)
      .limit(1);

    if (!oqeCheck || oqeCheck.length === 0) {
      const { O_QUE_E_ESPIRITISMO_QUESTIONS } = await import(
        "@/data/o-que-e-espiritismo-questions"
      );
      const rows = O_QUE_E_ESPIRITISMO_QUESTIONS.map((q) => ({
        code: q.code,
        book: q.book as string,
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
      }));
      const { error: oqeErr } = await supabaseAdmin
        .from("questions")
        .upsert(rows, { onConflict: "statement" });
      if (oqeErr) {
        await supabaseAdmin.from("questions").upsert(
          rows.map((r) => ({ ...r, book: "obras_postumas" })),
          { onConflict: "statement" },
        );
      }
    }
  } catch (e) {
    console.warn("[Seed] Aviso ao verificar/sincronizar perguntas complementares:", e);
  }
}

export { supabaseAdmin };
