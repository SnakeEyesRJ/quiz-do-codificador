import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Generates the optional study recap from the authoritative answer/question
 * records. The browser sends only the match id; it cannot forge the answer key,
 * question text, explanation, or reference sent to the AI provider.
 */
export const generateStudyRecap = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ matchId: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin, getOptionalUserId } = await import("./game.server");
    const userId = await getOptionalUserId();

    const { data: match, error: matchError } = await supabaseAdmin
      .from("matches")
      .select("id, user_id, status")
      .eq("id", data.matchId)
      .maybeSingle();
    if (matchError) throw new Error("Não foi possível validar a partida.");
    if (!match) throw new Error("Partida não encontrada.");
    if (match.status !== "finished") {
      throw new Error("O recap de estudo fica disponível somente no fim da partida.");
    }
    if (match.user_id && match.user_id !== userId) {
      throw new Error("Partida não pertence a este jogador.");
    }

    const { data: answerRows, error: answerError } = await supabaseAdmin
      .from("answers")
      .select("question_id, player_option, answered_at, served_at")
      .eq("match_id", match.id)
      .not("answered_at", "is", null)
      .order("served_at", { ascending: true });
    if (answerError) throw new Error("Não foi possível carregar as respostas da partida.");

    const missed = (answerRows ?? []).filter((row) =>
      row.player_option && row.question_id,
    );
    if (!missed.length) return { items: [] };

    const questionIds = [...new Set(missed.map((row) => row.question_id))];
    const { data: questions, error: questionError } = await supabaseAdmin
      .from("questions")
      .select("id, book, statement, option_a, option_b, option_c, option_d, option_e, correct_option, explanation, reference")
      .in("id", questionIds);
    if (questionError) throw new Error("Não foi possível carregar o conteúdo das perguntas.");

    const byId = new Map((questions ?? []).map((question) => [question.id, question]));
    const bookNames: Record<string, string> = {
      livro_espiritos: "O Livro dos Espíritos",
      evangelho: "O Evangelho Segundo o Espiritismo",
      ceu_inferno: "O Céu e o Inferno",
      genese: "A Gênese",
      livro_mediuns: "O Livro dos Médiuns",
      obras_postumas: "Obras Póstumas",
      o_que_e_espiritismo: "O Que é o Espiritismo",
      nosso_lar: "Nosso Lar",
      os_mensageiros: "Os Mensageiros",
    };

    const authoritativeAnswers = missed.flatMap((answer) => {
      const question = byId.get(answer.question_id);
      if (!question || answer.player_option === question.correct_option) return [];
      return [{
        book: bookNames[question.book] ?? question.book,
        statement: question.statement,
        options: [
          { letter: "A", text: question.option_a },
          { letter: "B", text: question.option_b },
          { letter: "C", text: question.option_c },
          { letter: "D", text: question.option_d },
          { letter: "E", text: question.option_e },
        ],
        playerOption: answer.player_option,
        correctOption: question.correct_option,
        explanation: question.explanation,
        reference: question.reference,
      }];
    }).slice(0, 9);

    if (!authoritativeAnswers.length) return { items: [] };

    const { explainMissedAnswers } = await import("./recap.server");
    const items = await explainMissedAnswers(authoritativeAnswers);
    return { items };
  });
