import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Trophy, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { PlayerAvatar } from "./PlayerAvatar";
import { RankingDialog } from "./RankingDialog";

export function SiteHeader() {
  const { user, profile, signInWithGoogle, signOut } = useAuth();
  const [rankingOpen, setRankingOpen] = useState(false);
  return (
    <header className="border-b border-border/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-4 sm:py-3.5">
        <Link
          to="/"
          className="font-display text-sm font-bold leading-tight tracking-wide sm:text-xl md:text-2xl truncate"
        >
          QUIZ DO CODIFICADOR
        </Link>
        <nav className="flex shrink-0 items-center gap-1 text-sm font-semibold sm:gap-2.5 sm:text-base md:text-lg">
          <button
            type="button"
            onClick={() => setRankingOpen(true)}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-peach sm:px-3"
          >
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Ranking</span>
          </button>
          <Link
            to="/jogar"
            search={{ rodadas: 3, dificuldade: "normal" }}
            className="rounded-lg px-2 py-1.5 hover:bg-peach sm:px-3"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            Jogar
          </Link>
          <RankingDialog open={rankingOpen} onOpenChange={setRankingOpen} />
          <Link
            to="/multiplayer"
            search={{}}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 font-semibold text-terracotta hover:bg-peach sm:px-3"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Multiplayer</span>
          </Link>
          {user ? (
            <>
              <Link
                to="/historico"
                className="rounded-lg px-2 py-1.5 hover:bg-peach sm:px-3"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                Histórico
              </Link>
              <Link
                to="/perfil"
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-peach sm:gap-2 sm:px-3"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                <PlayerAvatar url={profile?.avatar_url} size={26} className="sm:w-7 sm:h-7" />
                <span className="hidden md:inline">Perfil</span>
              </Link>
              <Button
                variant="ghost"
                size="default"
                className="h-9 px-3 text-sm font-semibold sm:h-10 sm:text-base"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              size="default"
              className="h-9 px-3.5 text-sm font-semibold sm:h-10 sm:px-4 sm:text-base"
              onClick={() =>
                signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
              }
            >
              <span className="sm:hidden">Entrar</span>
              <span className="hidden sm:inline">Entrar com Google</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
