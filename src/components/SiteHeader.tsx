import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { PlayerAvatar } from "./PlayerAvatar";

export function SiteHeader() {
  const { user, profile, signInWithGoogle, signOut } = useAuth();
  return (
    <header className="border-b border-border/70 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold tracking-wide">
          Quiz do Codificador
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link to="/jogar" className="rounded-md px-2 py-1 hover:bg-peach" activeProps={{ className: "bg-peach" }}>
            Jogar
          </Link>
          {user ? (
            <>
              <Link to="/historico" className="rounded-md px-2 py-1 hover:bg-peach" activeProps={{ className: "bg-peach" }}>
                Histórico
              </Link>
              <Link to="/perfil" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-peach" activeProps={{ className: "bg-peach" }}>
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
              onClick={() => signInWithGoogle().catch(() => toast.error("Não foi possível entrar com o Google."))}
            >
              Entrar com Google
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
