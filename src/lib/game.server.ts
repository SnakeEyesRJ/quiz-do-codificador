import { getRequest } from "@tanstack/react-start/server";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { O_QUE_E_ESPIRITISMO_QUESTIONS } from "@/data/o-que-e-espiritismo-questions";

/** Returns the signed-in user id when a valid bearer token is present, otherwise null (guest). */
export async function getOptionalUserId(): Promise<string | null> {
  const auth = getRequest()?.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const token = auth.slice(7);
  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data.user) return null;
  return data.user.id;
}

/** Exige um usuário logado (modo multiplayer) e devolve seu id e nome de exibição. */
export async function requireUser(): Promise<{ id: string; name: string }> {
  const auth = getRequest()?.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) {
    throw new Error("Entre com sua conta Google para jogar no modo multiplayer.");
  }
  const { data, error } = await supabaseAdmin.auth.getUser(auth.slice(7));
  if (error || !data.user) {
    throw new Error("Sua sessão expirou. Entre novamente com o Google.");
  }
  const u = data.user;
  const meta = (u.user_metadata ?? {}) as Record<string, any>;
  const { data: p } = await supabaseAdmin
    .from("profiles")
    .select("display_name")
    .eq("id", u.id)
    .maybeSingle();
  const name: string =
    p?.display_name ||
    meta["display_name"] ||
    meta["name"] ||
    meta["full_name"] ||
    u.email?.split("@")[0] ||
    "Jogador";
  return { id: u.id, name };
}

export async function loadOwnedMatch(matchId: string) {
  const userId = await getOptionalUserId();
  const { data: match, error } = await supabaseAdmin
    .from("matches")
    .select("*")
    .eq("id", matchId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!match) throw new Error("Partida não encontrada.");
  if (match.user_id && match.user_id !== userId)
    throw new Error("Partida não pertence a este jogador.");
  return match;
}

export async function getCurrentRound(matchId: string, number: number) {
  const { data, error } = await supabaseAdmin
    .from("rounds")
    .select("*")
    .eq("match_id", matchId)
    .eq("number", number)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

const OQE_BY_CODE = new Map(O_QUE_E_ESPIRITISMO_QUESTIONS.map((q) => [q.code, q]));

export function overlayCleanQuestion<T extends { code?: number; book?: string | null; statement?: string; explanation?: string } & Record<string, any>>(
  q: T,
): T {
  const seed = q.code !== undefined ? OQE_BY_CODE.get(Number(q.code)) : undefined;
  if (
    seed &&
    (q.book === "o_que_e_espiritismo" ||
      (q.book === "obras_postumas" && Number(q.code) >= 801) ||
      String(q.statement ?? "").includes("├") ||
      String(q.explanation ?? "").includes("├"))
  ) {
    return {
      ...q,
      statement: seed.statement,
      option_a: seed.option_a,
      option_b: seed.option_b,
      option_c: seed.option_c,
      option_d: seed.option_d,
      option_e: seed.option_e,
      correct_option: seed.correct_option,
      explanation: seed.explanation,
      reference: seed.reference,
      difficulty: seed.difficulty,
    };
  }
  return q;
}

let oqeSynced = false;

export async function ensureOQueEEspiritismoQuestions() {
  if (oqeSynced) return;
  try {
    const { data: allRows, error: fetchErr } = await supabaseAdmin
      .from("questions")
      .select("id, code, statement, book, difficulty, active");
    if (fetchErr || !allRows) return;

    const targetStatements = new Set(O_QUE_E_ESPIRITISMO_QUESTIONS.map((q) => q.statement));
    const existingByStatement = new Map<string, (typeof allRows)[number]>();
    const existingOqeByCode = new Map<number, (typeof allRows)[number]>();
    const usedCodes = new Set<number>();
    let maxCode = 900;
    let hasMojibake = false;

    for (const row of allRows) {
      existingByStatement.set(row.statement, row);
      const numCode = Number(row.code) || 0;
      usedCodes.add(numCode);
      if (numCode > maxCode) maxCode = numCode;
      if (String(row.statement ?? "").includes("├")) {
        hasMojibake = true;
      }
      if (
        numCode >= 801 &&
        (row.book === "o_que_e_espiritismo" ||
          row.book === "obras_postumas" ||
          String(row.statement ?? "").includes("├"))
      ) {
        existingOqeByCode.set(numCode, row);
      }
    }

    const activeTargetRows = allRows.filter(
      (r) => r.active && targetStatements.has(r.statement),
    );
    const diffCounts: Record<string, number> = { facil: 0, medio: 0, dificil: 0, expert: 0 };
    for (const r of activeTargetRows) {
      diffCounts[r.difficulty] = (diffCounts[r.difficulty] || 0) + 1;
    }

    const extraActiveIds = allRows
      .filter(
        (r) =>
          r.active &&
          !targetStatements.has(r.statement) &&
          (r.book === "o_que_e_espiritismo" ||
            (r.book === "obras_postumas" && Number(r.code) >= 801 && Number(r.code) <= 900) ||
            String(r.statement ?? "").includes("├")),
      )
      .map((r) => r.id);

    if (
      !hasMojibake &&
      activeTargetRows.length === 50 &&
      extraActiveIds.length === 0 &&
      (diffCounts["facil"] ?? 0) >= 10 &&
      (diffCounts["medio"] ?? 0) >= 10 &&
      (diffCounts["dificil"] ?? 0) >= 10 &&
      (diffCounts["expert"] ?? 0) >= 10
    ) {
      oqeSynced = true;
      return;
    }

    const keptIds = new Set<string>();
    const rowsToUpsert: any[] = [];

    for (const q of O_QUE_E_ESPIRITISMO_QUESTIONS) {
      const byStmt = existingByStatement.get(q.statement);
      const byCode = existingOqeByCode.get(q.code);
      const targetRow = byStmt ?? byCode;

      if (targetRow && (!byStmt || targetRow.id === byStmt.id)) {
        keptIds.add(targetRow.id);
        const { error: updErr } = await supabaseAdmin
          .from("questions")
          .update({
            book: "o_que_e_espiritismo",
            statement: q.statement,
            option_a: q.option_a,
            option_b: q.option_b,
            option_c: q.option_c,
            option_d: q.option_d,
            option_e: q.option_e,
            correct_option: q.correct_option,
            explanation: q.explanation,
            reference: q.reference,
            difficulty: q.difficulty,
            active: true,
          })
          .eq("id", targetRow.id);

        if (updErr) {
          await supabaseAdmin
            .from("questions")
            .update({
              book: "obras_postumas",
              statement: q.statement,
              option_a: q.option_a,
              option_b: q.option_b,
              option_c: q.option_c,
              option_d: q.option_d,
              option_e: q.option_e,
              correct_option: q.correct_option,
              explanation: q.explanation,
              reference: q.reference,
              difficulty: q.difficulty,
              active: true,
            })
            .eq("id", targetRow.id);
        }
      } else {
        let safeCode = q.code;
        if (usedCodes.has(safeCode)) {
          safeCode = ++maxCode;
        }
        usedCodes.add(safeCode);
        rowsToUpsert.push({
          code: safeCode,
          book: "o_que_e_espiritismo",
          statement: q.statement,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          option_e: q.option_e,
          correct_option: q.correct_option,
          explanation: q.explanation,
          reference: q.reference,
          difficulty: q.difficulty,
          active: true,
        });
      }
    }

    if (rowsToUpsert.length > 0) {
      const { error: upsertErr } = await supabaseAdmin
        .from("questions")
        .upsert(rowsToUpsert, { onConflict: "statement" });

      if (upsertErr) {
        await supabaseAdmin.from("questions").upsert(
          rowsToUpsert.map((r) => ({ ...r, book: "obras_postumas" })),
          { onConflict: "statement" },
        );
      }
    }

    const toDeactivate = extraActiveIds.filter((id) => !keptIds.has(id));
    if (toDeactivate.length > 0) {
      await supabaseAdmin
        .from("questions")
        .update({ active: false })
        .in("id", toDeactivate);
    }

    oqeSynced = true;
  } catch (err) {
    console.warn("[OQueEEspiritismoSync]", err);
  }
}

export { supabaseAdmin };
