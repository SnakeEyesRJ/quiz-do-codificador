import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  Download,
  FileDown,
  GraduationCap,
  HeartHandshake,
  History,
  Library,
  Radio,
  Repeat,
  Scale,
  Scroll,
  Sparkles,
  UserRound,
  Users,
  Globe,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AvatarPicker1x1,
  CodificadorPhoto,
  getStoredCustomAvatar,
} from "@/components/PlayerAvatar";
import { MultiplayerInstructionsDialog } from "@/components/MultiplayerInstructionsDialog";
import { useAuth } from "@/hooks/use-auth";
import {
  DIFFICULTY_DESCRIPTIONS,
  DIFFICULTY_LABELS,
  DIFFICULTY_LEVELS,
  type GameDifficulty,
} from "@/lib/game-rules";
import { cn } from "@/lib/utils";

const DIFFICULTY_OPTIONS: { key: GameDifficulty; label: string; hint: string }[] = [
  { key: "facil", label: "Fácil", hint: "Iniciante" },
  { key: "normal", label: "Normal", hint: "Equilibrado" },
  { key: "dificil", label: "Difícil", hint: "Avançado" },
  { key: "expert", label: "Expert", hint: "Mestre" },
];

const PDF_BOOKS = [
  {
    title: "O Livro dos Espíritos",
    year: "1857",
    filename: "O-Livro-Dos-Espiritos.pdf",
    url: "/livros/O-Livro-Dos-Espiritos.pdf",
    size: "4.4 MB",
  },
  {
    title: "O Livro dos Médiuns",
    year: "1861",
    filename: "O-Livro-Dos-Mediuns.pdf",
    url: "/livros/O-Livro-Dos-Mediuns.pdf",
    size: "1.4 MB",
  },
  {
    title: "O Evangelho Segundo o Espiritismo",
    year: "1864",
    filename: "O-Evangelho-Segundo-O-Espiritismo.pdf",
    url: "/livros/O-Evangelho-Segundo-O-Espiritismo.pdf",
    size: "1.2 MB",
  },
  {
    title: "O Céu e o Inferno",
    year: "1865",
    filename: "O-Ceu-e-o-inferno.pdf",
    url: "/livros/O-Ceu-e-o-inferno.pdf",
    size: "2.4 MB",
  },
  {
    title: "A Gênese",
    year: "1868",
    filename: "A-Genese.pdf",
    url: "/livros/A-Genese.pdf",
    size: "9.2 MB",
  },
  {
    title: "Obras Póstumas",
    year: "1890",
    filename: "Obras-Postumas.pdf",
    url: "/livros/Obras-Postumas.pdf",
    size: "3.0 MB",
  },
  {
    title: "O Que é o Espiritismo",
    year: "1859",
    filename: "O-Que-E-O-Espiritismo.pdf",
    url: "/livros/O-Que-E-O-Espiritismo.pdf",
    size: "1.5 MB",
  },
  {
    title: "Nosso Lar",
    year: "1944",
    filename: "Nosso-Lar.pdf",
    url: "/livros/Nosso-Lar.pdf",
    size: "1.2 MB",
  },
  {
    title: "Os Mensageiros",
    year: "1944",
    filename: "Os-Mensageiros.pdf",
    url: "/livros/Os-Mensageiros.pdf",
    size: "1.1 MB",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QUIZ DO CODIFICADOR" },
      {
        name: "description",
        content:
          "Conheça a Doutrina Espírita e teste seus conhecimentos em disputas de 3, 5, 7 ou 9 rodadas contra o Codificador Allan Kardec.",
      },
      { property: "og:title", content: "QUIZ DO CODIFICADOR" },
      {
        property: "og:description",
        content:
          "Estude as obras fundamentais de Allan Kardec e dispute partidas contra o Codificador.",
      },
    ],
  }),
  component: Index,
});

export function Index() {
  const { user, profile } = useAuth();
  const [selectedRounds, setSelectedRounds] = useState<3 | 5 | 7 | 9>(3);
  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty>("normal");
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  useEffect(() => {
    setCustomAvatar(getStoredCustomAvatar());
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-12">
      <div className="flex min-w-0 flex-col items-center">
        {/* Conteúdo Principal */}
        <div className="flex w-full min-w-0 flex-col items-center">
          {/* Hero */}
          <div className="flex flex-col items-center gap-6 text-center">
            <CodificadorPhoto size={190} className="rounded-2xl border-4" />
            <div className="text-center">
              <p className="text-xl font-bold uppercase tracking-[0.3em] text-ink sm:text-2xl">
                Allan Kardec
              </p>
              <h1 className="mt-2 font-display text-5xl font-bold leading-none sm:text-7xl">
                QUIZ DO
                <br />
                CODIFICADOR
              </h1>
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-md font-semibold tracking-wide text-ink/80">
            TESTE SEUS CONHECIMENTOS SOBRE A DOUTRINA ESPÍRITA
          </p>

          {/* Seletor de Rodadas */ }
  <div className="mt-8 flex flex-col items-center text-center">
    <label className="text-base font-bold tracking-wide text-ink sm:text-lg">
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
            {`${Math.floor(r / 2) + 1} vitórias`}
          </span>
        </button>
      ))}
    </div>
    <p className="mt-2 text-sm font-bold text-ink/85 sm:text-base">
      Disputa melhor de {selectedRounds}: o primeiro a vencer{" "}
      {Math.floor(selectedRounds / 2) + 1} rodadas ganha a partida.
    </p>
  </div>

  {/* Seletor de Níveis de Dificuldade */ }
  <div className="mt-6 flex flex-col items-center text-center">
    <label className="text-base font-bold tracking-wide text-ink sm:text-lg">
      Escolha o nível de dificuldade:
    </label>
    <div className="mt-2.5 flex flex-wrap justify-center gap-2">
      {DIFFICULTY_OPTIONS.map((opt) => (
        <button
          key={opt.key}
          type="button"
          onClick={() => setSelectedDifficulty(opt.key)}
          className={cn(
            "flex flex-col items-center justify-center rounded-xl border-2 px-3.5 py-2 transition-all min-w-[85px] sm:min-w-[95px]",
            selectedDifficulty === opt.key
              ? "border-ink bg-peach font-bold shadow-soft scale-105"
              : "border-border bg-card/70 hover:bg-peach/30 text-muted-foreground",
          )}
        >
          <span className="text-sm font-bold text-ink">{opt.label}</span>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-ink/75">
            {opt.hint}
          </span>
        </button>
      ))}
    </div>
    <p className="mt-2 max-w-md text-sm font-bold text-ink/85 sm:text-base">
      {DIFFICULTY_DESCRIPTIONS[selectedDifficulty]}
    </p>
  </div>

  {/* Campo 1:1 para foto de perfil / avatar antes de começar a partida */ }
          <AvatarPicker1x1
            avatarUrl={customAvatar ?? profile?.avatar_url}
            onChange={setCustomAvatar}
            size={104}
            className="mt-6"
          />

          <Button
            asChild
            variant="hero"
            size="xl"
            className="mt-7 h-auto min-h-12 max-w-full whitespace-normal px-5 py-3 text-center sm:px-10"
          >
            <Link to="/jogar" search={{ rodadas: selectedRounds, dificuldade: selectedDifficulty }}>
              Iniciar partida ({selectedRounds} rodadas · {DIFFICULTY_LABELS[selectedDifficulty]})
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-3.5 h-auto min-h-11 max-w-full whitespace-normal rounded-xl border-2 border-forest/40 px-5 py-2.5 text-center font-bold text-forest hover:bg-forest/10 hover:text-forest"
          >
            <Link to="/multiplayer" search={{}}>
              <Users className="mr-2 h-4 w-4" /> Desafiar Amigo (Multiplayer Online 1×1)
            </Link>
          </Button>

          <MultiplayerInstructionsDialog />

  {
    user && (
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
    )
  }

  {/* Regras do Quiz */ }
  <section className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
    {[
      [
        "Rodadas",
        "Escolha 3, 5, 7 ou 9 rodadas na disputa. Cada rodada termina quando alguém atinge 10 pontos.",
      ],
      [
        "Dificuldade",
        "4 níveis (Fácil, Normal, Difícil e Expert) que conduzem a seleção das perguntas pelo grau de exigência.",
      ],
      [
        "Pontuação",
        "O Codificador não responde: seu acerto vale 1 ponto para você; seu erro concede 1 ponto ao Codificador.",
      ],
    ].map(([t, d]) => (
      <div
        key={t}
        className="flex flex-col items-center rounded-2xl border bg-card/70 p-5 text-center shadow-soft"
      >
        <BookOpen className="mb-2 h-5 w-5 text-ink/70" />
        <h3 className="text-xl font-bold">{t}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{d}</p>
      </div>
    ))}
  </section>

  {/* Seção Principal: A Doutrina Espírita */ }
  <section className="mt-20 w-full max-w-4xl space-y-12 text-center">
    {/* Cabeçalho */}
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-peach/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
        <Sparkles className="h-4 w-4" /> Doutrina dos Espíritos
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl text-ink">
        A DOUTRINA ESPÍRITA
      </h1>
      <h3 className="mt-2 font-display text-xl font-semibold text-muted-foreground sm:text-2xl">
        Conhecimento, amor e evolução espiritual
      </h3>
      <div className="mt-6 rounded-2xl border bg-card/80 p-6 text-center shadow-soft sm:p-8">
        <p className="text-base leading-relaxed text-ink/90 sm:text-lg">
          O Espiritismo é uma doutrina de caráter científico, filosófico e moral,
          fundamentada na existência de Deus, na imortalidade da alma, na comunicação entre
          o mundo material e o espiritual e na evolução contínua dos Espíritos. Seu
          propósito é ajudar a humanidade a compreender sua origem, seu destino e o
          verdadeiro sentido da existência.
        </p>
      </div>
    </div>

    {/* A origem do Espiritismo */}
    <div className="rounded-2xl border bg-card/80 p-6 text-center shadow-soft sm:p-8">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <GraduationCap className="h-6 w-6 text-ink/80" />
        <h2 className="font-display text-2xl font-bold sm:text-3xl text-ink">
          A origem do Espiritismo
        </h2>
      </div>

      <div className="mt-5 space-y-4 leading-relaxed text-ink/90">
        <p>
          A Doutrina Espírita surgiu na França, em meados do século XIX, em um período
          marcado por intensas transformações científicas, filosóficas e culturais. Seu
          marco oficial foi o dia 18 de abril de 1857, quando foi publicado{" "}
          <em>O Livro dos Espíritos</em>, obra que apresentou ao mundo os fundamentos do
          Espiritismo.
        </p>
        <p>
          Seu principal organizador foi Hippolyte Léon Denizard Rivail, conhecido
          mundialmente pelo pseudônimo de Allan Kardec. Nascido em Lyon, na França, em 3 de
          outubro de 1804, Kardec foi professor, pedagogo, escritor e pesquisador, com
          sólida formação intelectual e grande interesse pelo conhecimento e pela educação.
        </p>
        <p>
          Ao investigar os fenômenos mediúnicos que despertavam a curiosidade da sociedade
          europeia, Kardec decidiu estudar suas causas de maneira metódica, comparando
          informações obtidas por diferentes médiuns e submetendo as respostas à análise
          racional. Seu trabalho resultou na organização de um conjunto de ensinamentos
          atribuídos aos Espíritos, dando origem à Codificação Espírita.
        </p>
        <p>
          Mais do que criar uma nova religião, Kardec buscou estabelecer uma doutrina
          baseada no estudo, na observação, no raciocínio e na transformação moral do ser
          humano.
        </p>
      </div>
    </div>

    {/* As seis obras fundamentais */}
    <div className="rounded-2xl border bg-card/80 p-6 text-center shadow-soft sm:p-8">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <Library className="h-6 w-6 text-ink/80" />
        <h2 className="font-display text-2xl font-bold sm:text-3xl text-ink">
          As seis obras fundamentais
        </h2>
      </div>

      <p className="mt-4 leading-relaxed text-ink/90">
        A literatura de Allan Kardec que alicerça o Espiritismo é composta por seis obras
        essenciais:
      </p>

      <div className="mt-6 space-y-3 text-center">
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>O Livro dos Espíritos (1857):</strong> apresenta os fundamentos da
            doutrina, abordando Deus, a criação, a natureza dos Espíritos, as leis morais, a
            vida espiritual e o destino da humanidade.
          </p>
        </div>
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>O Livro dos Médiuns (1861):</strong> estuda a mediunidade, os fenômenos
            espirituais e as possibilidades e responsabilidades da comunicação entre
            encarnados e desencarnados.
          </p>
        </div>
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>O Evangelho Segundo o Espiritismo (1864):</strong> apresenta os
            ensinamentos morais de Jesus à luz da Doutrina Espírita, destacando o amor, a
            caridade, o perdão e a fraternidade.
          </p>
        </div>
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>O Céu e o Inferno (1865):</strong> examina a justiça divina, as
            consequências morais das ações humanas e as condições dos Espíritos após a
            morte.
          </p>
        </div>
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>A Gênese (1868):</strong> aborda a criação, a formação dos mundos, os
            milagres, as predições e as relações entre os conhecimentos científicos e os
            princípios espíritas.
          </p>
        </div>
        <div className="rounded-xl border bg-cream/60 p-4">
          <p className="text-sm leading-relaxed text-ink/90">
            <strong>Obras Póstumas (1890):</strong> reúne escritos, reflexões e documentos
            inéditos deixados por Allan Kardec, abordando a constituição do Espiritismo, sua
            história íntima, previsões e diretrizes para o futuro da doutrina.
          </p>
        </div>
      </div>

      <p className="mt-5 leading-relaxed text-ink/90">
        Essas obras constituem a base para o estudo e a compreensão da doutrina, que
        continua sendo aprofundada por pesquisadores e estudiosos em todo o mundo.
      </p>
    </div>

    {/* Os princípios fundamentais */}
    <div>
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Os princípios fundamentais
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Os pilares que sustentam o conhecimento e a visão espírita da vida.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Deus e a criação */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">Deus e a criação</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Deus e a criação:</strong> Deus é a inteligência suprema, causa primária
            de todas as coisas. O universo é composto por diferentes dimensões de
            existência, incluindo o mundo material e o mundo espiritual.
          </p>
        </div>

        {/* A existência e a imortalidade do Espírito */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Scroll className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              A existência e a imortalidade do Espírito
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>A existência e a imortalidade do Espírito:</strong> o ser humano não é
            apenas um corpo físico. É um Espírito imortal que utiliza temporariamente um
            corpo material para vivenciar experiências, adquirir conhecimentos e desenvolver
            suas capacidades morais e intelectuais.
          </p>
        </div>

        {/* Encarnação e reencarnação */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Repeat className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              Encarnação e reencarnação
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Encarnação e reencarnação:</strong> a encarnação representa a união do
            Espírito com um corpo físico para uma nova existência na matéria. A reencarnação
            é o retorno do Espírito à vida corporal em sucessivas existências, permitindo
            novas oportunidades de aprendizado, reparação e evolução.
          </p>
        </div>

        {/* Provas e expiações */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">Provas e expiações</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Provas e expiações:</strong> durante suas existências, os Espíritos
            enfrentam experiências e dificuldades que contribuem para seu progresso. As
            provas são desafios que favorecem o desenvolvimento de virtudes e conhecimentos.
            As expiações representam consequências de experiências e escolhas anteriores,
            oferecendo oportunidades de reajuste e aprendizado. Não representam castigos
            eternos, mas possibilidades de transformação dentro da justiça divina.
          </p>
        </div>

        {/* Livre-arbítrio e responsabilidade */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              Livre-arbítrio e responsabilidade
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Livre-arbítrio e responsabilidade:</strong> cada indivíduo possui
            liberdade para escolher seus caminhos, sendo responsável pelas consequências de
            suas decisões. A evolução espiritual depende do esforço individual, da prática
            do bem e da superação das próprias imperfeições.
          </p>
        </div>

        {/* Mediunidade e comunicação espiritual */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Radio className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              Mediunidade e comunicação espiritual
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Mediunidade e comunicação espiritual:</strong> a mediunidade é a
            capacidade de estabelecer relações entre o mundo material e o espiritual.
            Segundo a doutrina, os Espíritos podem se comunicar por intermédio de pessoas
            dotadas dessa faculdade, trazendo ensinamentos e informações que devem ser
            sempre examinados com discernimento e responsabilidade.
          </p>
        </div>

        {/* Pluralidade dos mundos habitados */}
        <div className="rounded-2xl border bg-card/80 p-5 text-center shadow-soft transition-all hover:border-ink/40 sm:col-span-2">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <div className="rounded-xl bg-peach p-2.5 text-ink">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              Pluralidade dos mundos habitados
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/90">
            <strong>Pluralidade dos mundos habitados:</strong> o universo não se limita à
            Terra. Segundo os ensinamentos espíritas, existem inúmeros mundos habitados por
            seres em diferentes estágios de desenvolvimento físico, intelectual e moral. Os
            Espíritos podem vivenciar experiências em diferentes mundos, de acordo com suas
            necessidades evolutivas.
          </p>
        </div>
      </div>
    </div>

    {/* O verdadeiro propósito da existência */}
    <div className="rounded-2xl border bg-card/80 p-6 text-center shadow-soft sm:p-8">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <HeartHandshake className="h-6 w-6 text-ink/80" />
        <h2 className="font-display text-2xl font-bold sm:text-3xl text-ink">
          O verdadeiro propósito da existência
        </h2>
      </div>

      <div className="mt-5 space-y-4 leading-relaxed text-ink/90">
        <p>
          Para o Espiritismo, a vida não termina com a morte do corpo físico. A
          desencarnação representa apenas o encerramento de uma etapa da existência,
          enquanto o Espírito continua sua jornada no plano espiritual, conservando sua
          individualidade e prosseguindo em seu caminho evolutivo.
        </p>
        <p>
          A reencarnação oferece novas oportunidades de aprendizado, permitindo que cada
          Espírito desenvolva o amor, a inteligência, a humildade, a tolerância e a
          fraternidade. Não existe evolução sem esforço, assim como não existe transformação
          verdadeira sem o exercício consciente do bem.
        </p>
        <p>
          A caridade, compreendida não apenas como ajuda material, mas também como
          benevolência, indulgência e perdão, ocupa posição central na filosofia espírita.
        </p>
        <div className="rounded-xl border border-secondary/40 bg-peach/40 p-4">
          <p className="font-semibold text-ink">
            A mensagem de Jesus Cristo representa o principal referencial moral da doutrina,
            especialmente por meio do ensinamento:{" "}
            <span className="font-bold underline decoration-secondary decoration-2 underline-offset-4">
              &ldquo;Fora da caridade não há salvação.&rdquo;
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Um convite ao conhecimento */}
    <div className="rounded-2xl border bg-card/80 p-6 text-center shadow-soft sm:p-8">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <HelpCircle className="h-6 w-6 text-ink/80" />
        <h2 className="font-display text-2xl font-bold sm:text-3xl text-ink">
          Um convite ao conhecimento
        </h2>
      </div>

      <div className="mt-5 space-y-4 leading-relaxed text-ink/90">
        <p>
          O Espiritismo não propõe uma fé cega. Convida ao estudo, à reflexão e à
          compreensão, valorizando a razão e o questionamento consciente. Seus ensinamentos
          procuram responder a algumas das perguntas mais profundas da humanidade: De onde
          viemos? Por que estamos aqui? O que acontece após a morte? Qual é o propósito da
          vida? E para onde caminhamos?
        </p>
        <p>
          Mais do que conhecer a existência dos Espíritos ou compreender os mistérios da
          vida após a morte, estudar a Doutrina Espírita é buscar compreender a nós mesmos.
        </p>
        <div className="rounded-xl border border-ink/20 bg-cream/80 p-5 shadow-sm">
          <p className="font-semibold text-ink sm:text-lg leading-relaxed">
            Afinal, somos Espíritos imortais em constante aprendizado, e cada existência
            representa uma nova oportunidade de evoluir, amar, aprender e nos aproximar da
            perfeição.
          </p>
        </div>
      </div>
    </div>

    {/* Rodapé da seção com convite ao Quiz */}
    <div className="rounded-2xl border bg-peach/40 p-6 text-center shadow-soft sm:p-8">
      <h3 className="font-display text-2xl font-bold sm:text-3xl text-ink">
        Pronto para testar seu aprendizado?
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
        Enfrente o Codificador em partidas disputadas de 3, 5, 7 ou 9 rodadas no nível de
        dificuldade de sua escolha ({DIFFICULTY_LABELS[selectedDifficulty]}), com perguntas
        comentadas sobre as obras de Allan Kardec.
      </p>
      <Button
        asChild
        variant="hero"
        size="lg"
        className="mt-5 h-auto min-h-10 max-w-full whitespace-normal px-5 py-2.5 text-center sm:px-8"
      >
        <Link
          to="/jogar"
          search={{ rodadas: selectedRounds, dificuldade: selectedDifficulty }}
        >
          Jogar agora contra o Codificador ({selectedRounds} rodadas ·{" "}
          {DIFFICULTY_LABELS[selectedDifficulty]})
        </Link>
      </Button>
    </div>
  </section>
        </div>

    {/* Rodapé Horizontal: Lista de Downloads dos Livros em PDF */ }
    <footer id="downloads-pdf" className="mt-14 w-full text-center">
          <div className="rounded-2xl border-2 border-border bg-card p-5 sm:p-6 shadow-soft">
            <div className="flex flex-col items-center justify-center gap-3 border-b border-border/80 pb-4 text-center">
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                <div className="shrink-0 rounded-xl bg-peach p-2.5 text-ink shadow-xs">
                  <FileDown className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <h2 className="font-display text-lg font-bold text-ink leading-tight sm:text-xl">
                    LIVROS EM PDF — DOWNLOAD DAS OBRAS
                  </h2>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Faça o download gratuito dos PDFs das 9 obras espíritas utilizadas neste
                    projeto:
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-peach/80 px-3 py-1 text-xs font-bold text-ink border border-border">
                9 Livros Disponíveis
              </span>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {PDF_BOOKS.map((book) => (
                <li
                  key={book.filename}
                  className="flex flex-col items-center justify-between rounded-xl border border-border/80 bg-card/60 p-3.5 text-center transition-all hover:border-ink/30 hover:bg-peach/20"
                >
                  <div>
                    <p className="font-display text-xs sm:text-sm font-bold leading-snug text-ink">
                      {book.title}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Ano {book.year} · {book.size}
                    </p>
                  </div>
                  <a
                    href={book.url}
                    download={book.filename}
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-cream/70 px-3 py-2 text-xs font-semibold text-ink shadow-xs transition-colors hover:bg-terracotta hover:text-white"
                    title={`Download do PDF de ${book.title}`}
                  >
                    <Download className="h-3.5 w-3.5 shrink-0" />
                    <span>Download PDF</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/30 pt-6 pb-2 text-center font-bold text-white">
            <p className="font-display text-sm font-bold tracking-wider text-white sm:text-base">
              DESENVOLVIDO POR EMILDO LAHUD ABREU
            </p>
            <p className="mt-1 text-xs font-bold text-white sm:text-sm">
              E-Mail:{" "}
              <a
                href="mailto:emildo.abreu@gmail.com"
                className="font-bold text-white underline decoration-white/70 underline-offset-4 hover:text-white/80"
              >
                emildo.abreu@gmail.com
              </a>
            </p>
            <p className="mt-3 text-xs font-bold text-white sm:text-sm">
              Doações: Grupo Espírita Severino Rosa
            </p>
            <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">
              Chave Pix (CNPJ): 28977643000109
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
