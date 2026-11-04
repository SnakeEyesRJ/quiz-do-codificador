import { BookOpenCheck, Clock, HelpCircle, LogIn, Share2, Swords, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "1",
    icon: LogIn,
    title: "Faça login com sua conta Google",
    description:
      "Para jogar no modo Multiplayer Online 1×1, ambos os jogadores precisam entrar com suas contas Google para sincronizar o placar e os perfis em tempo real.",
  },
  {
    number: "2",
    icon: Swords,
    title: "Crie uma sala ou entre com um código",
    description:
      "O anfitrião escolhe o formato (3, 5, 7 ou 9 rodadas) e o nível de dificuldade (Fácil, Normal, Difícil ou Expert) e clica em 'Criar Sala'. Um código exclusivo de 6 letras será gerado.",
  },
  {
    number: "3",
    icon: Share2,
    title: "Convide seu amigo",
    description:
      "Envie o código de 6 letras ou o link direto de convite para o seu adversário. Assim que ele digitar o código (ou abrir o link) e clicar em 'Entrar', a partida inicia automaticamente!",
  },
  {
    number: "4",
    icon: Clock,
    title: "Responda em até 60 segundos",
    description:
      "Os dois jogadores recebem exatamente a mesma pergunta simultaneamente e têm 60 segundos no cronômetro para escolher uma das 5 alternativas (A, B, C, D ou E).",
  },
  {
    number: "5",
    icon: Trophy,
    title: "Pontuação e vitória na partida",
    description:
      "Cada resposta certa vale +1 ponto para você; cada erro (ou tempo esgotado) concede +1 ponto ao oponente. Vence a rodada quem fizer 10 pontos primeiro, e vence a partida quem ganhar a maioria das rodadas!",
  },
];

export function MultiplayerInstructionsDialog({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="default"
          className={cn(
            "mt-2.5 h-auto min-h-10 max-w-full whitespace-normal rounded-xl border-2 border-ink/30 bg-card/80 px-5 py-2 text-center text-sm font-bold text-ink shadow-xs hover:bg-peach/50 cursor-pointer",
            className,
          )}
        >
          <HelpCircle className="mr-2 h-4 w-4 shrink-0" />
          Instruções Multijogador
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[88vh] max-w-xl overflow-y-auto rounded-2xl border-2 border-border bg-card p-5 sm:p-6">
        <DialogHeader className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2.5 sm:justify-start">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-peach text-ink shadow-xs">
              <BookOpenCheck className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="font-display text-xl font-bold text-ink sm:text-2xl">
                Instruções do Modo Multijogador (1×1)
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-xs font-semibold text-muted-foreground sm:text-sm">
                Passo a passo para desafiar um amigo em tempo real
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ol className="mt-3 space-y-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="flex items-start gap-3.5 rounded-xl border border-border/80 bg-cream/60 p-3.5 text-left shadow-xs"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-peach font-display text-sm font-bold text-ink border border-ink/20">
                  {step.number}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-4 w-4 shrink-0 text-terracotta" />
                    <h4 className="font-display text-sm font-bold text-ink sm:text-base">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-ink/85 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <DialogFooter className="mt-4 sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="hero" className="w-full sm:w-auto cursor-pointer">
              Entendi, vamos jogar!
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
