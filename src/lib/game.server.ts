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
  const upsertStandard = async (rows: any[]) => {
    const { error } = await supabaseAdmin.from("questions").upsert(rows, { onConflict: "statement" });
    if (error) throw new Error(error.message);
  };

  {
    const { CEU_INFERNO_QUESTIONS } = await import("@/data/ceu-inferno-questions");
    await upsertStandard(CEU_INFERNO_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { GENESE_QUESTIONS } = await import("@/data/genese-questions");
    await upsertStandard(GENESE_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { LIVRO_MEDIUNS_QUESTIONS } = await import("@/data/livro-mediuns-questions");
    await upsertStandard(LIVRO_MEDIUNS_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { OBRAS_POSTUMAS_QUESTIONS } = await import("@/data/obras-postumas-questions");
    await upsertStandard(OBRAS_POSTUMAS_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { NOSSO_LAR_QUESTIONS } = await import("@/data/nosso-lar-questions");
    await upsertStandard(NOSSO_LAR_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.options.A, option_b: q.options.B, option_c: q.options.C, option_d: q.options.D, option_e: q.options.E,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { OS_MENSAGEIROS_QUESTIONS } = await import("@/data/os-mensageiros-questions");
    await upsertStandard(OS_MENSAGEIROS_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.options.A, option_b: q.options.B, option_c: q.options.C, option_d: q.options.D, option_e: q.options.E,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { O_QUE_E_ESPIRITISMO_QUESTIONS } = await import("@/data/o-que-e-espiritismo-questions");
    await upsertStandard(O_QUE_E_ESPIRITISMO_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { LIVRO_ESPIRITOS_QUESTIONS } = await import("@/data/livro-espiritos-questions");
    await upsertStandard(LIVRO_ESPIRITOS_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
  {
    const { EVANGELHO_QUESTIONS } = await import("@/data/evangelho-questions");
    await upsertStandard(EVANGELHO_QUESTIONS.map((q: any) => ({
      code: q.code, book: q.book, statement: q.statement,
      option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, option_e: q.option_e,
      correct_option: q.correct_option, explanation: q.explanation, reference: q.reference,
      difficulty: q.difficulty, active: q.active,
    })));
  }
}

export { supabaseAdmin };
