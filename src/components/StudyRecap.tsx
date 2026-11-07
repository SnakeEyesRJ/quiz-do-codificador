import { useState } from "react";
import { BookOpen, GraduationCap, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { generateStudyRecap } from "@/lib/recap.functions";
import { cn } from "@/lib/utils";

export interface StudyRecapItem {
  bookLabel: string;
  statement: string;
  options: { letter: string; text: string }[];
  playerOption: string;
  correctOption: string;
  explanation: string;
  reference: string;
}

const optionLetter = (letter: string) => letter.toUpperCase();

export function StudyRecap({
  matchId,
  answers,
  className,
}: {
  matchId: string;
  answers: StudyRecapItem[];
  className?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaps, setRecaps] = useState<Record<number, string> | null>(null);

  if (!answers.length) return null;

  const generate = async () => {
    setBusy(true);
    setError(null);
    try {
      const { items } = await generateStudyRecap({
        data: { matchId },
      });
      if (!items.length) {
        setError("A IA não retornou explicações agora. Tente novamente mais tarde.");
      } else {
        setRecaps(Object.fromEntries(items.map((i) => [i.index, i.recap])));
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : "Não foi possível gerar o recap agora.";
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className={cn(
        "mt-4 rounded-2xl border-2 border-border bg-card p-4 shadow-soft sm:p-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-peach text-ink shadow-xs">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-bold text-ink">Recap de estudo</h2>
          <p className="text-xs text-muted-foreground">
            Revisão opcional das respostas que você errou. A geração usa IA do Lovable somente após a partida e pode consumir créditos; nada é enviado à IA durante o jogo.
          </p>
        </div>
      </div>

      {!recaps && (
        <div className="mt-4 rounded-xl border border-border/60 bg-cream/70 p-3 text-center">
          <p className="text-sm font-semibold text-ink">
            {answers.length === 1
              ? "Você errou 1 resposta nesta partida."
              : `Você errou ${answers.length} respostas nesta partida.`}
          </p>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="mt-2"
            onClick={() => void generate()}
            disabled={busy}
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {busy ? "Preparando explicações..." : "Gerar explicações de estudo"}
          </Button>
        </div>
      )}

      {error && (
        <p className="mt-3 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </p>
      )}

      {recaps && (
        <ol className="mt-4 space-y-3">
          {answers.map((answer, index) => (
            <li
              key={`${index}-${answer.statement.slice(0, 24)}`}
              className="rounded-xl border border-border/60 bg-cream/70 p-3"
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                <span className="rounded-full bg-forest px-2.5 py-0.5 text-white">
                  {answer.bookLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <BookOpen className="h-3 w-3" /> {answer.reference}
                </span>
              </div>
              <p className="mt-2 text-sm font-bold leading-snug text-ink">{answer.statement}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">
                <span className="font-bold text-destructive">
                  Sua resposta: {optionLetter(answer.playerOption)}
                </span>
                {" · "}
                <span className="font-bold text-forest">
                  Correta: {optionLetter(answer.correctOption)}
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {recaps[index] ?? answer.explanation}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
