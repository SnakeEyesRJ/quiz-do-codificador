import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const answerShape = z.object({
  book: z.string().min(1).max(80),
  statement: z.string().min(1).max(2000),
  options: z
    .array(z.object({ letter: z.string().min(1).max(1), text: z.string().min(1).max(600) }))
    .min(2)
    .max(5),
  playerOption: z.string().min(1).max(1),
  correctOption: z.string().min(1).max(1),
  explanation: z.string().min(1).max(2000),
  reference: z.string().min(1).max(200),
});

/**
 * Optional post-game study recap. Only callable after a match is finished;
 * explains the answers the player missed, grounded strictly in the supplied
 * book content (no AI is used during gameplay).
 */
export const generateStudyRecap = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({ matchId: z.string().uuid(), answers: z.array(answerShape).min(1).max(9) })
      .parse(d),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin, getOptionalUserId } = await import("./game.server");
    const userId = await getOptionalUserId();
    const { data: match } = await supabaseAdmin
      .from("matches")
      .select("user_id, status")
      .eq("id", data.matchId)
      .maybeSingle();
    if (!match) throw new Error("Partida não encontrada.");
    if (match.status !== "finished") {
      throw new Error("O recap de estudo fica disponível somente no fim da partida.");
    }
    if (match.user_id && match.user_id !== userId) {
      throw new Error("Partida não pertence a este jogador.");
    }

    const { explainMissedAnswers } = await import("./recap.server");
    const items = await explainMissedAnswers(data.answers);
    return { items };
  });
