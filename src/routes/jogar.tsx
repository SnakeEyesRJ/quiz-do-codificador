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
  DIFFICULTY_DESCRIPTIONS,
  DIFFICULTY_LABELS,
  DIFFICULTY_LEVELS,
  QUESTION_DIFFICULTY_LABELS,
  type GameDifficulty,
} from "@/lib/game-rules";
import {
  nextQuestion,
  startMatch,
  submitAnswer,
  type AnswerResult,
  type MatchState,
  type PublicQuestion,
} from "@/lib/game.functions";
import { cn } from "@/lib/utils";

const DIFFICULTY_OPTIONS: { key: GameDifficulty; label: string; hint: string }[] = [
  { key: "facil", label: "Fácil", hint: "Iniciante" },
  { key: "normal", label: "Normal", hint: "Equilibrado" },
  { key: "dificil", label: "Difícil", hint: "Avançado" },
  { key: "expert", label: "Expert", hint: "Mestre" },
];

export const Route = createFileRoute("/jogar")({
  validateSearch: (search: Record<string, unknown>) => {
    const r = Number(search.rodadas);
    const d = String(search.dificuldade || search.difficulty || "normal").toLowerCase();
    const validD: GameDifficulty = (DIFFICULTY_LEVELS as readonly string[]).includes(d)
      ? (d as GameDifficulty)
      : "normal";
    return {
      rodadas: [3, 5, 7, 9].includes(r) ? (r as 3 | 5 | 7 | 9) : 3,
      dificuldade: validD,
    };
  },
  head: () => ({
    meta: [
      { title: "Quiz do Codificador" },
      {
        name: "description",
        content:
          "Partida contra o Codificador: dispute em 3, 5, 7 ou 9 rodadas em 4 níveis de dificuldade.",
      },
      { property: "og:title", content: "Quiz do Codificador" },
      {
        property: "og:description",
        content: "Responda e dispute rodadas de 10 pontos contra o Codificador.",
      },
    ],
  }),
  component: Play,
});

const BOOK_LABEL: Record<string, string> = {
  livro_espiritos: "O Livro dos Espíritos",
  evangelho: "O Evangelho Segundo o Espiritismo",
  ceu_inferno: "O Céu e o Inferno",
  genese: "A Gênese",
  livro_mediuns: "O Livro dos Médiuns",
  obras_postumas: "Obras Póstumas",
};

function Play() {
  const { rodadas, dificuldade } = Route.useSearch();
  const { user, profile, loading } = useAuth();
  const start = useServerFn(startMatch);
  const fetchNext = useServerFn(nextQuestion);
  const answer = useServerFn(submitAnswer);

  const [name, setName] = useState("");
  const [rounds, setRounds] = useState<3 | 5 | 7 | 9>(rodadas ?? 3);
  const [difficulty, setDifficulty] = useState<GameDifficulty>(dificuldade ?? "normal");
  const [state, setState] = useState<MatchState | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [busy, setBusy] = useState(false);
  // Score shown while reviewing a round-ending answer (before the next round resets it)
  const [shown, setShown] = useState<MatchState | null>(null);

  async function run<T>(fn: () => Promise<T>): Promise<T | undefined> {
    setBusy(true);
    try {
      return await fn();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Algo deu errado.");
    } finally {
      setBusy(false);
    }
    return undefined;
  }

  const begin = () =>
    run(async () => {
      const s = await start({
        data: {
          playerName: name || undefined,
          totalRounds: rounds,
          difficulty: difficulty,
        },
      });
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
      const r = await answer({
        data: { matchId: state.matchId, answerId: question.answerId, option: letter },
      });
      setResult(r);
      // Keep the final score of a finished round visible until "next".
      setShown(
        r.roundWinner
          ? {
              ...r.state,
              currentRound: r.finishedRound,
              playerScore: r.roundScore.player,
              codificadorScore: r.roundScore.codificador,
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
        <p className="mt-2 text-muted-foreground">Desafie o Codificador em rodadas de 10 pontos.</p>

        {/* Formato da disputa */}
        <div className="mt-6 text-left">
          <label className="text-sm font-semibold">Formato da disputa:</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {([3, 5, 7, 9] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRounds(r)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border-2 py-2.5 px-1 transition-all",
                  rounds === r
                    ? "border-ink bg-peach font-bold shadow-soft scale-[1.02]"
                    : "border-border bg-card/60 hover:bg-peach/30 text-muted-foreground",
                )}
              >
                <span className="text-xl font-bold">{r}</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold">
                  {r === 3 ? "Melhor de 3" : `${Math.floor(r / 2) + 1} vitórias`}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Disputa melhor de {rounds}: vence quem conquistar {Math.floor(rounds / 2) + 1} rodadas
            primeiro.
          </p>
        </div>

        {/* Nível de dificuldade */}
        <div className="mt-6 text-left">
          <label className="text-sm font-semibold">Nível de dificuldade:</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {DIFFICULTY_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setDifficulty(opt.key)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl border-2 py-2.5 px-1 transition-all",
                  difficulty === opt.key
                    ? "border-ink bg-peach font-bold shadow-soft scale-[1.02]"
                    : "border-border bg-card/60 hover:bg-peach/30 text-muted-foreground",
                )}
              >
                <span className="text-sm font-bold text-ink">{opt.label}</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-ink/75">
                  {opt.hint}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {DIFFICULTY_DESCRIPTIONS[difficulty]}
          </p>
        </div>

        {loading ? null : user ? (
          <div className="mt-6 flex items-center justify-center gap-3">
            <PlayerAvatar url={profile?.avatar_url} size={44} />
            <span className="font-semibold">{profile?.display_name ?? "Jogador"}</span>
          </div>
        ) : (
          <div className="mt-6 text-left">
            <label className="text-sm font-medium" htmlFor="nome">
              Seu nome (opcional)
            </label>
            <Input
              id="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jogador"
              className="mt-1 bg-card"
              maxLength={60}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Entre com o Google para salvar seu histórico e usar seu avatar.
            </p>
          </div>
        )}
        <Button variant="hero" size="xl" className="mt-8" onClick={begin} disabled={busy}>
          {busy && <Loader2 className="animate-spin" />} Começar ({rounds} rodadas ·{" "}
          {DIFFICULTY_LABELS[difficulty]})
        </Button>
      </main>
    );
  }

  const board = shown ?? state;
  const matchOver = state.status === "finished" && !!result;

  return (
    <main className="mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-6">
      <div className="lg:grid lg:grid-cols-[340px_1fr] lg:gap-6 lg:items-start">
        {/* Placar: acompanha a caixa de perguntas ao rolar a tela */}
        <div className="sticky top-2 sm:top-3 z-30 lg:top-4">
          <Scoreboard state={board} avatarUrl={profile?.avatar_url} />
        </div>

        {/* Caixa de perguntas e resultado da rodada */}
        <div className="mt-4 lg:mt-0 space-y-4">
          {question && (
            <section className="rounded-2xl border bg-card p-4 shadow-soft sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-forest text-white px-3 py-1 font-semibold">
                    {BOOK_LABEL[question.book]}
                  </span>
                  {question.difficulty && (
                    <span className="rounded-full border border-border bg-peach/40 px-2.5 py-0.5 font-semibold text-ink">
                      {QUESTION_DIFFICULTY_LABELS[question.difficulty] ?? question.difficulty}
                    </span>
                  )}
                </div>
                <span className="text-muted-foreground">Pergunta nº {question.code}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                {question.statement}
              </h2>
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
                          "flex w-full items-start gap-3 rounded-xl border-2 border-border bg-card p-3 text-left transition-colors",
                          !result && "hover:border-ink/40 hover:bg-peach",
                          result &&
                            isCorrect &&
                            "border-forest bg-forest/20 font-semibold text-ink",
                          result &&
                            isPicked &&
                            !isCorrect &&
                            "border-destructive bg-destructive/15",
                          result && !isCorrect && !isPicked && "opacity-60",
                        )}
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber text-ink font-bold shadow-xs">
                          {o.letter}
                        </span>
                        <span className="flex-1 pt-0.5">{o.text}</span>
                        {result && isCorrect && (
                          <Check className="mt-1 h-5 w-5 shrink-0 text-forest" />
                        )}
                        {result && isPicked && !isCorrect && (
                          <X className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {result && (
            <section className="rounded-2xl border-2 border-ink/15 bg-cream p-4 sm:p-6">
              <p className="text-lg font-bold">
                {result.playerCorrect
                  ? "Você acertou! +1 ponto para você."
                  : `Você errou. A resposta correta é a alternativa ${result.correctOption}. +1 ponto para o Codificador.`}
              </p>
              <div className="mt-4 rounded-xl bg-peach/60 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Explicação
                </p>
                <p className="mt-1">{result.explanation}</p>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  {question && BOOK_LABEL[question.book]} — {result.reference}
                </p>
              </div>

              {result.roundWinner && (
                <div className="mt-4 rounded-xl border-2 border-forest bg-forest/15 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-forest">
                    {result.roundWinner === "player" ? "Você venceu" : "O Codificador venceu"} a
                    rodada {result.finishedRound}!
                  </p>
                  {matchOver && (
                    <>
                      <p className="mt-2 font-display text-3xl font-bold">
                        {state.winner === "player"
                          ? "Vitória! Você venceu a partida."
                          : "O Codificador venceu a partida."}
                      </p>
                      <p className="mt-1">
                        Rodadas: você {state.playerRounds} × {state.codificadorRounds} Codificador
                        (Nível {DIFFICULTY_LABELS[state.difficulty ?? "normal"]})
                      </p>
                    </>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {matchOver ? (
                  <>
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => {
                        setState(null);
                        setQuestion(null);
                        setResult(null);
                      }}
                    >
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
                    {result.roundWinner
                      ? `Iniciar rodada ${state.currentRound}`
                      : "Próxima pergunta"}
                  </Button>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
