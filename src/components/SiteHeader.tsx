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
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1.5 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3 lg:flex-row lg:justify-between lg:gap-4 lg:py-3.5">
        <Link
          to="/"
          className="w-full truncate text-center font-display text-sm font-bold leading-tight tracking-wide sm:text-xl md:text-2xl lg:w-auto lg:text-left"
        >
          QUIZ DO CODIFICADOR
        </Link>
        <nav className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-xs font-semibold sm:gap-x-2 sm:gap-y-1.5 sm:text-sm md:gap-x-2.5 md:text-base lg:w-auto lg:flex-nowrap lg:text-lg">
          <button
            type="button"
            onClick={() => setRankingOpen(true)}
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 hover:bg-peach sm:gap-1.5 sm:px-2.5 lg:px-3 lg:py-1.5"
          >
            <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Ranking</span>
          </button>
          <Link
            to="/jogar"
            search={{ rodadas: 3, dificuldade: "normal" }}
            className="rounded-lg px-1.5 py-1 hover:bg-peach sm:px-2.5 lg:px-3 lg:py-1.5"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            Jogar
          </Link>
          <RankingDialog open={rankingOpen} onOpenChange={setRankingOpen} />
          <Link
            to="/multiplayer"
            search={{}}
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 font-semibold text-terracotta hover:bg-peach sm:gap-1.5 sm:px-2.5 lg:px-3 lg:py-1.5"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Multiplayer</span>
          </Link>
          {user ? (
            <>
              <Link
                to="/historico"
                className="rounded-lg px-1.5 py-1 hover:bg-peach sm:px-2.5 lg:px-3 lg:py-1.5"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                Histórico
              </Link>
              <Link
                to="/perfil"
                className="flex items-center gap-1 rounded-lg px-1.5 py-1 hover:bg-peach sm:gap-2 sm:px-2.5 lg:px-3 lg:py-1.5"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                <PlayerAvatar url={profile?.avatar_url} size={26} className="sm:w-7 sm:h-7" />
                <span className="hidden md:inline">Perfil</span>
              </Link>
              <Button
                variant="ghost"
                size="default"
                className="h-8 px-2 text-xs font-semibold sm:h-9 sm:px-3 sm:text-sm lg:h-10 lg:text-base"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              size="default"
              className="h-8 px-2.5 text-xs font-semibold sm:h-9 sm:px-3.5 sm:text-sm lg:h-10 lg:px-4 lg:text-base"
              onClick={() =>
                signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
              }
            >
              <span className="lg:hidden">Entrar</span>
              <span className="hidden lg:inline">Entrar com Google</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
