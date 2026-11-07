import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Check,
  Clock,
  Copy,
  Loader2,
  LogOut,
  Share2,
  Swords,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlayerAvatar } from "@/components/PlayerAvatar";
import { VersusBoard, type VersusSide } from "@/components/VersusBoard";
import { useAuth } from "@/hooks/use-auth";
import {
  DIFFICULTY_DESCRIPTIONS,
  DIFFICULTY_LABELS,
  DIFFICULTY_LEVELS,
  type GameDifficulty,
} from "@/lib/game-rules";
import {
  mpAnswer,
  mpCreateRoom,
  mpJoinRoom,
  mpLeave,
  mpPlayers,
  mpState,
} from "@/lib/multiplayer.functions";
import {
  normalizeRoomCode,
  QUESTION_SECONDS,
  type Letter,
  type MpPlayers,
  type MpState,
} from "@/lib/multiplayer";
import { cn } from "@/lib/utils";

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

const DIFFICULTY_OPTIONS: { key: GameDifficulty; label: string; hint: string }[] = [
  { key: "facil", label: "Fácil", hint: "Iniciante" },
  { key: "normal", label: "Normal", hint: "Equilibrado" },
  { key: "dificil", label: "Difícil", hint: "Avançado" },
  { key: "expert", label: "Expert", hint: "Mestre" },
];

export const Route = createFileRoute("/multiplayer")({
  validateSearch: (search: Record<string, unknown>): { code?: string } => {
    const raw = search["code"];
    return typeof raw === "string" && raw ? { code: normalizeRoomCode(raw) } : {};
  },
  head: () => ({
    meta: [
      { title: "Multiplayer · QUIZ DO CODIFICADOR" },
      {
        name: "description",
        content:
          "Dispute partidas multiplayer online 1 contra 1 em tempo real com perguntas das obras fundamentais.",
      },
      { property: "og:title", content: "Multiplayer Online · QUIZ DO CODIFICADOR" },
      {
        property: "og:description",
        content: "Desafie amigos em tempo real no Quiz do Codificador.",
      },
    ],
  }),
  component: MultiplayerPage,
});

function MultiplayerPage() {
  const { code: searchCode } = Route.useSearch();
  const navigate = useNavigate({ from: "/multiplayer" });
  const { user, profile, loading: authLoading, signInWithGoogle } = useAuth();

  // Funções do servidor
  const createRoomFn = useServerFn(mpCreateRoom);
  const joinRoomFn = useServerFn(mpJoinRoom);
  const getStateFn = useServerFn(mpState);
  const submitAnswerFn = useServerFn(mpAnswer);
  const leaveRoomFn = useServerFn(mpLeave);
  const getPlayersFn = useServerFn(mpPlayers);

  // Estados locais da tela de lobby
  const [rounds, setRounds] = useState<3 | 5 | 7 | 9>(3);
  const [difficulty, setDifficulty] = useState<GameDifficulty>("normal");
  const [inputCode, setInputCode] = useState(searchCode ?? "");
  const [activeCode, setActiveCode] = useState<string | null>(searchCode ?? null);

  // Estado da sala em andamento
  const [roomState, setRoomState] = useState<MpState | null>(null);
  const [players, setPlayers] = useState<MpPlayers | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  // Se o código mudar na URL, sincroniza
  useEffect(() => {
    if (searchCode && searchCode !== activeCode) {
      setActiveCode(searchCode);
      setInputCode(searchCode);
    }
  }, [searchCode]);

  // Carrega avatares dos jogadores da sala
  useEffect(() => {
    if (!activeCode || !user) return;
    let isMounted = true;
    getPlayersFn({ data: { code: activeCode } })
      .then((p) => {
        if (isMounted) setPlayers(p);
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [activeCode, user, roomState?.guest]);

  // Polling em tempo real da sala ativa (a cada 1,2s)
  const isPollingRef = useRef(false);
  useEffect(() => {
    if (!activeCode || !user) return;

    let timer: NodeJS.Timeout;
    const poll = async () => {
      if (isPollingRef.current) return;
      isPollingRef.current = true;
      try {
        const s = await getStateFn({ data: { code: activeCode } });
        setRoomState(s);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (msg.includes("não encontrada") || msg.includes("não faz parte")) {
          toast.error("Você saiu ou a sala não está mais disponível.");
          setActiveCode(null);
          setRoomState(null);
          void navigate({ search: {} });
        }
      } finally {
        isPollingRef.current = false;
      }
    };

    void poll();
    timer = setInterval(poll, 1200);

    return () => clearInterval(timer);
  }, [activeCode, user]);

  // Ação: Criar sala
  const handleCreateRoom = async () => {
    if (!user) {
      toast.info("Entre com sua conta Google para criar uma sala.");
      return;
    }
    setBusy(true);
    try {
      const res = await createRoomFn({ data: { totalRounds: rounds, difficulty } });
      setActiveCode(res.code);
      setInputCode(res.code);
      await navigate({ search: { code: res.code } });
      toast.success(`Sala ${res.code} criada com sucesso!`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível criar a sala.");
    } finally {
      setBusy(false);
    }
  };

  // Ação: Entrar em sala
  const handleJoinRoom = async (codeToJoin?: string) => {
    if (!user) {
      toast.info("Entre com sua conta Google para entrar em uma sala.");
      return;
    }
    const clean = normalizeRoomCode(codeToJoin ?? inputCode);
    if (clean.length < 5) {
      toast.error("O código da sala deve ter 5 caracteres.");
      return;
    }
    setBusy(true);
    try {
      const res = await joinRoomFn({ data: { code: clean } });
      setActiveCode(res.code);
      setInputCode(res.code);
      await navigate({ search: { code: res.code } });
      toast.success("Você entrou na sala! A partida está pronta.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível entrar na sala.");
    } finally {
      setBusy(false);
    }
  };

  // Ação: Enviar resposta
  const handleAnswer = async (letter: Letter) => {
    if (!activeCode || !roomState?.question || roomState.myAnswered || busy) return;
    setBusy(true);
    try {
      const updated = await submitAnswerFn({
        data: {
          code: activeCode,
          answerId: roomState.question.answerId,
          option: letter,
        },
      });
      setRoomState(updated);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao enviar resposta.");
    } finally {
      setBusy(false);
    }
  };

  // Ação: Sair da sala
  const handleLeaveRoom = async () => {
    if (!activeCode) return;
    const confirmLeave =
      roomState?.phase === "playing"
        ? window.confirm(
            "Tem certeza de que deseja sair? Sair durante a partida concede vitória ao adversário.",
          )
        : true;
    if (!confirmLeave) return;

    try {
      await leaveRoomFn({ data: { code: activeCode } });
    } catch {}
    setActiveCode(null);
    setRoomState(null);
    setPlayers(null);
    void navigate({ search: {} });
    toast.info("Você saiu da sala.");
  };

  // Copiar código / link da sala
  const handleCopyLink = () => {
    if (!activeCode) return;
    const link = `${window.location.origin}/multiplayer?code=${activeCode}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Link de convite copiado para a área de transferência!");
      })
      .catch(() => {
        navigator.clipboard.writeText(activeCode);
        toast.success(`Código ${activeCode} copiado!`);
      });
  };

  // ---------------------------------------------------------------------------
  // 1. Tela de login necessário
  // ---------------------------------------------------------------------------
  if (!user && !authLoading) {
    return (
      <main className="mx-auto max-w-lg px-4 py-12 text-center sm:py-16">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-peach p-3 text-ink shadow-soft">
          <Users className="h-8 w-8" />
        </div>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
          Multiplayer Online
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          Dispute partidas 1 contra 1 em tempo real com amigos ou outros estudantes da Doutrina
          Espírita.
        </p>
        <div className="mt-8 rounded-2xl border-2 border-border bg-card p-5 shadow-soft sm:p-6">
          <p className="text-sm font-semibold text-ink">Login necessário</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Para sincronizar placares, avatar e garantir integridade na disputa, é preciso entrar
            com sua conta Google.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="mt-5 h-auto min-h-11 w-full whitespace-normal px-4 py-2.5 text-center text-xs sm:text-sm leading-snug"
            onClick={() =>
              signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
            }
          >
            Entrar com Google para jogar Multiplayer
          </Button>
        </div>
        <div className="mt-6">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-auto whitespace-normal px-3 py-2 text-center text-xs"
          >
            <Link to="/jogar" search={{ rodadas: 3, dificuldade: "normal" }}>
              <Swords className="mr-1.5 h-4 w-4 shrink-0" /> Jogar contra o Codificador (Solo)
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  // ---------------------------------------------------------------------------
  // 2. Tela de Lobby (Criar ou Entrar em sala)
  // ---------------------------------------------------------------------------
  if (!activeCode || !roomState) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-peach/60 px-3 py-1 text-[11px] sm:text-xs font-bold text-ink shadow-xs">
            <Users className="h-3.5 w-3.5 text-forest" />
            <span>MODO MULTIPLAYER ONLINE 1×1</span>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold text-ink sm:text-4xl">
            Desafie um Amigo
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Crie uma sala privada e compartilhe o código ou digite um código para entrar.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Coluna: Criar Sala */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-4 text-center shadow-soft sm:p-6">
            <div>
              <div className="flex flex-col items-center justify-center gap-2 border-b border-border/80 pb-3 sm:flex-row sm:gap-2.5">
                <div className="shrink-0 rounded-xl bg-peach p-2 text-ink">
                  <Swords className="h-5 w-5" />
                </div>
                <div className="min-w-0 text-center">
                  <h2 className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                    Criar Nova Sala
                  </h2>
                  <p className="text-[11px] text-muted-foreground">Você será o anfitrião da sala</p>
                </div>
              </div>

              {/* Formato de rodadas */}
              <div className="mt-4 text-center">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink/80">
                  Formato da disputa:
                </label>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {([3, 5, 7, 9] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRounds(r)}
                      className={cn(
                        "flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-xl border-2 py-2 px-1 transition-all",
                        rounds === r
                          ? "border-ink bg-peach font-bold shadow-soft"
                          : "border-border bg-card/60 hover:bg-peach/30 text-muted-foreground",
                      )}
                    >
                      <span className="text-base sm:text-lg font-bold leading-none">{r}</span>
                      <span className="mt-1 text-[7.5px] sm:text-[8.5px] font-semibold uppercase tracking-normal leading-tight text-center">
                        {`${Math.floor(r / 2) + 1} vitórias`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dificuldade */}
              <div className="mt-4 text-center">
                <label className="text-[11px] font-bold uppercase tracking-wider text-ink/80">
                  Nível de dificuldade:
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {DIFFICULTY_OPTIONS.map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setDifficulty(opt.key)}
                      className={cn(
                        "min-w-0 overflow-hidden rounded-xl border-2 px-2.5 py-2 text-center transition-all",
                        difficulty === opt.key
                          ? "border-ink bg-peach font-bold shadow-soft"
                          : "border-border bg-card/60 hover:bg-peach/30 text-muted-foreground",
                      )}
                    >
                      <p className="truncate text-xs font-bold text-ink">{opt.label}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{opt.hint}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="hero"
              size="default"
              className="mt-6 h-auto min-h-11 w-full overflow-hidden whitespace-normal px-3 py-2.5 text-center text-xs tracking-normal leading-snug"
              onClick={handleCreateRoom}
              disabled={busy}
            >
              {busy ? (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
              ) : (
                <Users className="h-4 w-4 shrink-0" />
              )}
              <span className="min-w-0">
                Criar Sala ({rounds} rodadas · {DIFFICULTY_LABELS[difficulty]})
              </span>
            </Button>
          </div>

          {/* Coluna: Entrar em Sala */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-4 text-center shadow-soft sm:p-6">
            <div>
              <div className="flex flex-col items-center justify-center gap-2 border-b border-border/80 pb-3 sm:flex-row sm:gap-2.5">
                <div className="shrink-0 rounded-xl bg-peach p-2 text-ink">
                  <Users className="h-5 w-5" />
                </div>
                <div className="min-w-0 text-center">
                  <h2 className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                    Entrar em uma Sala
                  </h2>
                  <p className="text-[11px] text-muted-foreground">
                    Digite o código de 5 letras do anfitrião
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <label
                  htmlFor="roomCodeInput"
                  className="block text-[11px] font-bold uppercase tracking-wider text-ink/80"
                >
                  Código da Sala
                </label>
                <Input
                  id="roomCodeInput"
                  value={inputCode}
                  onChange={(e) => setInputCode(normalizeRoomCode(e.target.value))}
                  placeholder="EX: ABCDE"
                  maxLength={5}
                  className="mt-2 h-13 bg-cream/50 text-center font-mono text-xl sm:text-2xl font-black uppercase tracking-widest"
                />
                <p className="mt-2 text-center text-[11px] text-muted-foreground">
                  O código da sala não diferencia maiúsculas de minúsculas.
                </p>
              </div>
            </div>

            <Button
              variant="secondary"
              size="default"
              className="mt-6 h-auto min-h-11 w-full overflow-hidden whitespace-normal px-3 py-2.5 text-center text-xs tracking-normal leading-snug"
              onClick={() => handleJoinRoom()}
              disabled={busy || normalizeRoomCode(inputCode).length < 5}
            >
              {busy ? (
                <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
              ) : (
                <Swords className="h-4 w-4 shrink-0" />
              )}
              <span className="min-w-0">Entrar na Partida</span>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------------------------------------------------------
  // 3. Sala em Fase de Espera (Aguardando Adversário)
  // ---------------------------------------------------------------------------
  if (roomState.phase === "waiting") {
    return (
      <main className="mx-auto max-w-lg px-4 py-8 text-center sm:py-12">
        <div className="rounded-2xl border-2 border-border bg-card p-5 shadow-soft sm:p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-peach p-3 text-ink shadow-xs">
            <Clock className="h-7 w-7 animate-pulse text-terracotta" />
          </div>

          <h1 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
            Aguardando Adversário...
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            Compartilhe o código da sala com quem você deseja desafiar.
          </p>

          {/* Caixa do Código de Sala */}
          <div className="mt-6 rounded-2xl border-2 border-dashed border-ink/40 bg-cream/70 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Código da Sala
            </p>
            <p className="mt-1 font-mono text-3xl sm:text-4xl font-black tracking-widest text-ink">
              {roomState.code}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                size="sm"
                className="h-auto min-h-9 w-full whitespace-normal bg-card px-2.5 py-2 text-xs leading-tight"
                onClick={handleCopyLink}
              >
                {copied ? (
                  <Check className="mr-1.5 h-3.5 w-3.5 shrink-0 text-forest" />
                ) : (
                  <Copy className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                )}
                <span>{copied ? "Link Copiado!" : "Copiar Link de Convite"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-auto min-h-9 w-full whitespace-normal bg-card px-2.5 py-2 text-xs leading-tight"
                onClick={() => {
                  navigator.clipboard.writeText(roomState.code);
                  toast.success(`Código ${roomState.code} copiado!`);
                }}
              >
                <Share2 className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                <span>Copiar Código</span>
              </Button>
            </div>
          </div>

          {/* Detalhes da Partida */}
          <div className="mt-6 border-t border-border/80 pt-4 text-xs text-muted-foreground">
            <p>
              Disputa em <strong>{roomState.totalRounds} rodadas</strong> · Dificuldade{" "}
              <strong>{DIFFICULTY_LABELS[roomState.difficulty]}</strong>
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <PlayerAvatar url={profile?.avatar_url} size={40} />
              <div className="min-w-0 text-left">
                <p className="truncate text-xs font-bold text-ink">
                  {roomState.host.name} (Anfitrião)
                </p>
                <p className="text-[10px] text-forest font-semibold">● Conectado e pronto</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/80 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLeaveRoom}
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="mr-1.5 h-4 w-4" /> Cancelar e Sair da Sala
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------------------------------------------------------
  // 4. Configuração dos Lados do Placar (Você x Adversário)
  // ---------------------------------------------------------------------------
  const isHost = roomState.role === "host";
  const myName = isHost ? roomState.host.name : (roomState.guest?.name ?? "Você");
  const opponentName = isHost ? (roomState.guest?.name ?? "Adversário") : roomState.host.name;
  const myAvatar = isHost ? players?.host.avatarUrl : players?.guest?.avatarUrl;
  const opponentAvatar = isHost ? players?.guest?.avatarUrl : players?.host.avatarUrl;

  const meSide: VersusSide = {
    label: "VOCÊ",
    name: myName,
    avatarUrl: myAvatar ?? profile?.avatar_url,
    score: isHost ? roomState.hostScore : roomState.guestScore,
    rounds: isHost ? roomState.hostRounds : roomState.guestRounds,
  };

  const oppSide: VersusSide = {
    label: "ADVERSÁRIO",
    name: opponentName,
    avatarUrl: opponentAvatar,
    score: isHost ? roomState.guestScore : roomState.hostScore,
    rounds: isHost ? roomState.guestRounds : roomState.hostRounds,
  };

  const hasWon = roomState.winner === roomState.role;
  const isFinished = roomState.phase === "finished";

  // ---------------------------------------------------------------------------
  // 5. Partida Concluída (Tela de Resultado Final)
  // ---------------------------------------------------------------------------
  if (isFinished) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-soft text-center sm:p-8">
          <div
            className={cn(
              "mx-auto grid h-20 w-20 place-items-center rounded-3xl p-4 shadow-soft",
              hasWon ? "bg-forest/20 text-forest" : "bg-destructive/15 text-destructive",
            )}
          >
            {hasWon ? <Trophy className="h-12 w-12" /> : <Swords className="h-12 w-12" />}
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl text-ink">
            {hasWon ? "Parabéns! Você Venceu a Partida!" : "Fim de Jogo! Vitória do Adversário."}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {hasWon
              ? "Excelente desempenho e domínio dos ensinamentos espíritas!"
              : "Continue estudando e praticando as obras fundamentais para a próxima disputa!"}
          </p>

          {/* Placar Final */}
          <div className="mt-6 rounded-2xl border-2 border-border bg-cream/70 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Placar Final de Rodadas
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 sm:gap-6">
              <div className="min-w-0 flex-1 text-center">
                <PlayerAvatar url={meSide.avatarUrl} size={50} className="mx-auto" />
                <p className="mt-1 truncate px-1 text-xs font-bold text-ink">{meSide.name}</p>
                <p className="font-display text-3xl font-extrabold text-ink">{meSide.rounds}</p>
              </div>
              <span className="shrink-0 font-display text-2xl font-bold text-muted-foreground">×</span>
              <div className="min-w-0 flex-1 text-center">
                <PlayerAvatar url={oppSide.avatarUrl} size={50} className="mx-auto" />
                <p className="mt-1 truncate px-1 text-xs font-bold text-ink">{oppSide.name}</p>
                <p className="font-display text-3xl font-extrabold text-ink">{oppSide.rounds}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Dificuldade {DIFFICULTY_LABELS[roomState.difficulty]} · Disputa de{" "}
              {roomState.totalRounds} rodadas
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
              variant="hero"
              size="lg"
              className="h-auto min-h-11 w-full whitespace-normal px-4 py-2.5 text-center text-xs sm:text-sm"
              onClick={() => {
                setActiveCode(null);
                setRoomState(null);
                void navigate({ search: {} });
              }}
            >
              <Users className="mr-1.5 h-4 w-4 shrink-0" />
              <span>Nova Partida Multiplayer</span>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-auto min-h-11 w-full whitespace-normal px-4 py-2.5 text-center text-xs sm:text-sm"
            >
              <Link to="/historico">Ver Histórico</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------------------------------------------------------
  // 6. Partida em Andamento (Perguntas, Respostas e Gabarito em Tempo Real)
  // ---------------------------------------------------------------------------
  const question = roomState.question;
  const reveal = roomState.reveal;
  const secondsLeft = roomState.secondsLeft ?? QUESTION_SECONDS;
  const timerPercent = Math.max(0, Math.min(100, (secondsLeft / QUESTION_SECONDS) * 100));

  return (
    <main className="mx-auto max-w-3xl px-3 py-2 sm:px-4 sm:py-4">
      {/* Bloco integrado: Placar Multiplayer + Caixa de perguntas */}
      <div className="sticky top-2 z-20 flex max-h-[calc(100dvh-6.5rem)] w-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg sm:max-h-[calc(100dvh-5rem)]">
        {/* Placar no topo da caixa */}
        <div className="shrink-0 border-b-2 border-border bg-card/95 backdrop-blur-md">
          <VersusBoard
            me={meSide}
            opponent={oppSide}
            round={roomState.currentRound}
            totalRounds={roomState.totalRounds}
            difficultyLabel={DIFFICULTY_LABELS[roomState.difficulty]}
            className="w-full border-0 rounded-none shadow-none"
          />
        </div>

        {/* Caixa de Perguntas e Respostas */}
        <div className="min-h-0 w-full flex-1 overflow-y-auto bg-card p-3 pb-6 sm:p-5 sm:pb-5 scroll-smooth">
          {/* Barra de Tempo da Pergunta */}
          {question && (
            <div className="mb-3">
              <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground mb-1">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  Tempo restante:
                </span>
                <span className={cn("font-mono font-bold", secondsLeft <= 5 && "text-destructive")}>
                  {secondsLeft}s
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className={cn(
                    "h-full transition-all duration-300",
                    secondsLeft > 10
                      ? "bg-forest"
                      : secondsLeft > 5
                        ? "bg-amber"
                        : "bg-destructive",
                  )}
                  style={{ width: `${timerPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* 6.1 Pergunta ativa */}
          {question && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-forest text-white px-2.5 py-0.5 text-xs font-semibold">
                    {BOOK_LABEL[question.book] ?? question.book}
                  </span>
                  {question.difficulty && (
                    <span className="rounded-full border border-border bg-peach/40 px-2 py-0.5 text-xs font-semibold text-ink">
                      {DIFFICULTY_LABELS[roomState.difficulty]}
                    </span>
                  )}
                </div>
                <span className="font-medium text-muted-foreground">Nº {question.code}</span>
              </div>

              <h2 className="mt-2 font-display text-base font-bold leading-snug text-ink sm:text-lg">
                {question.statement}
              </h2>

              <ul className="mt-3 space-y-1.5">
                {question.options.map((o) => {
                  const isPicked = roomState.myOption === o.letter;
                  return (
                    <li key={o.letter}>
                      <button
                        type="button"
                        disabled={roomState.myAnswered || busy}
                        onClick={() => handleAnswer(o.letter)}
                        className={cn(
                          "flex w-full items-start gap-2.5 rounded-xl border-2 border-border bg-card px-3 py-2 text-left text-sm transition-all",
                          !roomState.myAnswered &&
                            "hover:border-ink/40 hover:bg-peach cursor-pointer",
                          isPicked && "border-ink bg-peach font-bold shadow-soft scale-[1.01]",
                          roomState.myAnswered && !isPicked && "opacity-60 cursor-not-allowed",
                        )}
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber text-xs text-ink font-bold shadow-xs">
                          {o.letter}
                        </span>
                        <span className="flex-1">{o.text}</span>
                        {isPicked && <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Status de envio de cada jogador */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/80 pt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "inline-block h-2.5 w-2.5 rounded-full",
                      roomState.myAnswered ? "bg-forest" : "bg-amber animate-pulse",
                    )}
                  />
                  <span className="text-muted-foreground">
                    Você:{" "}
                    <strong className="text-ink">
                      {roomState.myAnswered ? "Respondido" : "Pensando..."}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "inline-block h-2.5 w-2.5 rounded-full",
                      roomState.opponentAnswered ? "bg-forest" : "bg-muted-foreground/40",
                    )}
                  />
                  <span className="text-muted-foreground">
                    {oppSide.name}:{" "}
                    <strong className="text-ink">
                      {roomState.opponentAnswered ? "Respondido" : "Pensando..."}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 6.2 Gabarito e Revelação da Pergunta Anterior */}
          {reveal && !question && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/80 pb-2">
                <span className="font-display text-sm font-bold text-ink">
                  Resultado da Pergunta nº {reveal.question.code}
                </span>
                {reveal.nextInSeconds !== null && (
                  <span className="text-xs font-semibold text-terracotta">
                    Próxima pergunta em {reveal.nextInSeconds}s...
                  </span>
                )}
              </div>

              {/* Comparativo de Respostas */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div
                  className={cn(
                    "rounded-xl border p-2.5",
                    (isHost ? reveal.hostCorrect : reveal.guestCorrect)
                      ? "border-forest bg-forest/15"
                      : "border-destructive bg-destructive/15",
                  )}
                >
                  <p className="font-bold text-ink">Você</p>
                  <p className="mt-0.5 text-xs font-semibold">
                    {(isHost ? reveal.hostCorrect : reveal.guestCorrect)
                      ? "Acertou! (+1 pt)"
                      : "Errou (0 pt)"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Sua opção: {isHost ? (reveal.hostOption ?? "—") : (reveal.guestOption ?? "—")}
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-xl border p-2.5",
                    (isHost ? reveal.guestCorrect : reveal.hostCorrect)
                      ? "border-forest bg-forest/15"
                      : "border-destructive bg-destructive/15",
                  )}
                >
                  <p className="truncate font-bold text-ink">{oppSide.name}</p>
                  <p className="mt-0.5 text-xs font-semibold">
                    {(isHost ? reveal.guestCorrect : reveal.hostCorrect)
                      ? "Acertou! (+1 pt)"
                      : "Errou (0 pt)"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Opção: {isHost ? (reveal.guestOption ?? "—") : (reveal.hostOption ?? "—")}
                  </p>
                </div>
              </div>

              {/* Explicação da Obra */}
              <div className="rounded-xl bg-peach/40 p-3 text-xs">
                <p className="font-bold text-ink">Alternativa Correta: {reveal.correctOption}</p>
                <p className="mt-1 leading-relaxed text-ink/90">{reveal.explanation}</p>
                <p className="mt-1.5 text-[11px] italic text-muted-foreground">
                  {BOOK_LABEL[reveal.question.book]} — {reveal.reference}
                </p>
              </div>

              {/* Notificação de Vitória de Rodada */}
              {reveal.roundWinner && (
                <div className="rounded-xl border-2 border-forest bg-forest/20 p-2.5 text-center">
                  <p className="font-display text-sm font-bold text-forest">
                    {reveal.roundWinner === roomState.role
                      ? `Você venceu a rodada ${reveal.roundNumber}!`
                      : `${oppSide.name} venceu a rodada ${reveal.roundNumber}!`}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rodapé da Caixa: Opção de Sair */}
        <div className="flex items-center justify-between border-t border-border/80 bg-card px-3 py-1.5 text-[11px] text-muted-foreground">
          <span>Sala: {roomState.code}</span>
          <button
            type="button"
            onClick={handleLeaveRoom}
            className="text-destructive hover:underline"
          >
            Sair da partida
          </button>
        </div>
      </div>
    </main>
  );
}
