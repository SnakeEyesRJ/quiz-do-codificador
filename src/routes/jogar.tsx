import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Check, Loader2, Users, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scoreboard } from "@/components/Scoreboard";
import { StudyRecap, type StudyRecapItem } from "@/components/StudyRecap";
import {
  AvatarPicker1x1,
  CodificadorPhoto,
  getStoredCustomAvatar,
} from "@/components/PlayerAvatar";
import { MultiplayerInstructionsDialog } from "@/components/MultiplayerInstructionsDialog";
import { useAuth } from "@/hooks/use-auth";
import {
  DIFFICULTY_DESCRIPTIONS,
  DIFFICULTY_LABELS,
  DIFFICULTY_LEVELS,
  type GameDifficulty,
  BOOK_OPTIONS,
  isQuestionPoolMessage,
  type BookSelection,
} from "@/lib/game-rules";
import {
  nextQuestion,
  resumeMatch,
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
  validateSearch: (
    search: Record<string, unknown>,
  ): { rodadas?: 3 | 5 | 7 | 9; dificuldade?: GameDifficulty; livro?: BookSelection } => {
    const r = Number(search["rodadas"]);
    const d = String(search["dificuldade"] || search["difficulty"] || "normal").toLowerCase();
    const validD: GameDifficulty = (DIFFICULTY_LEVELS as readonly string[]).includes(d)
      ? (d as GameDifficulty)
      : "normal";
    const b = String(search["livro"] || "todos");
    const validBook = BOOK_OPTIONS.some(
      (option) => option.value === b && !option.disabled,
    )
      ? (b as BookSelection)
      : "todos";
    return {
      rodadas: [3, 5, 7, 9].includes(r) ? (r as 3 | 5 | 7 | 9) : 3,
      dificuldade: validD,
      livro: validBook,
    };
  },
  head: () => ({
    meta: [
      { title: "QUIZ DO CODIFICADOR" },
      {
        name: "description",
        content:
          "Partida contra o Codificador: dispute em 3, 5, 7 ou 9 rodadas em 4 níveis de dificuldade.",
      },
      { property: "og:title", content: "QUIZ DO CODIFICADOR" },
      {
        property: "og:description",
        content: "Responda e dispute rodadas de 10 pontos contra o Codificador.",
      },
    ],
  }),
  component: Play,
});

/** Guarda a partida solo em andamento para retomá-la após recarregar a página. */
const ACTIVE_MATCH_KEY = "quiz-codificador:active-match";

const BOOK_LABEL: Record<string, string> = {
  livro_espiritos: "O Livro dos Espíritos",
  evangelho: "O Evangelho Segundo o Espiritismo",
  ceu_inferno: "O Céu e o Inferno",
  genese: "A Gênese",
  livro_mediuns: "O Livro dos Médiuns",
  obras_postumas: "Obras Póstumas",
  o_que_e_espiritismo: "O Que é o Espiritismo",
  nosso_lar: "Nosso Lar",
  os_mensageiros: "Os Mensageiros",
};

function Play() {
  const { rodadas, dificuldade, livro } = Route.useSearch();
  const { user, profile, loading } = useAuth();
  const start = useServerFn(startMatch);
  const fetchNext = useServerFn(nextQuestion);
  const resume = useServerFn(resumeMatch);
  const answer = useServerFn(submitAnswer);

  const [name, setName] = useState("");
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [rounds, setRounds] = useState<3 | 5 | 7 | 9>(rodadas ?? 3);
  const [difficulty, setDifficulty] = useState<GameDifficulty>(dificuldade ?? "normal");
  const [book, setBook] = useState<BookSelection>(livro ?? "todos");
  const [state, setState] = useState<MatchState | null>(null);
  const [question, setQuestion] = useState<PublicQuestion | null>(null);
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [busy, setBusy] = useState(false);
  // Score shown while reviewing a round-ending answer (before the next round resets it)
  const [shown, setShown] = useState<MatchState | null>(null);
  // Answers the player missed in this match, collected locally for the optional post-game recap
  const [missed, setMissed] = useState<StudyRecapItem[]>([]);

  useEffect(() => {
    setCustomAvatar(getStoredCustomAvatar());
  }, []);

  // Retoma a partida em andamento após recarregar a página. O histórico de perguntas
  // usadas pertence à partida e está gravado no banco, então continua o mesmo.
  useEffect(() => {
    if (loading || state) return;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(ACTIVE_MATCH_KEY);
    } catch {
      return;
    }
    if (!stored) return;
    const matchId = stored;
    let cancelled = false;
    (async () => {
      try {
        const resumed = await resume({ data: { matchId } });
        const pending = await fetchNext({ data: { matchId: resumed.matchId } });
        if (cancelled) return;
        setState(resumed);
        setQuestion(pending);
        setResult(null);
        setShown(null);
      } catch (e) {
        if (e instanceof Error && isQuestionPoolMessage(e.message)) toast.error(e.message);
        try {
          window.localStorage.removeItem(ACTIVE_MATCH_KEY);
        } catch {
          /* armazenamento indisponível */
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [loading]);

  // Partida encerrada: não há mais o que retomar.
  useEffect(() => {
    if (state?.status !== "finished") return;
    try {
      window.localStorage.removeItem(ACTIVE_MATCH_KEY);
    } catch {
      /* armazenamento indisponível */
    }
  }, [state?.status]);

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
          playerName: (user ? profile?.display_name : name) || name || undefined,
          totalRounds: rounds,
          difficulty: difficulty,
          book,
        },
      });
      setState(s);
      try {
        window.localStorage.setItem(ACTIVE_MATCH_KEY, s.matchId);
      } catch {
        /* armazenamento indisponível */
      }
      setShown(null);
      setResult(null);
      setMissed([]);
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
      if (!r.playerCorrect) {
        setMissed((prev) => [
          ...prev,
          {
            bookLabel: BOOK_LABEL[question.book] ?? question.book,
            statement: question.statement,
            options: question.options,
            playerOption: r.playerOption,
            correctOption: r.correctOption,
            explanation: r.explanation,
            reference: r.reference,
          },
        ]);
      }
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
        <div className="mt-6 text-center">
          <label className="text-base font-bold text-ink sm:text-lg">
            Escolha o formato da partida:
          </label>
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
                <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-tight sm:text-[10px] sm:tracking-wider">
                  {`${Math.floor(r / 2) + 1} vitórias`}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-sm font-bold text-ink/85 sm:text-base">
            Disputa melhor de {rounds}: o primeiro a vencer {Math.floor(rounds / 2) + 1} rodadas
            ganha a partida.
          </p>
        </div>

        {/* Seletor de livro */}
        <div className="mt-6 text-left">
          <label htmlFor="livro-partida" className="text-base font-bold text-ink sm:text-lg">
            Escolha o livro:
          </label>
          <select
            id="livro-partida"
            value={book}
            onChange={(event) => setBook(event.target.value as BookSelection)}
            className="mt-2 h-11 w-full rounded-xl border-2 border-border bg-card px-3 text-sm font-semibold text-ink shadow-sm outline-none focus:border-ink"
          >
            {BOOK_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted-foreground">
            {book === "todos" ? "As perguntas poderão vir de qualquer obra disponível." : "A partida usará exclusivamente perguntas desta obra."}
          </p>
        </div>

        {/* Nível de dificuldade */}
        <div className="mt-6 text-center">
          <label className="text-base font-bold text-ink sm:text-lg">
            Escolha o nível de dificuldade:
          </label>
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
          <p className="mt-1.5 text-sm font-bold text-ink/85 sm:text-base">
            {DIFFICULTY_DESCRIPTIONS[difficulty]}
          </p>
        </div>

        {loading ? null : (
          <div className="mt-6 flex flex-col items-center gap-4 text-center">
            <AvatarPicker1x1
              avatarUrl={(user ? profile?.avatar_url : null) ?? customAvatar ?? profile?.avatar_url}
              onChange={setCustomAvatar}
              size={104}
            />

            {user ? (
              <span className="font-semibold text-ink">{profile?.display_name ?? "Jogador"}</span>
            ) : (
              <div className="w-full text-center">
                <label className="text-sm font-medium" htmlFor="nome">
                  Seu nome (opcional)
                </label>
                <Input
                  id="nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jogador"
                  className="mt-1 bg-card text-center"
                  maxLength={60}
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Entre com o Google para salvar seu histórico de partidas.
                </p>
              </div>
            )}
          </div>
        )}
        <Button
          variant="hero"
          size="xl"
          className="mt-8 h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center sm:px-10"
          onClick={begin}
          disabled={busy}
        >
          {busy && <Loader2 className="animate-spin" />} Começar ({rounds} rodadas ·{" "}
          {DIFFICULTY_LABELS[difficulty]})
        </Button>

        <div className="mt-4 flex flex-col items-center">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-auto whitespace-normal rounded-xl border-border/80 px-3 py-2 text-center text-xs font-semibold text-black hover:bg-peach/40 hover:text-black"
          >
            <Link to="/multiplayer" search={{}}>
              <Users className="mr-1.5 h-3.5 w-3.5" /> Desafiar amigo no Modo Multiplayer 1×1
            </Link>
          </Button>
          <MultiplayerInstructionsDialog />
        </div>
      </main>
    );
  }

  const board = shown ?? state;
  const matchOver = state.status === "finished" && !!result;

  return (
    <main className="mx-auto max-w-3xl px-3 py-2 sm:px-4 sm:py-3">
      {/* Bloco integrado: Placar + Caixa de perguntas fixos e imóveis na tela ao rolar */}
      <div className="sticky top-2 z-20 flex max-h-[calc(100dvh-1rem)] w-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg sm:max-h-[calc(100dvh-5rem)]">
        {/* Placar no topo da caixa */}
        <div className="shrink-0 border-b-2 border-border bg-card/95 backdrop-blur-md">
          <Scoreboard
            state={board}
            avatarUrl={(user ? profile?.avatar_url : null) ?? customAvatar ?? profile?.avatar_url}
            playerName={profile?.display_name || state?.playerName}
            className="w-full border-0 rounded-none shadow-none"
          />
        </div>

        {/* Caixa de perguntas: parada e imóvel ao rolar a tela, perfeitamente alinhada com o placar */}
        {question && (
          <section className="min-h-0 w-full flex-1 overflow-y-auto overscroll-contain bg-card p-2.5 sm:p-3">
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-forest px-2.5 py-0.5 font-semibold text-white">
                  {BOOK_LABEL[question.book]}
                </span>
                {question.difficulty && (
                  <span className="rounded-full border border-border bg-peach/40 px-2 py-0.5 font-semibold text-ink">
                    {DIFFICULTY_LABELS[state.difficulty]}
                  </span>
                )}
              </div>
              <span className="font-medium text-muted-foreground">Pergunta nº {question.code}</span>
            </div>
            <h2 className="mt-1.5 font-display text-sm font-bold leading-snug text-ink sm:text-base">
              {question.statement}
            </h2>
            <ul className="mt-2 space-y-1">
              {question.options.map((o) => {
                const isCorrect = result?.correctOption === o.letter;
                const isPicked = result?.playerOption === o.letter;
                return (
                  <li key={o.letter}>
                    <button
                      disabled={!!result || busy}
                      onClick={() => choose(o.letter)}
                      className={cn(
                        "flex w-full items-start gap-2 rounded-lg border-2 border-border bg-card px-2.5 py-1.5 text-left text-xs leading-snug transition-colors sm:px-3 sm:py-2 sm:text-sm",
                        !result && "hover:border-ink/40 hover:bg-peach",
                        result && isCorrect && "border-forest bg-forest/20 font-semibold text-ink",
                        result && isPicked && !isCorrect && "border-destructive bg-destructive/15",
                        result && !isCorrect && !isPicked && "opacity-60",
                      )}
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber text-[10px] font-bold text-ink shadow-xs sm:h-6 sm:w-6 sm:text-xs">
                        {o.letter}
                      </span>
                      <span className="flex-1">{o.text}</span>
                      {result && isCorrect && (
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest sm:h-4 sm:w-4" />
                      )}
                      {result && isPicked && !isCorrect && (
                        <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive sm:h-4 sm:w-4" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            {result && (
              <div className="mt-2.5 border-t border-border/80 pt-2.5 sm:mt-3 sm:pt-3">
                <p className="text-sm font-bold leading-snug sm:text-base">
                  {result.playerCorrect
                    ? "Você acertou! +1 ponto para você."
                    : `Você errou. A resposta correta é a alternativa ${result.correctOption}. +1 ponto para o Codificador.`}
                </p>
                <div className="mt-2 rounded-lg bg-peach/60 p-2.5 sm:p-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Explicação
                  </p>
                  <p className="mt-1 text-xs leading-relaxed sm:text-sm">{result.explanation}</p>
                  <p className="mt-1.5 text-[11px] italic leading-snug text-muted-foreground sm:text-sm">
                    {question && BOOK_LABEL[question.book]} — {result.reference}
                  </p>
                </div>

                {result.roundWinner && (
                  <div className="mt-2 rounded-lg border-2 border-forest bg-forest/15 p-2.5 text-center sm:mt-3 sm:p-3">
                    <p className="font-display text-lg font-bold text-forest sm:text-xl">
                      {result.roundWinner === "player" ? "Você venceu" : "O Codificador venceu"} a rodada{" "}
                      {result.finishedRound}!
                    </p>
                    {matchOver && (
                      <>
                        <p className="mt-1 font-display text-xl font-bold sm:text-2xl">
                          {state.winner === "player"
                            ? "Vitória! Você venceu a partida."
                            : "O Codificador venceu a partida."}
                        </p>
                        <p className="mt-1 text-xs sm:text-sm">
                          Rodadas: você {state.playerRounds} × {state.codificadorRounds} Codificador
                          (Nível {DIFFICULTY_LABELS[state.difficulty ?? "normal"]})
                        </p>
                      </>
                    )}
                  </div>
                )}

                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-3">
                  {matchOver ? (
                    <>
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={() => {
                          setState(null);
                          setQuestion(null);
                          setResult(null);
                          setMissed([]);
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
                      {result.roundWinner ? `Iniciar rodada ${state.currentRound}` : "Próxima pergunta"}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Recap de estudo opcional (somente após o fim da partida; sem IA durante o jogo) */}
      {matchOver && state && user && <StudyRecap matchId={state.matchId} answers={missed} />}
    </main>
  );
}
