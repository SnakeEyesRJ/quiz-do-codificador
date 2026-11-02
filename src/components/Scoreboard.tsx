import { CodificadorPhoto, PlayerAvatar } from "./PlayerAvatar";
import { DIFFICULTY_LABELS, getRoundsToWin, ROUND_TARGET } from "@/lib/game-rules";
import type { MatchState } from "@/lib/game.functions";
import { cn } from "@/lib/utils";

export function Scoreboard({
  state,
  avatarUrl,
  playerName,
  className,
}: {
  state: MatchState;
  avatarUrl?: string | null | undefined;
  playerName?: string | null | undefined;
  className?: string;
}) {
  const totalRounds = state.totalRounds || 3;
  const roundsToWin = getRoundsToWin(totalRounds);
  const difficultyLabel = DIFFICULTY_LABELS[state.difficulty ?? "normal"] ?? "Normal";
  const effectivePlayerName = playerName?.trim() || state.playerName || "Jogador";

  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-border bg-card p-3 shadow-md sm:p-4 backdrop-blur-sm transition-shadow",
        className,
      )}
    >
      <p className="mb-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground">
        Rodada {state.currentRound} · Melhor de {totalRounds} ({roundsToWin} vitórias) · Nível:{" "}
        <span className="text-ink font-bold">{difficultyLabel}</span> · 1º a {ROUND_TARGET} pts
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <Side
          align="left"
          image={<PlayerAvatar url={avatarUrl} size={54} className="sm:w-[62px] sm:h-[62px]" />}
          label="JOGADOR"
          name={effectivePlayerName}
          score={state.playerScore}
          rounds={state.playerRounds}
          roundsToWin={roundsToWin}
        />
        <div className="flex flex-col items-center justify-center">
          <span className="font-display text-2xl sm:text-3xl text-muted-foreground font-bold">
            ×
          </span>
        </div>
        <Side
          align="right"
          image={<CodificadorPhoto size={58} className="sm:w-[66px] sm:h-[66px]" />}
          label="CODIFICADOR"
          name="Codificador"
          score={state.codificadorScore}
          rounds={state.codificadorRounds}
          roundsToWin={roundsToWin}
        />
      </div>
    </div>
  );
}

function Side(props: {
  align: "left" | "right";
  image: React.ReactNode;
  label: string;
  name: string;
  score: number;
  rounds: number;
  roundsToWin: number;
}) {
  const right = props.align === "right";
  return (
    <div
      className={`flex items-center gap-2.5 sm:gap-3.5 ${right ? "flex-row-reverse text-right" : ""}`}
    >
      {props.image}
      <div className="min-w-0 flex-1">
        <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-ink/75">
          {props.label}
        </p>

        {/* Nome do jogador/codificador aumentado para o dobro e em negrito */}
        <p className="truncate text-lg sm:text-2xl font-extrabold tracking-tight text-ink leading-tight">
          {props.name}
        </p>

        {/* Pontuação da rodada atual */}
        <p className="font-display text-2xl sm:text-4xl font-extrabold leading-none text-ink mt-0.5">
          {props.score}{" "}
          <span className="text-xs sm:text-sm font-semibold text-muted-foreground">pts</span>
        </p>

        {/* Número de rodadas ganhas em negrito */}
        <div className={`mt-1.5 flex flex-wrap items-center gap-1.5 ${right ? "justify-end" : ""}`}>
          <span className="font-bold text-xs sm:text-sm text-ink">
            <strong>{props.rounds}</strong> {props.rounds === 1 ? "rodada ganha" : "rodadas ganhas"}
          </span>
          <div
            className="flex gap-1"
            aria-label={`${props.rounds} de ${props.roundsToWin} rodadas ganhas`}
          >
            {Array.from({ length: props.roundsToWin }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full border border-ink/50 transition-colors ${
                  i < props.rounds ? "bg-ink" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
