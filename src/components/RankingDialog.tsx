import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getRanking, type RankingEntry } from "@/lib/ranking.functions";

interface RankingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RankingDialog({ open, onOpenChange }: RankingDialogProps) {
  const [entries, setEntries] = useState<RankingEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setEntries(null);
    setError(null);
    getRanking()
      .then((rows) => {
        if (!cancelled) setEntries(rows);
      })
      .catch(() => {
        if (!cancelled) setError("Não foi possível carregar o ranking.");
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Trophy className="h-5 w-5 text-terracotta" />
            Ranking — Top 10
          </DialogTitle>
          <DialogDescription>Os jogadores com mais vitórias.</DialogDescription>
        </DialogHeader>
        {error ? (
          <p className="text-sm text-muted-foreground">{error}</p>
        ) : entries === null ? (
          <p className="text-sm text-muted-foreground">Carregando…</p>
        ) : entries.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Ainda não há nenhum jogador na tabela de Ranking
          </p>
        ) : (
          <ol className="max-h-80 space-y-1 overflow-y-auto pr-1">
            {entries.map((e) => (
              <li
                key={e.rank}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm odd:bg-peach/50"
              >
                <span className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                  <span className="w-6 shrink-0 text-right font-display font-bold text-terracotta">
                    {e.rank}
                  </span>
                  <span className="truncate font-semibold">{e.name}</span>
                </span>
                <span className="ml-2 shrink-0 text-muted-foreground">
                  {e.wins} {e.wins === 1 ? "vitória" : "vitórias"}
                </span>
              </li>
            ))}
          </ol>
        )}
      </DialogContent>
    </Dialog>
  );
}
