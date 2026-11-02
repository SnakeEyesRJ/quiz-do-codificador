import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { History, Loader2, Swords, Trash2 } from "lucide-react";
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
  const [deleting, setDeleting] = useState(false);

  const { data = [], isLoading } = useQuery({
    queryKey: ["matches", user?.id],
    enabled: !!user,
    queryFn: async () =>
      (await supabase.from("matches").select("*").order("created_at", { ascending: false })).data ??
      [],
  });

  const handleClearHistory = async () => {
    if (!user) return;
    setDeleting(true);
    try {
      const matchIds = data.map((m) => m.id);
      if (matchIds.length > 0) {
        // Exclui respostas das partidas para preservar integridade
        await supabase.from("answers").delete().in("match_id", matchIds);
      }
      const { error } = await supabase.from("matches").delete().eq("user_id", user.id);
      if (error) throw error;

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
  const wins = done.filter((m) => m.winner === "player");

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
          <Button asChild variant="hero" className="mt-6">
            <Link to="/jogar">
              <Swords className="h-4 w-4 mr-1.5" /> Jogar nova partida
            </Link>
          </Button>
        </div>
      ) : (
        <ul className="mt-6 space-y-2">
          {data.map((m) => {
            const diff = extractMatchDifficulty(m);
            return (
              <li
                key={m.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border bg-card p-3 shadow-xs hover:border-ink/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {new Date(m.created_at).toLocaleString("pt-BR")}
                  </span>
                  <span className="rounded-full border border-border bg-peach/40 px-2 py-0.5 text-xs font-semibold text-ink">
                    {DIFFICULTY_LABELS[diff]}
                  </span>
                </div>
                <span className="font-semibold text-ink">
                  {m.status !== "finished"
                    ? "Em andamento"
                    : m.winner === "player"
                      ? "Vitória"
                      : "Derrota"}
                </span>
                <span className="text-sm font-medium">
                  Rodadas {m.player_rounds} × {m.codificador_rounds}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
