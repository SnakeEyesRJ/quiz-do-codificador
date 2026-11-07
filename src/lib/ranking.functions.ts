import { createServerFn } from "@tanstack/react-start";
import { cleanPlayerName } from "./game-rules";

export interface RankingEntry {
  rank: number;
  name: string;
  wins: number;
}

/**
 * Marco de reinício do ranking: partidas anteriores a este instante não entram na lista.
 */
const RANKING_RESET_AT = "2026-11-07T08:45:00.000Z";

let rankingCleaned = false;

/** Top 10 jogadores por vitórias em partidas concluídas. */
export const getRanking = createServerFn({ method: "GET" }).handler(
  async (): Promise<RankingEntry[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (!rankingCleaned) {
      await supabaseAdmin
        .from("matches")
        .delete()
        .lt("created_at", RANKING_RESET_AT);
      rankingCleaned = true;
    }

    const { data, error } = await supabaseAdmin
      .from("matches")
      .select("player_name, user_id")
      .eq("status", "finished")
      .eq("winner", "player")
      .gte("created_at", RANKING_RESET_AT);
    if (error) throw new Error(error.message);

    const byKey = new Map<string, { name: string; wins: number }>();
    for (const row of data ?? []) {
      const key = row.user_id ?? cleanPlayerName(row.player_name ?? "Jogador");
      const name = cleanPlayerName(row.player_name ?? "Jogador");
      const entry = byKey.get(key) ?? { name, wins: 0 };
      entry.wins += 1;
      byKey.set(key, entry);
    }

    return [...byKey.values()]
      .sort((a, b) => b.wins - a.wins || a.name.localeCompare(b.name))
      .slice(0, 10)
      .map((e, i) => ({ rank: i + 1, name: e.name, wins: e.wins }));
  },
);
