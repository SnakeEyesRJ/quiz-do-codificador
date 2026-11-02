import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/historico")({
  head: () => ({
    meta: [
      { title: "Histórico — Quiz do Codificador" },
      { name: "description", content: "Suas partidas anteriores contra o Codificador." },
      { property: "og:title", content: "Histórico — Quiz do Codificador" },
      { property: "og:description", content: "Resultados e rodadas das partidas." },
    ],
  }),
  component: Historico,
});

function Historico() {
  const { user, signInWithGoogle } = useAuth();
  const { data = [] } = useQuery({
    queryKey: ["matches", user?.id],
    enabled: !!user,
    queryFn: async () =>
      (await supabase.from("matches").select("*").order("created_at", { ascending: false })).data ?? [],
  });

  if (!user)
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Histórico</h1>
        <Button className="mt-6" onClick={() => signInWithGoogle()}>Entrar com Google</Button>
      </main>
    );

  const done = data.filter((m) => m.status === "finished");
  const wins = done.filter((m) => m.winner === "player").length;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-4xl font-bold">Histórico</h1>
      <p className="mt-2 text-muted-foreground">
        Partidas: {data.length} · Vitórias: {wins} · Derrotas: {done.length - wins}
      </p>
      <ul className="mt-6 space-y-2">
        {data.map((m) => (
          <li key={m.id} className="flex items-center justify-between rounded-xl border bg-card p-3">
            <span className="text-sm">{new Date(m.created_at).toLocaleString("pt-BR")}</span>
            <span className="font-semibold">
              {m.status !== "finished" ? "Em andamento" : m.winner === "player" ? "Vitória" : "Derrota"}
            </span>
            <span className="text-sm">Rodadas {m.player_rounds} × {m.codificador_rounds}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
