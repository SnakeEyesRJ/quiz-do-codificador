import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  GraduationCap,
  HeartHandshake,
  History,
  Repeat,
  Scale,
  Scroll,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodificadorPhoto } from "@/components/PlayerAvatar";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiz do Codificador — desafie o Codificador" },
      {
        name: "description",
        content:
          "Teste seus conhecimentos sobre a Doutrina Espírita em disputas de 3, 5, 7 ou 9 rodadas contra o Codificador Allan Kardec.",
      },
      { property: "og:title", content: "Quiz do Codificador" },
      {
        property: "og:description",
        content:
          "Dispute partidas contra Allan Kardec com 200 perguntas extraídas das obras fundamentais do Espiritismo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { user } = useAuth();
  const [selectedRounds, setSelectedRounds] = useState<3 | 5 | 7 | 9>(3);

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 sm:py-20">
      {/* Hero */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <CodificadorPhoto size={190} className="rounded-2xl border-4" />
        <div className="text-center sm:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Allan Kardec</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-none sm:text-7xl">
            Quiz do
            <br />
            Codificador
          </h1>
          <p className="mt-4 max-w-md font-semibold tracking-wide text-ink/80">
            TESTE SEUS CONHECIMENTOS SOBRE A DOUTRINA ESPÍRITA
          </p>
        </div>
      </div>

      {/* Seletor de Rodadas */}
      <div className="mt-8 flex flex-col items-center text-center">
        <label className="text-sm font-semibold tracking-wide text-ink/80">
          Escolha o formato da partida:
        </label>
        <div className="mt-2.5 flex flex-wrap justify-center gap-2">
          {([3, 5, 7, 9] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRounds(r)}
              className={cn(
                "flex flex-col items-center justify-center rounded-xl border-2 px-4 py-2 transition-all min-w-[76px]",
                selectedRounds === r
                  ? "border-ink bg-peach font-bold shadow-soft scale-105"
                  : "border-border bg-card/70 hover:bg-peach/30 text-muted-foreground",
              )}
            >
              <span className="text-lg font-bold">{r}</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-ink/75">
                {r === 3 ? "Melhor de 3" : `${Math.floor(r / 2) + 1} vitórias`}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Disputa melhor de {selectedRounds}: o primeiro a vencer{" "}
          {Math.floor(selectedRounds / 2) + 1} rodadas ganha a partida.
        </p>
      </div>

      <Button asChild variant="hero" size="xl" className="mt-6">
        <Link to="/jogar" search={{ rodadas: selectedRounds }}>
          Iniciar partida ({selectedRounds} rodadas)
        </Link>
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

      {/* Regras do Quiz */}
      <section className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {[
          [
            "Rodadas",
            "Escolha 3, 5, 7 ou 9 rodadas na disputa. Cada rodada termina quando alguém atinge 10 pontos.",
          ],
          [
            "Pontuação",
            "O Codificador não responde: seu acerto vale 1 ponto para você; seu erro concede 1 ponto ao Codificador.",
          ],
          [
            "Estudo",
            "Após cada resposta, veja a explicação doutrinária e a referência exata na obra.",
          ],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border bg-card/70 p-5 shadow-soft">
            <BookOpen className="mb-2 h-5 w-5 text-ink/70" />
            <h3 className="text-xl font-bold">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      {/* Seção Educativa: A Doutrina Espírita e Allan Kardec */}
      <section className="mt-20 w-full max-w-4xl space-y-12 text-left">
        {/* Título da Seção */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-peach/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
            <Sparkles className="h-4 w-4" /> Doutrina dos Espíritos
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Sobre o Espiritismo e Allan Kardec
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Uma síntese histórica e conceitual para compreender a essência da doutrina, seus pilares
            universais e a missão de seu Codificador.
          </p>
        </div>

        {/* Quem foi Allan Kardec e Como Tudo Começou */}
        <div className="rounded-2xl border bg-card/80 p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-ink/80" />
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Quem foi Allan Kardec e como a Doutrina começou?
            </h3>
          </div>

          <div className="mt-5 space-y-4 leading-relaxed text-ink/90">
            <p>
              O nome de nascimento de Allan Kardec era{" "}
              <strong>Hippolyte Léon Denizard Rivail</strong>, nascido em Lyon (França), em{" "}
              <strong>3 de outubro de 1804</strong>. Educador e pedagogo de sólida reputação
              europeia, foi discípulo dileto de <strong>Johann Heinrich Pestalozzi</strong> no
              célebre Instituto de Yverdon, na Suíça. Poliglota, tradutor e autor de compêndios
              didáticos adotados na França, o Prof. Rivail dedicou as primeiras décadas de sua vida
              à reforma educacional e ao método pedagógico racional.
            </p>
            <p>
              Em <strong>1854 e 1855</strong>, em Paris, eclodiu pela Europa a febre das{" "}
              <em>mesas girantes</em> (mesas e móveis que giravam, levitavam e emitiam pancadas
              rítmicas). A princípio profundamente cético ante a modéstia dos salões, Rivail
              declarou que só acreditaria caso lhe demonstrassem que uma mesa tinha cérebro para
              pensar e nervos para sentir.
            </p>
            <p>
              Todavia, ao acompanhar de perto os fenômenos com rigor experimental, constatou que os
              movimentos e as pancadas (tiptologia) transmitiam{" "}
              <strong>mensagens inteligentes, coerentes e de elevado teor moral</strong>. Aplicando
              o axioma científico cartesiano —{" "}
              <em>&ldquo;A todo efeito inteligente corresponde uma causa inteligente&rdquo;</em> —,
              deduziu que a fonte causadora daqueles fenômenos não era a matéria física, mas as
              almas imortais dos homens que haviam vivido na Terra: os <strong>Espíritos</strong>.
            </p>
            <p>
              Instruído por seu Espírito protetor de que vivera outrora entre os druidas na antiga
              Gália com o nome de <strong>Allan Kardec</strong>, adotou esse pseudônimo para
              distinguir sua obra estritamente pedagógica da revelação espiritual. Em{" "}
              <strong>18 de abril de 1857</strong>, lançou em Paris <em>O Livro dos Espíritos</em>,
              inaugurando oficialmente o Espiritismo no mundo.
            </p>
          </div>
        </div>

        {/* O que é a Doutrina Espírita (Tríplice Aspecto) */}
        <div className="rounded-2xl border bg-card/80 p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <Scroll className="h-6 w-6 text-ink/80" />
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              O que é a Doutrina Espírita?
            </h3>
          </div>
          <p className="mt-4 leading-relaxed text-ink/90">
            O Espiritismo é uma doutrina que reúne{" "}
            <strong>Ciência, Filosofia e Religião (Moral)</strong>, revelada pelos Espíritos
            Superiores e organizada pela razão humana:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border bg-cream/70 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Ciência
              </span>
              <h4 className="mt-1 font-bold">Investigação e Fatos</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Estuda as leis naturais que regem as relações entre o mundo espiritual e o mundo
                corpóreo através da observação e do método experimental.
              </p>
            </div>
            <div className="rounded-xl border bg-cream/70 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Filosofia
              </span>
              <h4 className="mt-1 font-bold">Origem e Destino</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Responde às questões essenciais da existência: de onde viemos, para onde vamos, qual
                a razão da dor e o sentido profundo da vida.
              </p>
            </div>
            <div className="rounded-xl border bg-cream/70 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Moral
              </span>
              <h4 className="mt-1 font-bold">Amor e Caridade</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Revive o Evangelho de Jesus em sua pureza original, estabelecendo como lema supremo:{" "}
                <em>&ldquo;Fora da caridade não há salvação&rdquo;</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Conceitos Fundamentais */}
        <div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-3xl font-bold">Conceitos Fundamentais da Doutrina</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Entenda os principais termos e pilares que norteiam o entendimento espírita da vida
              universal.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* O Codificador */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">O Codificador</h4>
                  <p className="text-xs text-muted-foreground">
                    Allan Kardec como compilador metódico
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                Kardec não se considerava profeta nem criador do Espiritismo. Ele foi seu{" "}
                <strong>Codificador</strong>: interrogou médiuns em várias nações, confrontou e
                filtrou as respostas pela lógica, reuniu os princípios ensinados pelos Espíritos
                Superiores e os estruturou de forma didática no Pentateuco Espírita.
              </p>
            </div>

            {/* O Consolador */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">O Consolador</h4>
                  <p className="text-xs text-muted-foreground">A promessa do Cristo cumprida</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                O Espiritismo cumpre a promessa de Jesus sobre o <em>Consolador Prometido</em> ou{" "}
                <em>Espírito de Verdade</em> (João 14:16). Consola os corações aflitos ao
                desmistificar a morte, explicar a justiça das aflições humanas e trazer a{" "}
                <strong>fé raciocinada</strong>, que compreende em vez de apenas crer cegamente.
              </p>
            </div>

            {/* Encarnação */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">Encarnação</h4>
                  <p className="text-xs text-muted-foreground">O Espírito na matéria física</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                É a união temporária do Espírito a um corpo biológico através do{" "}
                <strong>perispírito</strong> (envoltório semimaterial intermediário). Pela
                encarnação, a alma interage com a matéria densa, desenvolve a inteligência, vence as
                limitações corporais e colabora no progresso material do planeta.
              </p>
            </div>

            {/* Reencarnação */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <Repeat className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">Reencarnação</h4>
                  <p className="text-xs text-muted-foreground">A pluralidade das existências</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                Criados simples e ignorantes, os Espíritos precisam de múltiplas vidas em diferentes
                épocas, corpos e famílias para adquirir conhecimento e perfeição moral. A
                reencarnação expressa a suprema justiça divina, permitindo a todos infinitas
                oportunidades de aprendizado e evolução.
              </p>
            </div>

            {/* Provas */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">Provas</h4>
                  <p className="text-xs text-muted-foreground">Desafios que exercitam virtudes</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                São os obstáculos, dificuldades materiais e circunstâncias árduas escolhidas ou
                aceitas pelo Espírito antes de nascer com o objetivo de testar e fortalecer seu
                caráter moral. A prova permite exercitar virtudes essenciais como a paciência, a
                coragem, a resignação e a fraternidade.
              </p>
            </div>

            {/* Expiações */}
            <div className="rounded-2xl border bg-card/80 p-5 shadow-soft transition-all hover:border-ink/40">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-peach p-2.5 text-ink">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">Expiações</h4>
                  <p className="text-xs text-muted-foreground">Ação e reação reparadora</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/90">
                São os sofrimentos decorrentes da lei de causa e efeito para resgatar e purificar
                faltas cometidas no passado contra a lei moral. A expiação não é vingança de Deus,
                mas um processo medicinal pedagógico que corrige o Espírito e restabelece a harmonia
                de sua consciência.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé da seção com convite ao Quiz */}
        <div className="rounded-2xl border bg-peach/40 p-6 text-center shadow-soft sm:p-8">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Pronto para testar seu aprendizado?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Enfrente o Codificador em partidas disputadas de 3, 5, 7 ou 9 rodadas com perguntas
            comentadas sobre as obras de Allan Kardec.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-5">
            <Link to="/jogar" search={{ rodadas: selectedRounds }}>
              Jogar agora contra o Codificador ({selectedRounds} rodadas)
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
