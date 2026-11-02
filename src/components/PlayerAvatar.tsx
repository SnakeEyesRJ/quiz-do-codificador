import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import chico from "@/assets/chico.png.asset.json";

export function PlayerAvatar({ url, size = 56, className }: { url?: string | null; size?: number; className?: string }) {
  return (
    <div
      className={cn("shrink-0 overflow-hidden rounded-full border-2 border-ink/20 bg-peach grid place-items-center", className)}
      style={{ width: size, height: size }}
    >
      {url ? (
        <img src={url} alt="Avatar do jogador" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
      ) : (
        <UserRound className="text-ink/60" style={{ width: size * 0.55, height: size * 0.55 }} />
      )}
    </div>
  );
}

export function CodificadorPhoto({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <img
      src={chico.url}
      alt="Codificador"
      className={cn("shrink-0 rounded-xl border-2 border-ink/20 object-cover shadow-soft", className)}
      style={{ width: size, height: size * (224 / 235) }}
    />
  );
}
