import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { clearMatchHistory } from "@/lib/game.functions";
import { mpGuestHistory } from "@/lib/multiplayer.functions";
import { isMultiplayerName, parseRoomName } from "@/lib/multiplayer";
import { toast } from "sonner";
import { History, Loader2, Swords, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { DIFFICULTY_LABELS, extractMatchDifficulty } from "@/lib/game-rules";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/historico")({
  head: () => ({
    meta: [
      { title: "QUIZ DO CODIFICADOR" },
      { name: "description", content: "Suas partidas anteriores contra o Codificador." },
      { property: "og:title", content: "QUIZ DO CODIFICADOR" },
      { property: "og:description", content: "Resultados e rodadas das partidas." },
    ],
  }),
  component: Historico,
});

function Historico() {
  const { user, signInWithGoogle } = useAuth();
  const queryClient = useQueryClient();
  const clearHistory = useServerFn(clearMatchHistory);
  const fetchGuest = useServerFn(mpGuestHistory);
  const [deleting, setDeleting] = useState(false);

  const { data = [], isLoading } = useQuery({
    queryKey: ["matches", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data: ownData } = await supabase
        .from("matches")
        .select("*")
        .order("created_at", { ascending: false });
      const own = Array.isArray(ownData) ? ownData : [];
      let guests: any[] = [];
      try {
        const gRes = await fetchGuest();
        if (Array.isArray(gRes)) guests = gRes;
      } catch {}
      const combined = [...own];
      const seen = new Set(own.map((m) => m.id));
      for (const g of guests) {
        if (g && g.id && !seen.has(g.id)) {
          combined.push(g);
          seen.add(g.id);
        }
      }
      return combined.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    },
  });

  const handleClearHistory = async () => {
    if (!user) return;
    setDeleting(true);
    try {
      // A exclusão é feita no servidor (o cliente só tem permissão de leitura nas tabelas)
      await clearHistory();
      queryClient.setQueryData(["matches", user.id], []);
      await queryClient.invalidateQueries({ queryKey: ["matches", user.id] });
      toast.success("Histórico de partidas excluído com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir histórico:", err);
      toast.error(err instanceof Error ? err.message : "Não foi possível excluir o histórico.");
    } finally {
      setDeleting(false);
    }
  };

  if (!user)
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Histórico</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entre com sua conta Google para visualizar ou gerenciar suas partidas gravadas.
        </p>
        <Button className="mt-6" onClick={() => signInWithGoogle()}>
          Entrar com Google
        </Button>
      </main>
    );

  const done = data.filter((m) => m.status === "finished");
  const wins = done.filter((m) =>
    user && m.user_id === user.id ? m.winner === "player" : m.winner === "codificador",
  );

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink">Histórico</h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Partidas: {data.length} · Vitórias: {wins.length} · Derrotas:{" "}
            {done.length - wins.length}
          </p>
        </div>

        {data.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
                disabled={deleting}
              >
                <Trash2 className="h-4 w-4 mr-1.5" />
                Limpar histórico
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Limpar histórico de partidas?</AlertDialogTitle>
                <AlertDialogDescription>
                  Tem certeza de que deseja excluir permanentemente todas as suas {data.length}{" "}
                  partidas registradas? Esta ação não pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearHistory}
                  disabled={deleting}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {deleting ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-1.5" />
                  )}
                  Sim, excluir histórico
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-ink/60" />
          <p className="mt-2 text-sm text-muted-foreground">Carregando histórico...</p>
        </div>
      ) : data.length === 0 ? (
        <div className="mt-8 rounded-2xl border-2 border-dashed border-border p-8 text-center bg-card/40">
          <History className="mx-auto h-12 w-12 text-muted-foreground/60" />
          <h2 className="mt-4 font-bold text-ink text-lg">Nenhuma partida registrada</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Você ainda não possui partidas concluídas ou o seu histórico foi excluído.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero">
              <Link to="/jogar" search={{ rodadas: 3, dificuldade: "normal" }}>
                <Swords className="h-4 w-4 mr-1.5" /> Jogar Solo
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/multiplayer" search={{}}>
                <Users className="h-4 w-4 mr-1.5" /> Jogar Multiplayer
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <ul className="mt-6 space-y-2">
          {data.map((m) => {
            const diff = extractMatchDifficulty(m);
            const isMp = isMultiplayerName(m.player_name);
            const parsed = isMp ? parseRoomName(m.player_name) : null;
            const isHost = user?.id === m.user_id;
            const oppName = isMp
              ? isHost
                ? (parsed?.guestName ?? "Adversário")
                : (parsed?.hostName ?? "Anfitrião")
              : "Codificador";
            const myRounds = isHost ? m.player_rounds : m.codificador_rounds;
            const oppRounds = isHost ? m.codificador_rounds : m.player_rounds;
            const didWin = isHost ? m.winner === "player" : m.winner === "codificador";

            return (
              <li
                key={m.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border bg-card p-3 shadow-xs hover:border-ink/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {new Date(m.created_at).toLocaleString("pt-BR")}
                  </span>
                  {isMp ? (
                    <span className="rounded-full border border-forest/40 bg-forest/15 px-2 py-0.5 text-xs font-semibold text-forest flex items-center gap-1">
                      <Users className="h-3 w-3" /> 1×1 vs {oppName}
                    </span>
                  ) : (
                    <span className="rounded-full border border-border bg-peach/40 px-2 py-0.5 text-xs font-semibold text-ink">
                      Solo vs Codificador
                    </span>
                  )}
                  <span className="rounded-full border border-border/80 bg-cream/70 px-2 py-0.5 text-[11px] font-semibold text-ink/80">
                    {DIFFICULTY_LABELS[diff]}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-semibold",
                      m.status !== "finished"
                        ? "text-muted-foreground"
                        : didWin
                          ? "text-forest"
                          : "text-destructive",
                    )}
                  >
                    {m.status !== "finished" ? "Em andamento" : didWin ? "Vitória" : "Derrota"}
                  </span>
                  <span className="text-sm font-medium">
                    {myRounds} × {oppRounds}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
