import { getRequest } from "@tanstack/react-start/server";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { O_QUE_E_ESPIRITISMO_QUESTIONS } from "@/data/o-que-e-espiritismo-questions";

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

const OQE_BY_CODE = new Map(O_QUE_E_ESPIRITISMO_QUESTIONS.map((q) => [q.code, q]));

export function overlayCleanQuestion<T extends { code?: number; book?: string | null } & Record<string, any>>(
  q: T,
): T {
  const seed = q.code !== undefined ? OQE_BY_CODE.get(Number(q.code)) : undefined;
  if (
    seed &&
    (q.book === "o_que_e_espiritismo" ||
      (q.book === "obras_postumas" && Number(q.code) >= 801) ||
      String(q.statement ?? "").includes("├") ||
      String(q.explanation ?? "").includes("├"))
  ) {
    return {
      ...q,
      statement: seed.statement,
      option_a: seed.option_a,
      option_b: seed.option_b,
      option_c: seed.option_c,
      option_d: seed.option_d,
      option_e: seed.option_e,
      correct_option: seed.correct_option,
      explanation: seed.explanation,
      reference: seed.reference,
      difficulty: seed.difficulty,
    };
  }
  return q;
}

export { supabaseAdmin };
