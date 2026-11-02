import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, History, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodificadorPhoto } from "@/components/PlayerAvatar";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiz do Codificador — desafie o Codificador" },
      {
        name: "description",
        content:
          "Responda perguntas de O Livro dos Espíritos, O Evangelho Segundo o Espiritismo, O Céu e o Inferno e A Gênese contra o Codificador.",
      },
      { property: "og:title", content: "Quiz do Codificador" },
      {
        property: "og:description",
        content:
          "Melhor de três rodadas contra o Codificador, com perguntas das obras de Allan Kardec.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { user } = useAuth();
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 sm:py-20">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <CodificadorPhoto size={190} className="rounded-2xl border-4" />
        <div className="text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Allan Kardec</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-none sm:text-7xl">
            Quiz do
            <br />
            Codificador
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            TESTE SEUS CONHECIMENTOS SOBRE A DOUTRINA ESPÍRITA
          </p>
        </div>
      </div>

      <Button asChild variant="hero" size="xl" className="mt-10">
        <Link to="/jogar">Iniciar partida</Link>
      </Button>

      {user && (
        <div className="mt-6 flex gap-3">
          <Button asChild variant="secondary">
            <Link to="/perfil">
              <UserRound /> Meu perfil
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/historico">
              <History /> Histórico
            </Link>
          </Button>
        </div>
      )}

      <section className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {[
          ["Rodadas", "Melhor de três. Cada rodada termina quando alguém chega a 10 pontos."],
          [
            "Pontuação",
            "Seu acerto vale 1 ponto para você; seu erro, 1 ponto para o Codificador — e vice-versa.",
          ],
          ["Estudo", "Após cada resposta, veja a explicação e a referência na obra."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border bg-card/70 p-5 shadow-soft">
            <BookOpen className="mb-2 h-5 w-5 text-ink/70" />
            <h3 className="text-xl font-bold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
