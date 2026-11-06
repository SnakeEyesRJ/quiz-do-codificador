import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { DIFFICULTY_LEVELS } from "./game-rules";
import { ROOM_CODE_LENGTH, type MpPlayers, type MpState } from "./multiplayer";

const LETTERS = ["A", "B", "C", "D", "E"] as const;

export const mpCreateRoom = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        totalRounds: z.union([z.literal(3), z.literal(5), z.literal(7), z.literal(9)]).default(3),
        difficulty: z.enum(DIFFICULTY_LEVELS).default("normal"),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ code: string }> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { createRoom } = await import("./multiplayer.server");
    const user = await requireUser();
    return createRoom(supabaseAdmin, user, data);
  });

export const mpJoinRoom = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        code: z
          .string()
          .trim()
          .min(1)
          .max(ROOM_CODE_LENGTH + 4),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ code: string }> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { joinRoom } = await import("./multiplayer.server");
    const user = await requireUser();
    return joinRoom(supabaseAdmin, user, data.code);
  });

export const mpState = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        code: z
          .string()
          .trim()
          .min(1)
          .max(ROOM_CODE_LENGTH + 4),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<MpState> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { getRoomState } = await import("./multiplayer.server");
    const user = await requireUser();
    return getRoomState(supabaseAdmin, data.code, user.id);
  });

export const mpAnswer = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        code: z
          .string()
          .trim()
          .min(1)
          .max(ROOM_CODE_LENGTH + 4),
        answerId: z.string().uuid(),
        option: z.enum(LETTERS),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<MpState> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { submitRoomAnswer } = await import("./multiplayer.server");
    const user = await requireUser();
    return submitRoomAnswer(supabaseAdmin, data.code, user.id, data.answerId, data.option);
  });

export const mpLeave = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        code: z
          .string()
          .trim()
          .min(1)
          .max(ROOM_CODE_LENGTH + 4),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { leaveRoom } = await import("./multiplayer.server");
    const user = await requireUser();
    await leaveRoom(supabaseAdmin, user.id, data.code);
    return { ok: true };
  });

export const mpPlayers = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z
      .object({
        code: z
          .string()
          .trim()
          .min(1)
          .max(ROOM_CODE_LENGTH + 4),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<MpPlayers> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { getRoomPlayers } = await import("./multiplayer.server");
    const user = await requireUser();
    return getRoomPlayers(supabaseAdmin, data.code, user.id);
  });

/** Partidas multiplayer em que o usuário entrou como convidado (aparecem no histórico). */
export const mpGuestHistory = createServerFn({ method: "POST" }).handler(
  async (): Promise<Record<string, any>[]> => {
    const { supabaseAdmin, requireUser } = await import("./game.server");
    const { listGuestMatches } = await import("./multiplayer.server");
    const user = await requireUser();
    return listGuestMatches(supabaseAdmin, user.id);
  },
);
