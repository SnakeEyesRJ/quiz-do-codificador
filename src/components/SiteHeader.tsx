import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { PlayerAvatar } from "./PlayerAvatar";

export function SiteHeader() {
  const { user, profile, signInWithGoogle, signOut } = useAuth();
  return (
    <header className="border-b border-border/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <Link
          to="/"
          className="font-display text-sm font-bold leading-tight tracking-wide sm:text-xl"
        >
          QUIZ DO CODIFICADOR
        </Link>
        <nav className="flex shrink-0 items-center gap-0.5 text-sm sm:gap-2">
          <Link
            to="/jogar"
            className="rounded-md px-2 py-1 hover:bg-peach"
            activeProps={{ className: "bg-peach" }}
          >
            Jogar
          </Link>
          {user ? (
            <>
              <Link
                to="/historico"
                className="rounded-md px-2 py-1 hover:bg-peach"
                activeProps={{ className: "bg-peach" }}
              >
                Histórico
              </Link>
              <Link
                to="/perfil"
                className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-peach"
                activeProps={{ className: "bg-peach" }}
              >
                <PlayerAvatar url={profile?.avatar_url} size={28} />
                <span className="hidden sm:inline">Perfil</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                Sair
              </Button>
            </>
          ) : (
            <Button
              size="sm"
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
