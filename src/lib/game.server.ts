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
  if (match.user_id && match.user_id !== userId) throw new Error("Partida não pertence a este jogador.");
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

export { supabaseAdmin };
