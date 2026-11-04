/**
 * Server-only helpers for the post-game study recap.
 * Uses the Lovable AI Gateway (Responses API) and is grounded ONLY in the
 * question content, official book explanation and reference supplied by the app.
 * Never import this module from client code.
 */
import { createOpenAI } from "@ai-sdk/openai";
import { jsonSchema, Output, streamText } from "ai";

const GATEWAY_BASE_URL = "https://ai.gateway.lovable.dev";
const LOVABLE_AIG_RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";
const RECAP_MODEL = "openai/gpt-6-astra";

/** Request-local run-ID fetch wrapper: the gateway mints the ID, never app code. */
function createLovableAiGatewayRunIdFetch(initialRunId?: string) {
  let runId = initialRunId?.trim() || undefined;
  return {
    fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(LOVABLE_AIG_RUN_ID_HEADER)) {
        headers.set(LOVABLE_AIG_RUN_ID_HEADER, runId);
      }
      const response = await fetch(input, { ...init, headers });
      runId ??= response.headers.get(LOVABLE_AIG_RUN_ID_HEADER)?.trim() || undefined;
      return response;
    },
    getRunId: () => runId,
  };
}

export interface MissedAnswerInput {
  book: string;
  statement: string;
  options: { letter: string; text: string }[];
  playerOption: string;
  correctOption: string;
  explanation: string;
  reference: string;
}

interface RecapOutput {
  items: { index: number; recap: string }[];
}

const recapOutputSchema = jsonSchema<RecapOutput>({
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: { type: "number" },
          recap: { type: "string" },
        },
        required: ["index", "recap"],
        additionalProperties: false,
      },
    },
  },
  required: ["items"],
  additionalProperties: false,
});

const SYSTEM_PROMPT = [
  "Você é o tutor de estudos do Quiz do Codificador, um quiz sobre a Doutrina Espírita.",
  "Receba uma lista de perguntas que o jogador errou, cada uma com o enunciado, as alternativas, a alternativa marcada, a alternativa correta, a explicação oficial do livro e a referência no livro.",
  "Para cada item, explique por que a alternativa marcada pelo jogador está incorreta e por que a correta é a certa.",
  "Restrição obrigatória: use EXCLUSIVAMENTE o conteúdo fornecido em cada item (enunciado, alternativas, resposta correta, explicação oficial e referência).",
  "Não use conhecimento externo, não acrescente doutrina, exemplos ou citações que não estejam nas informações fornecidas, e não invente páginas ou itens.",
  "Escreva em português do Brasil, em 2 a 4 frases claras, objetivas e encorajadoras, em tom de estudo.",
  "Responda todos os itens, na mesma ordem recebida, usando o campo index para identificá-los.",
].join("\n");

/**
 * Explains the missed answers of a finished match, grounded strictly in the
 * supplied book content. Streams from the gateway and consumes the final
 * structured object server-side.
 */
export async function explainMissedAnswers(
  answers: MissedAnswerInput[],
): Promise<{ index: number; recap: string }[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    throw new Error("O recurso de estudo com IA não está configurado neste ambiente.");
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: `${GATEWAY_BASE_URL.replace(/\/+$/, "").replace(/\/v1$/, "")}/v1`,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const payload = answers.map((item, index) => ({
    index,
    livro: item.book,
    enunciado: item.statement,
    alternativas: item.options,
    alternativa_marcada_pelo_jogador: item.playerOption,
    alternativa_correta: item.correctOption,
    explicacao_oficial_do_livro: item.explanation,
    referencia_no_livro: item.reference,
  }));

  const result = streamText({
    model: provider.responses(RECAP_MODEL),
    instructions: SYSTEM_PROMPT,
    messages: [{ role: "user", content: JSON.stringify(payload, null, 2) }],
    output: Output.object({ schema: recapOutputSchema, name: "recap_estudo" }),
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  const output = await result.output;
  const list = output?.items ?? [];
  return list
    .filter((item) => typeof item?.index === "number" && typeof item?.recap === "string" && item.recap.trim())
    .map((item) => ({ index: item.index, recap: item.recap.trim() }));
}
