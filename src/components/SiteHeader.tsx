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
  const meta = (user?.user_metadata ?? {}) as Record<string, any>;
  const googleAccountName =
    profile?.display_name ||
    meta["full_name"] ||
    meta["name"] ||
    meta["display_name"] ||
    user?.email?.split("@")[0] ||
    "Perfil";

  return (
    <header className="border-b border-border/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3 lg:flex-row lg:justify-between lg:gap-4 lg:py-3.5">
        <Link
          to="/"
          className="shrink-0 whitespace-nowrap text-center font-display text-sm font-bold leading-tight tracking-wide sm:text-xl md:text-2xl lg:text-xl xl:text-2xl lg:text-left"
        >
          QUIZ DO CODIFICADOR
        </Link>
        <nav className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 text-xs font-semibold sm:gap-x-2 sm:gap-y-1.5 sm:text-sm md:gap-x-2 md:text-base lg:w-auto lg:flex-nowrap lg:gap-x-1.5 lg:text-base xl:gap-x-2.5 xl:text-lg">
          <button
            type="button"
            onClick={() => setRankingOpen(true)}
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 hover:bg-peach sm:gap-1.5 sm:px-2.5 lg:px-2 lg:py-1.5 xl:px-3"
          >
            <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Ranking</span>
          </button>
          <Link
            to="/jogar"
            search={{ rodadas: 3, dificuldade: "normal" }}
            className="rounded-lg px-1.5 py-1 hover:bg-peach sm:px-2.5 lg:px-2 lg:py-1.5 xl:px-3"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            Jogar
          </Link>
          <RankingDialog open={rankingOpen} onOpenChange={setRankingOpen} />
          <Link
            to="/multiplayer"
            search={{}}
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 font-semibold text-black hover:bg-peach hover:text-black sm:gap-1.5 sm:px-2.5 lg:px-2 lg:py-1.5 xl:px-3"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Multiplayer</span>
          </Link>
          {user ? (
            <>
              <Link
                to="/historico"
                className="rounded-lg px-1.5 py-1 hover:bg-peach sm:px-2.5 lg:px-2 lg:py-1.5 xl:px-3"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                Histórico
              </Link>
              <Link
                to="/perfil"
                className="flex max-w-[180px] items-center gap-1 rounded-lg px-1.5 py-1 hover:bg-peach sm:max-w-[220px] sm:gap-1.5 sm:px-2.5 lg:px-2 lg:py-1.5 xl:max-w-[260px] xl:px-3"
                activeProps={{ className: "bg-peach font-bold" }}
                title={googleAccountName}
              >
                <PlayerAvatar url={profile?.avatar_url} size={26} className="shrink-0 sm:w-7 sm:h-7" />
                <span className="truncate">{googleAccountName}</span>
              </Link>
              <Button
                variant="ghost"
                size="default"
                className="h-8 px-2 text-xs font-semibold sm:h-9 sm:px-2.5 sm:text-sm lg:h-9 lg:px-2.5 lg:text-base xl:h-10 xl:px-3"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              size="default"
              className="h-8 border border-sky-300 bg-sky-200 px-2.5 text-xs font-semibold text-black hover:bg-sky-300 hover:text-black sm:h-9 sm:px-3.5 sm:text-sm lg:h-10 lg:px-4 lg:text-base"
              onClick={() =>
                signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))
              }
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
              >
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
              <span className="lg:hidden">Entrar</span>
              <span className="hidden lg:inline">Entrar com Google</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
