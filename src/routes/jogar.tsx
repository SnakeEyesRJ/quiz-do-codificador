import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Check, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scoreboard } from "@/components/Scoreboard";
import { CodificadorPhoto, PlayerAvatar } from "@/components/PlayerAvatar";
import { useAuth } from "@/hooks/use-auth";
import {
  nextQuestion,
  startMatch,
  submitAnswer,
  type AnswerResult,
  type MatchState,
  type PublicQuestion,
} from "@/lib/game.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/jogar")({
  head: () => ({
    meta: [
      { title: "Jogar — Quiz do Codificador" },
      { name: "description", content: "Partida contra o Codificador: melhor de três rodadas." },
      { property: "og:title", content: "Jogar — Quiz do Codificador" },
      { property: "og:description", content: "Responda e dispute rodadas de 10 pontos contra o Codificador." },
    ],
  }),
  component: Play,
});

const BOOK_LABEL = { livro_espiritos: "O Livro dos Espíritos", evangelho: "O Evangelho Segundo o Espiritismo" };

function Play() {
  const { user, profile, loading } = useAuth();
  const start = useServerFn(startMatch);
  const fetchNext = useServerFn(nextQuestion);
  const answer = useServerFn(submitAnswer);

  const [name, setName] = useState("");
  const [state, setState] = useState<MatchState | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [busy, setBusy] = useState(false);
  // Score shown while reviewing a round-ending answer (before the next round resets it)
  const [shown, setShown] = useState<MatchState | null>(null);

  async function run<T>(fn: () => Promise<T>) {
    setBusy(true);
    try {
      return await fn();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Algo deu errado.");
    } finally {
      setBusy(false);
    }
  }

  const begin = () =>
    run(async () => {
      const s = await start({ data: { playerName: name || undefined } });
      setState(s);
      setShown(null);
      setResult(null);
      setQuestion(await fetchNext({ data: { matchId: s.matchId } }));
    });

  const choose = (letter: "A" | "B" | "C" | "D" | "E") =>
    question &&
    state &&
    !result &&
    run(async () => {
      const r = await answer({ data: { matchId: state.matchId, answerId: question.answerId, option: letter } });
      setResult(r);
      // Keep the final score of a finished round visible until "next".
      setShown(
        r.roundWinner
          ? {
              ...r.state,
              currentRound: r.finishedRound,
              playerScore: r.roundWinner && r.state.status === "in_progress" ? scoreFromRound(r, "p") : r.state.playerScore,
              codificadorScore:
                r.roundWinner && r.state.status === "in_progress" ? scoreFromRound(r, "c") : r.state.codificadorScore,
            }
          : r.state,
      );
      setState(r.state);
    });

  const next = () =>
    state &&
    run(async () => {
      setResult(null);
      setShown(null);
      setQuestion(await fetchNext({ data: { matchId: state.matchId } }));
    });

  if (!state) {
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <CodificadorPhoto size={120} className="mx-auto" />
        <h1 className="mt-6 text-4xl font-bold">Nova partida</h1>
        <p className="mt-2 text-muted-foreground">Melhor de três rodadas contra o Codificador.</p>
        {loading ? null : user ? (
          <div className="mt-6 flex items-center justify-center gap-3">
            <PlayerAvatar url={profile?.avatar_url} size={44} />
            <span className="font-semibold">{profile?.display_name ?? "Jogador"}</span>
          </div>
        ) : (
          <div className="mt-6 text-left">
            <label className="text-sm font-medium" htmlFor="nome">Seu nome (opcional)</label>
            <Input id="nome" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jogador" className="mt-1 bg-card" maxLength={60} />
            <p className="mt-2 text-xs text-muted-foreground">Entre com o Google para salvar seu histórico e usar seu avatar.</p>
          </div>
        )}
        <Button variant="hero" size="xl" className="mt-8" onClick={begin} disabled={busy}>
          {busy && <Loader2 className="animate-spin" />} Começar
        </Button>
      </main>
    );
  }

  const board = shown ?? state;
  const matchOver = state.status === "finished" && !!result;

  return (
    <main className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
      <div className="sticky top-2 z-10">
        <Scoreboard state={board} avatarUrl={profile?.avatar_url} />
      </div>

      {question && (
        <section className="mt-6 rounded-2xl border bg-card p-4 shadow-soft sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="rounded-full bg-peach px-3 py-1 font-semibold">{BOOK_LABEL[question.book]}</span>
            <span className="text-muted-foreground">Pergunta nº {question.code}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">{question.statement}</h2>
          <ul className="mt-5 space-y-2">
            {question.options.map((o) => {
              const isCorrect = result?.correctOption === o.letter;
              const isPicked = result?.playerOption === o.letter;
              return (
                <li key={o.letter}>
                  <button
                    disabled={!!result || busy}
                    onClick={() => choose(o.letter)}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-xl border-2 border-border bg-cream p-3 text-left transition-colors",
                      !result && "hover:border-ink/40 hover:bg-peach",
                      result && isCorrect && "border-ink bg-peach font-semibold",
                      result && isPicked && !isCorrect && "border-destructive bg-rose",
                      result && !isCorrect && !isPicked && "opacity-60",
                    )}
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-salmon font-bold">{o.letter}</span>
                    <span className="flex-1 pt-0.5">{o.text}</span>
                    {result && isCorrect && <Check className="mt-1 h-5 w-5 shrink-0" />}
                    {result && isPicked && !isCorrect && <X className="mt-1 h-5 w-5 shrink-0 text-destructive" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {result && (
        <section className="mt-4 rounded-2xl border-2 border-ink/15 bg-cream p-4 sm:p-6">
          <p className="text-lg font-bold">
            {result.playerCorrect ? "Você acertou! +1 ponto para você." : `Você errou. A correta é ${result.correctOption}. +1 ponto para o Codificador.`}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {result.codificadorCounted
              ? result.codificadorCorrect
                ? `O Codificador respondeu ${result.codificadorOption} e acertou: +1 ponto para ele.`
                : `O Codificador respondeu ${result.codificadorOption} e errou: +1 ponto para você.`
              : "A rodada terminou com a sua resposta."}
          </p>
          <div className="mt-4 rounded-xl bg-peach/60 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Explicação</p>
            <p className="mt-1">{result.explanation}</p>
            <p className="mt-2 text-sm italic text-muted-foreground">
              {question && BOOK_LABEL[question.book]} — {result.reference}
            </p>
          </div>

          {result.roundWinner && (
            <div className="mt-4 rounded-xl bg-rose/70 p-4 text-center">
              <p className="font-display text-2xl font-bold">
                {result.roundWinner === "player" ? "Você venceu" : "O Codificador venceu"} a rodada {result.finishedRound}!
              </p>
              {matchOver && (
                <>
                  <p className="mt-2 font-display text-3xl font-bold">
                    {state.winner === "player" ? "Vitória! Você venceu a partida." : "O Codificador venceu a partida."}
                  </p>
                  <p className="mt-1">
                    Rodadas: você {state.playerRounds} × {state.codificadorRounds} Codificador
                  </p>
                </>
              )}
            </div>
          )}

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {matchOver ? (
              <>
                <Button variant="hero" size="lg" onClick={() => { setState(null); setQuestion(null); setResult(null); }}>
                  Nova partida
                </Button>
                {user && (
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/historico">Ver histórico</Link>
                  </Button>
                )}
              </>
            ) : (
              <Button variant="hero" size="lg" onClick={next} disabled={busy}>
                {busy && <Loader2 className="animate-spin" />}
                {result.roundWinner ? `Iniciar rodada ${state.currentRound}` : "Próxima pergunta"}
              </Button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

// When a round ends mid-match, the returned state already reset scores to 0 for the new round;
// reconstruct the final score of the finished round for display.
function scoreFromRound(r: AnswerResult, who: "p" | "c") {
  const winnerScore = 10;
  const p = r.roundWinner === "player";
  return who === "p" ? (p ? winnerScore : -1) : p ? -1 : winnerScore;
}
