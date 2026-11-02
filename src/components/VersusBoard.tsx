import { PlayerAvatar } from "./PlayerAvatar";
import { Side } from "./Scoreboard";
import { ROUND_TARGET, getRoundsToWin } from "@/lib/game-rules";
import { cn } from "@/lib/utils";

export interface VersusSide {
  label: string;
  name: string;
  avatarUrl?: string | null | undefined;
  score: number;
  rounds: number;
}

/** Placar do modo multiplayer: você à esquerda, o adversário à direita. */
export function VersusBoard({
  me,
  opponent,
  round,
  totalRounds,
  difficultyLabel,
  className,
}: {
  me: VersusSide;
  opponent: VersusSide;
  round: number;
  totalRounds: number;
  difficultyLabel: string;
  className?: string;
}) {
  const roundsToWin = getRoundsToWin(totalRounds);
  return (
    <div className={cn("bg-card p-2 sm:p-3", className)}>
      <p className="mb-1.5 text-center text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground">
        Rodada {round} · Melhor de {totalRounds} ({roundsToWin} vitórias) · Nível:{" "}
        <span className="text-ink font-bold">{difficultyLabel}</span> · 1º a {ROUND_TARGET} pts
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <Side
          align="left"
          image={<PlayerAvatar url={me.avatarUrl} size={44} className="sm:w-[50px] sm:h-[50px]" />}
          label={me.label}
          name={me.name}
          score={me.score}
          rounds={me.rounds}
          roundsToWin={roundsToWin}
        />
        <span className="font-display text-xl sm:text-2xl text-muted-foreground font-bold">×</span>
        <Side
          align="right"
          image={
            <PlayerAvatar url={opponent.avatarUrl} size={44} className="sm:w-[50px] sm:h-[50px]" />
          }
          label={opponent.label}
          name={opponent.name}
          score={opponent.score}
          rounds={opponent.rounds}
          roundsToWin={roundsToWin}
        />
      </div>
    </div>
  );
}
