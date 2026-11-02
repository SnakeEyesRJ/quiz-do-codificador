import { Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { PlayerAvatar } from "./PlayerAvatar";

export function SiteHeader() {
  const { user, profile, signInWithGoogle, signOut } = useAuth();
  return (
    <header className="border-b border-border/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-1.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <Link
          to="/"
          className="font-display text-xs font-bold leading-tight tracking-wide sm:text-xl truncate"
        >
          QUIZ DO CODIFICADOR
        </Link>
        <nav className="flex shrink-0 items-center gap-0.5 text-xs sm:text-sm sm:gap-2">
          <Link
            to="/jogar"
            search={{ rodadas: 3, dificuldade: "normal" }}
            className="rounded-md px-1.5 py-1 hover:bg-peach sm:px-2"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            Jogar
          </Link>
          <Link
            to="/multiplayer"
            search={{}}
            className="rounded-md px-1.5 py-1 hover:bg-peach text-terracotta font-semibold flex items-center gap-1 sm:px-2"
            activeProps={{ className: "bg-peach font-bold" }}
          >
            <Users className="h-3.5 w-3.5" />
            <span>Multiplayer</span>
          </Link>
          {user ? (
            <>
              <Link
                to="/historico"
                className="rounded-md px-1.5 py-1 hover:bg-peach sm:px-2"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                Histórico
              </Link>
              <Link
                to="/perfil"
                className="flex items-center gap-1.5 rounded-md px-1.5 py-1 hover:bg-peach sm:gap-2 sm:px-2"
                activeProps={{ className: "bg-peach font-bold" }}
              >
                <PlayerAvatar url={profile?.avatar_url} size={24} className="sm:w-7 sm:h-7" />
                <span className="hidden md:inline">Perfil</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="h-8 px-2.5 text-xs"
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
