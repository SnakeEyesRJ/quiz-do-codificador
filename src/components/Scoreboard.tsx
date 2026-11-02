import { CodificadorPhoto, PlayerAvatar } from "./PlayerAvatar";
import { ROUND_TARGET } from "@/lib/game-rules";
import type { MatchState } from "@/lib/game.functions";

export function Scoreboard({ state, avatarUrl }: { state: MatchState; avatarUrl?: string | null | undefined }) {
  return (
    <div className="rounded-2xl border bg-card/80 p-3 shadow-soft sm:p-4">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Rodada {state.currentRound} · primeiro a {ROUND_TARGET} pontos
      </p>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
        <Side
          align="left"
          image={<PlayerAvatar url={avatarUrl} size={56} />}
          label="JOGADOR"
          name={state.playerName}
          score={state.playerScore}
          rounds={state.playerRounds}
        />
        <span className="font-display text-2xl text-muted-foreground">×</span>
        <Side
          align="right"
          image={<CodificadorPhoto size={60} />}
          label="CODIFICADOR"
          name="Codificador"
          score={state.codificadorScore}
          rounds={state.codificadorRounds}
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
}) {
  const right = props.align === "right";
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${right ? "flex-row-reverse text-right" : ""}`}>
      {props.image}
      <div className="min-w-0">
        <p className="text-[11px] font-bold tracking-[0.2em]">{props.label}</p>
        {props.label !== "CODIFICADOR" && <p className="truncate text-sm text-muted-foreground">{props.name}</p>}
        <p className="font-display text-4xl font-bold leading-none">{props.score}</p>
        <div className={`mt-1 flex gap-1 ${right ? "justify-end" : ""}`} aria-label={`${props.rounds} rodadas vencidas`}>
          {[0, 1].map((i) => (
            <span key={i} className={`h-2.5 w-2.5 rounded-full border border-ink/40 ${i < props.rounds ? "bg-ink" : "bg-transparent"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
