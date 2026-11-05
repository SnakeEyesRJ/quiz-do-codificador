import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { clearMatchHistory } from "@/lib/game.functions";
import { mpGuestHistory } from "@/lib/multiplayer.functions";
import { isMultiplayerName, parseRoomName } from "@/lib/multiplayer";
import { toast } from "sonner";
import { History, Loader2, Swords, Trash2, Trophy, Users } from "lucide-react";
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
      { title: "Histórico · QUIZ DO CODIFICADOR" },
      { name: "description", content: "Suas partidas anteriores contra o Codificador e no modo 1×1." },
      { property: "og:title", content: "Histórico · QUIZ DO CODIFICADOR" },
      { property: "og:description", content: "Resultados e rodadas das partidas." },
    ],
  }),
  component: Historico,
});

type MatchRecord = {
  id: string;
  status: string;
  winner: string | null;
  player_rounds: number;
  codificador_rounds: number;
  player_name: string;
  user_id: string | null;
  created_at: string;
  total_rounds?: number | null;
};

type MatchFilter = "all" | "solo" | "mp" | "open";

const FILTERS: { id: MatchFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "solo", label: "Solo" },
  { id: "mp", label: "1×1" },
  { id: "open", label: "Em andamento" },
];

function Historico() {
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const queryClient = useQueryClient();
  const clearHistory = useServerFn(clearMatchHistory);
  const fetchGuest = useServerFn(mpGuestHistory);
  const [deleting, setDeleting] = useState(false);
  const [filter, setFilter] = useState<MatchFilter>("all");

  const {
    data = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["matches", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data: ownData, error } = await supabase
        .from("matches")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw new Error(error.message);
      const own = (Array.isArray(ownData) ? ownData : []) as MatchRecord[];
      let guests: MatchRecord[] = [];
      try {
        const gRes = await fetchGuest();
        if (Array.isArray(gRes)) guests = gRes as MatchRecord[];
      } catch {
        // Partidas como convidado são um extra; o histórico do anfitrião continua visível.
      }
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
      await clearHistory();
      queryClient.setQueryData(["matches", user.id], []);
      await queryClient.invalidateQueries({ queryKey: ["matches", user.id] });
      setFilter("all");
      toast.success("Histórico de partidas excluído com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir histórico:", err);
      toast.error(err instanceof Error ? err.message : "Não foi possível excluir o histórico.");
    } finally {
      setDeleting(false);
    }
  };

  const summary = useMemo(() => summarize(data, user?.id), [data, user?.id]);
  const visible = useMemo(
    () => data.filter((m) => matchesFilter(m, filter, user?.id)),
    [data, filter, user?.id],
  );

  if (authLoading) {
    return (
      <main className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-20 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-ink/70" aria-hidden />
        <p className="mt-3 text-sm text-muted-foreground" role="status">
          Carregando histórico...
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-peach p-3 text-ink shadow-soft">
          <History className="h-8 w-8" aria-hidden />
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Histórico</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Entre com sua conta Google para ver vitórias, derrotas e partidas 1×1 salvas no seu nome.
        </p>
        <div className="mt-8 rounded-2xl border-2 border-border bg-card p-5 text-center shadow-soft sm:p-6">
          <p className="text-sm font-semibold text-ink">Login necessário</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            O histórico fica ligado à sua conta para você retomar o placar em qualquer dispositivo.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="mt-5 h-auto min-h-11 w-full whitespace-normal px-4 py-2.5"
            onClick={() =>
              signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
            }
          >
            Entrar com Google
          </Button>
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" size="sm" className="h-auto whitespace-normal px-3 py-2">
            <Link to="/jogar" search={{ rodadas: 3, dificuldade: "normal" }}>
              <Swords className="mr-1.5 h-4 w-4" aria-hidden />
              Jogar sem salvar o histórico
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  const winRate =
    summary.finished === 0 ? null : Math.round((summary.wins / summary.finished) * 100);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <header className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-peach/60 px-3 py-1 text-[11px] font-bold text-ink shadow-xs sm:text-xs">
          <History className="h-3.5 w-3.5" aria-hidden />
          <span>SUAS PARTIDAS</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Histórico</h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {winRate === null
            ? "Nenhuma partida concluída ainda. O aproveitamento aparece depois da primeira vitória ou derrota."
            : `Aproveitamento de ${winRate}% em ${summary.finished} ${summary.finished === 1 ? "partida concluída" : "partidas concluídas"}.`}
        </p>
      </header>

      <section aria-label="Resumo das partidas" className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <StatTile label="Partidas" value={summary.total} />
        <StatTile label="Vitórias" value={summary.wins} tone="win" />
        <StatTile label="Derrotas" value={summary.losses} tone="loss" />
        <StatTile label="Em andamento" value={summary.open} tone="open" />
      </section>

      <div className="mt-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-end">
        <div
          role="group"
          aria-label="Filtrar partidas"
          className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
        >
          {FILTERS.map((item) => {
            const count =
              item.id === "all"
                ? summary.total
                : item.id === "solo"
                  ? summary.solo
                  : item.id === "mp"
                    ? summary.mp
                    : summary.open;
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item.id)}
                className={cn(
                  "min-h-11 rounded-xl border-2 px-3 py-2 text-left text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-center",
                  selected
                    ? "border-ink bg-peach text-ink shadow-soft"
                    : "border-border bg-card/70 text-muted-foreground hover:bg-peach/30 hover:text-ink",
                )}
              >
                {item.label}
                <span className="ml-1.5 tabular-nums text-[11px] font-semibold opacity-80">{count}</span>
              </button>
            );
          })}
        </div>

        {data.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="h-auto min-h-11 border-destructive/40 px-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
                disabled={deleting}
                aria-busy={deleting}
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                Limpar histórico
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Limpar histórico de partidas?</AlertDialogTitle>
                <AlertDialogDescription>
                  Isso exclui permanentemente {data.length === 1 ? "a partida registrada" : `as ${data.length} partidas registradas`}
                  , inclusive as que ainda estão em andamento. Esta ação não pode ser desfeita.
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
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    <Trash2 className="h-4 w-4" aria-hidden />
                  )}
                  Sim, excluir histórico
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {isLoading
          ? "Carregando partidas."
          : `Mostrando ${visible.length} ${visible.length === 1 ? "partida" : "partidas"}.`}
      </p>

      {isLoading ? (
        <div className="mt-6 space-y-3" role="status" aria-label="Carregando histórico">
          <span className="sr-only">Carregando histórico...</span>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl border border-border bg-card/70" />
          ))}
        </div>
      ) : isError ? (
        <div
          role="alert"
          className="mt-6 rounded-2xl border-2 border-destructive/30 bg-card p-8 text-center shadow-soft"
        >
          <h2 className="font-display text-lg font-bold text-ink">Não foi possível carregar o histórico</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A lista de partidas não respondeu. Suas partidas continuam salvas.
          </p>
          <Button
            className="mt-5"
            variant="hero"
            onClick={() => void refetch()}
            disabled={isFetching}
            aria-busy={isFetching}
          >
            {isFetching ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
            Tentar de novo
          </Button>
        </div>
      ) : data.length === 0 ? (
        <EmptyHistory />
      ) : visible.length === 0 ? (
        <div className="mt-6 rounded-2xl border-2 border-dashed border-border bg-card/40 p-8 text-center">
          <h2 className="font-display text-lg font-bold text-ink">Nada neste filtro</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Não há partidas em “{FILTERS.find((f) => f.id === filter)?.label}”. As outras continuam na lista completa.
          </p>
          <Button className="mt-5" variant="secondary" onClick={() => setFilter("all")}>
            Ver todas as partidas
          </Button>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {visible.map((m) => (
            <MatchCard key={m.id} match={m} userId={user.id} />
          ))}
        </ul>
      )}
    </main>
  );
}

function StatTile({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: number;
  tone?: "neutral" | "win" | "loss" | "open";
}) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-3 text-center shadow-xs">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p
        className={cn(
          "mt-1 font-display text-2xl font-bold tabular-nums",
          tone === "win" && "text-forest",
          tone === "loss" && "text-destructive",
          tone === "open" && "text-terracotta",
          tone === "neutral" && "text-ink",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function EmptyHistory() {
  return (
    <div className="mt-6 rounded-2xl border-2 border-dashed border-border bg-card/40 p-8 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-peach text-ink">
        <Trophy className="h-7 w-7" aria-hidden />
      </div>
      <h2 className="mt-4 font-display text-lg font-bold text-ink">Nenhuma partida registrada</h2>
      <p className="mx-auto mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Quando você terminar uma partida solo ou 1×1, o resultado aparece aqui com o placar e a dificuldade.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="hero" className="h-auto min-h-11">
          <Link to="/jogar" search={{ rodadas: 3, dificuldade: "normal" }}>
            <Swords className="h-4 w-4" aria-hidden /> Jogar solo
          </Link>
        </Button>
        <Button asChild variant="secondary" className="h-auto min-h-11">
          <Link to="/multiplayer" search={{}}>
            <Users className="h-4 w-4" aria-hidden /> Jogar 1×1
          </Link>
        </Button>
      </div>
    </div>
  );
}

function MatchCard({ match, userId }: { match: MatchRecord; userId: string }) {
  const view = describeMatch(match, userId);
  const when = new Date(match.created_at);
  const dateLabel = when.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <li>
      <article
        className={cn(
          "rounded-2xl border bg-card p-4 shadow-xs transition-colors hover:border-ink/30",
          view.outcome === "win" && "border-forest/35",
          view.outcome === "loss" && "border-destructive/30",
          view.outcome === "open" && "border-border",
        )}
        aria-label={`${dateLabel}. ${view.modeLabel} contra ${view.opponent}. ${view.resultLabel}. Placar ${view.myRounds} a ${view.oppRounds}. Dificuldade ${view.difficultyLabel}.`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 text-left">
            <time className="text-xs font-medium text-muted-foreground" dateTime={when.toISOString()}>
              {dateLabel}
            </time>
            <h2 className="mt-1 truncate font-display text-base font-bold text-ink">
              {view.modeLabel} · {view.opponent}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                  view.isMp
                    ? "border-forest/40 bg-forest/15 text-forest"
                    : "border-border bg-peach/40 text-ink",
                )}
              >
                {view.isMp ? <Users className="h-3 w-3" aria-hidden /> : <Swords className="h-3 w-3" aria-hidden />}
                {view.isMp ? "1×1" : "Solo"}
              </span>
              <span className="rounded-full border border-border/80 bg-cream/70 px-2 py-0.5 text-[11px] font-semibold text-ink/80">
                {view.difficultyLabel}
              </span>
              {view.formatLabel && (
                <span className="rounded-full border border-border/80 bg-cream/70 px-2 py-0.5 text-[11px] font-semibold text-ink/80">
                  {view.formatLabel}
                </span>
              )}
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p
              className={cn(
                "inline-flex rounded-full px-2.5 py-1 text-xs font-bold",
                view.outcome === "win" && "bg-forest/15 text-forest",
                view.outcome === "loss" && "bg-destructive/10 text-destructive",
                view.outcome === "open" && "bg-amber/25 text-ink",
              )}
            >
              {view.resultLabel}
            </p>
            <p className="mt-2 font-display text-xl font-bold tabular-nums text-ink" aria-hidden>
              {view.myRounds}
              <span className="mx-1 text-sm font-semibold text-muted-foreground">×</span>
              {view.oppRounds}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              você × {view.opponentShort}
            </p>
          </div>
        </div>
      </article>
    </li>
  );
}

function summarize(matches: MatchRecord[], userId: string | undefined) {
  let wins = 0;
  let losses = 0;
  let open = 0;
  let solo = 0;
  let mp = 0;
  for (const match of matches) {
    const view = describeMatch(match, userId);
    if (view.isMp) mp += 1;
    else solo += 1;
    if (view.outcome === "win") wins += 1;
    else if (view.outcome === "loss") losses += 1;
    else open += 1;
  }
  return { total: matches.length, wins, losses, open, finished: wins + losses, solo, mp };
}

function matchesFilter(match: MatchRecord, filter: MatchFilter, userId: string | undefined) {
  const view = describeMatch(match, userId);
  if (filter === "solo") return !view.isMp;
  if (filter === "mp") return view.isMp;
  if (filter === "open") return view.outcome === "open";
  return true;
}

function describeMatch(match: MatchRecord, userId: string | undefined) {
  const diff = extractMatchDifficulty(match);
  const isMp = isMultiplayerName(match.player_name);
  const parsed = isMp ? parseRoomName(match.player_name) : null;
  const isHost = !!userId && match.user_id === userId;
  const opponent = isMp
    ? isHost
      ? (parsed?.guestName ?? "Adversário")
      : (parsed?.hostName ?? "Anfitrião")
    : "Codificador";
  const myRounds = isHost || !isMp ? match.player_rounds : match.codificador_rounds;
  const oppRounds = isHost || !isMp ? match.codificador_rounds : match.player_rounds;
  const finished = match.status === "finished";
  const didWin = isHost || !isMp ? match.winner === "player" : match.winner === "codificador";
  const outcome = !finished ? "open" : didWin ? "win" : "loss";
  const storedRounds = Number(match.total_rounds);
  const rounds = [3, 5, 7, 9].includes(storedRounds) ? storedRounds : (parsed?.totalRounds ?? null);
  const formatLabel = rounds ? `Melhor de ${rounds}` : null;

  return {
    isMp,
    opponent,
    opponentShort: isMp ? "adv." : "cod.",
    myRounds,
    oppRounds,
    outcome,
    resultLabel: outcome === "open" ? "Em andamento" : outcome === "win" ? "Vitória" : "Derrota",
    modeLabel: isMp ? "Multiplayer" : "Solo",
    difficultyLabel: DIFFICULTY_LABELS[diff],
    formatLabel,
  };
}
