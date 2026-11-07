import { beforeEach, describe, expect, it } from "vitest";
import { FakeDb } from "@/test/fake-supabase";
import {
  applyMultiplayerAnswers,
  buildRoomName,
  generateRoomCode,
  isMultiplayerName,
  isValidRoomCode,
  normalizeRoomCode,
  parseRoomName,
  QUESTION_SECONDS,
  REVEAL_SECONDS,
  ROOM_CODE_LENGTH,
  type Letter,
} from "./multiplayer";
import {
  createRoom,
  getRoomPlayers,
  getRoomState,
  joinRoom,
  leaveRoom,
  listGuestMatches,
  submitRoomAnswer,
  type Admin,
} from "./multiplayer.server";
import { cleanPlayerName } from "./game-rules";

const HOST = { id: "11111111-1111-4111-8111-111111111111", name: "Maria" };
const GUEST = { id: "22222222-2222-4222-8222-222222222222", name: "João" };
const OTHER = { id: "33333333-3333-4333-8333-333333333333", name: "Intruso" };

describe("utilitários do multiplayer", () => {
  it("gera códigos válidos e normaliza a digitação", () => {
    const code = generateRoomCode();
    expect(code).toHaveLength(ROOM_CODE_LENGTH);
    expect(isValidRoomCode(code)).toBe(true);
    expect(normalizeRoomCode(" ab-c d2 3xyz ")).toBe("ABCD2");
    expect(isValidRoomCode("AB0D2")).toBe(false);
  });

  it("monta e lê o nome da sala com tags", () => {
    const waiting = buildRoomName({
      hostName: "Ma[ri]a",
      code: "ABCDE",
      totalRounds: 5,
      difficulty: "dificil",
    });
    expect(waiting).toBe("Maria [MP:ABCDE] [5R] [D:dificil]");
    expect(parseRoomName(waiting)).toMatchObject({
      hostName: "Maria",
      code: "ABCDE",
      guestId: null,
      totalRounds: 5,
      difficulty: "dificil",
    });

    const full = buildRoomName({
      hostName: "Maria",
      code: "ABCDE",
      guestId: GUEST.id,
      guestName: "João da Silva",
      totalRounds: 3,
      difficulty: "normal",
    });
    expect(parseRoomName(full)).toMatchObject({
      hostName: "Maria",
      guestId: GUEST.id,
      guestName: "João da Silva",
    });
    expect(isMultiplayerName(full)).toBe(true);
    expect(isMultiplayerName("Jogador [3R] [D:normal]")).toBe(false);
    expect(cleanPlayerName(full)).toBe("Maria");
  });

  it("pontua cada acerto e só encerra a rodada com vantagem no alvo de 10", () => {
    expect(applyMultiplayerAnswers(0, 0, true, true)).toMatchObject({ host: 1, guest: 1 });
    expect(applyMultiplayerAnswers(0, 0, false, false)).toMatchObject({ host: 0, guest: 0 });
    expect(applyMultiplayerAnswers(9, 3, true, false).roundWinner).toBe("player");
    expect(applyMultiplayerAnswers(4, 9, false, true).roundWinner).toBe("codificador");
    // Empate no alvo: a rodada continua
    expect(applyMultiplayerAnswers(9, 9, true, true).roundWinner).toBeNull();
    expect(applyMultiplayerAnswers(10, 10, false, false).roundWinner).toBeNull();
    expect(applyMultiplayerAnswers(10, 10, true, false).roundWinner).toBe("player");
  });
});

describe("fluxo da sala multiplayer", () => {
  let db: FakeDb;
  let admin: Admin;
  let clock: number;
  const now = () => new Date(clock);
  const tick = (seconds: number) => {
    clock += seconds * 1000;
  };
  const letters: Letter[] = ["A", "B", "C", "D", "E"];

  const correctFor = (code: number): Letter =>
    db.tables["questions"]!.find((q) => q["code"] === code)!["correct_option"] as Letter;
  const wrongFor = (code: number): Letter => (correctFor(code) === "A" ? "B" : "A");

  beforeEach(() => {
    db = new FakeDb();
    admin = db as unknown as Admin;
    clock = Date.parse("2026-01-01T12:00:00Z");
    const diffs = ["facil", "medio", "dificil", "expert"];
    for (let i = 1; i <= 120; i++) {
      db.tables["questions"]!.push({
        id: `q-${i}`,
        code: i,
        book: "livro_espiritos",
        statement: `Pergunta ${i}`,
        option_a: "a",
        option_b: "b",
        option_c: "c",
        option_d: "d",
        option_e: "e",
        correct_option: letters[i % 5],
        explanation: `Explicação ${i}`,
        reference: `Ref ${i}`,
        difficulty: diffs[i % diffs.length],
        active: true,
      });
    }
    db.tables["profiles"]!.push(
      { id: HOST.id, display_name: "Maria", avatar_url: "data:image/png;base64,AAA" },
      { id: GUEST.id, display_name: "João", avatar_url: null },
    );
  });

  const createAndJoin = async (totalRounds = 3) => {
    const { code } = await createRoom(admin, HOST, { totalRounds, difficulty: "normal" }, now());
    await joinRoom(admin, GUEST, code, now());
    return code;
  };

  it("cria a sala e fica aguardando o adversário", async () => {
    const { code } = await createRoom(admin, HOST, { totalRounds: 3, difficulty: "normal" }, now());
    expect(isValidRoomCode(code)).toBe(true);

    const state = await getRoomState(admin, code, HOST.id, now());
    expect(state).toMatchObject({
      phase: "waiting",
      role: "host",
      totalRounds: 3,
      guest: null,
      question: null,
      reveal: null,
    });
    expect(state.host.name).toBe("Maria");
  });

  it("funciona mesmo sem a coluna difficulty no banco remoto", async () => {
    db.missingColumns["matches"] = ["difficulty"];
    const { code } = await createRoom(admin, HOST, { totalRounds: 5, difficulty: "expert" }, now());
    const state = await getRoomState(admin, code, HOST.id, now());
    expect(state.difficulty).toBe("expert");
    expect(state.totalRounds).toBe(5);
  });

  it("recria a sala do anfitrião em vez de acumular salas vazias", async () => {
    const first = await createRoom(admin, HOST, { totalRounds: 3, difficulty: "normal" }, now());
    const second = await createRoom(admin, HOST, { totalRounds: 3, difficulty: "normal" }, now());
    expect(db.tables["matches"]).toHaveLength(1);
    await expect(getRoomState(admin, first.code, HOST.id, now())).rejects.toThrow(/não encontrada/);
    expect((await getRoomState(admin, second.code, HOST.id, now())).phase).toBe("waiting");
  });

  it("o convidado entra e os dois recebem a mesma pergunta", async () => {
    const code = await createAndJoin();
    const host = await getRoomState(admin, code, HOST.id, now());
    const guest = await getRoomState(admin, code, GUEST.id, now());

    expect(host.phase).toBe("playing");
    expect(guest.role).toBe("guest");
    expect(guest.guest?.name).toBe("João");
    expect(host.question?.answerId).toBeTruthy();
    expect(host.question?.answerId).toBe(guest.question?.answerId);
    expect(host.question?.options).toHaveLength(5);
    expect(db.tables["answers"]).toHaveLength(1);
  });

  it("recusa sala cheia, sala inexistente e quem não participa", async () => {
    const code = await createAndJoin();
    await expect(joinRoom(admin, OTHER, code, now())).rejects.toThrow(/completa/);
    await expect(joinRoom(admin, OTHER, "ZZZZZ", now())).rejects.toThrow(/não encontrada/);
    await expect(getRoomState(admin, code, OTHER.id, now())).rejects.toThrow(/não faz parte/);
    // Quem já está na sala pode voltar
    await expect(joinRoom(admin, GUEST, code, now())).resolves.toEqual({ code });
  });

  it("recusa sala que expirou aguardando adversário", async () => {
    const { code } = await createRoom(admin, HOST, { totalRounds: 3, difficulty: "normal" }, now());
    tick(60 * 4);
    tick(60 * 60 * 4 - 60 * 4);
    await expect(joinRoom(admin, GUEST, code, now())).rejects.toThrow(/expirou/);
  });

  it("não revela o gabarito antes de os dois responderem", async () => {
    const code = await createAndJoin();
    const s = await getRoomState(admin, code, HOST.id, now());
    const after = await submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, "C", now());

    expect(after.myAnswered).toBe(true);
    expect(after.myOption).toBe("C");
    expect(after.opponentAnswered).toBe(false);
    expect(after.reveal).toBeNull();
    expect(JSON.stringify(after)).not.toContain("correct");

    const guestView = await getRoomState(admin, code, GUEST.id, now());
    expect(guestView.opponentAnswered).toBe(true);
    expect(guestView.myAnswered).toBe(false);
    expect(guestView.myOption).toBeNull();
    expect(guestView.reveal).toBeNull();
  });

  it("não aceita resposta duplicada", async () => {
    const code = await createAndJoin();
    const s = await getRoomState(admin, code, HOST.id, now());
    await submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, "A", now());
    await expect(
      submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, "B", now()),
    ).rejects.toThrow(/já respondeu/);
  });

  it("resolve a pergunta quando os dois respondem e pontua cada acerto", async () => {
    const code = await createAndJoin();
    const s = await getRoomState(admin, code, HOST.id, now());
    const qCode = s.question!.code;

    await submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, correctFor(qCode), now());
    const result = await submitRoomAnswer(
      admin,
      code,
      GUEST.id,
      s.question!.answerId,
      wrongFor(qCode),
      now(),
    );

    expect(result.question).toBeNull();
    expect(result.reveal).toMatchObject({
      correctOption: correctFor(qCode),
      hostCorrect: true,
      guestCorrect: false,
      hostScore: 1,
      guestScore: 0,
      nextInSeconds: REVEAL_SECONDS,
    });
    expect(result.reveal?.explanation).toContain("Explicação");
    expect(result).toMatchObject({ hostScore: 1, guestScore: 0 });

    // O adversário vê exatamente o mesmo resultado
    const host = await getRoomState(admin, code, HOST.id, now());
    expect(host.reveal?.guestOption).toBe(wrongFor(qCode));
  });

  it("espera o tempo do gabarito e então serve a próxima pergunta", async () => {
    const code = await createAndJoin();
    const first = await getRoomState(admin, code, HOST.id, now());
    await submitRoomAnswer(admin, code, HOST.id, first.question!.answerId, "A", now());
    await submitRoomAnswer(admin, code, GUEST.id, first.question!.answerId, "A", now());

    tick(REVEAL_SECONDS - 1);
    expect((await getRoomState(admin, code, HOST.id, now())).question).toBeNull();

    tick(1);
    // Os dois consultando ao mesmo tempo não duplicam a pergunta
    const [h, g] = await Promise.all([
      getRoomState(admin, code, HOST.id, now()),
      getRoomState(admin, code, GUEST.id, now()),
    ]);
    expect(h.question).not.toBeNull();
    expect(h.question?.answerId).toBe(g.question?.answerId);
    expect(h.question?.answerId).not.toBe(first.question?.answerId);
    expect(h.reveal).toBeNull();
    expect(db.tables["answers"]).toHaveLength(2);
  });

  it("não repete perguntas dentro da mesma partida", async () => {
    const code = await createAndJoin();
    const seen = new Set<number>();
    for (let i = 0; i < 12; i++) {
      const s = await getRoomState(admin, code, HOST.id, now());
      expect(seen.has(s.question!.code)).toBe(false);
      seen.add(s.question!.code);
      await submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, "A", now());
      await submitRoomAnswer(admin, code, GUEST.id, s.question!.answerId, "A", now());
      tick(REVEAL_SECONDS);
    }
  });

  it("considera errada a pergunta não respondida no tempo limite", async () => {
    const code = await createAndJoin();
    const s = await getRoomState(admin, code, HOST.id, now());
    const qCode = s.question!.code;
    await submitRoomAnswer(admin, code, HOST.id, s.question!.answerId, correctFor(qCode), now());

    tick(QUESTION_SECONDS + 3);
    const after = await getRoomState(admin, code, GUEST.id, now());
    expect(after.reveal).toMatchObject({
      hostCorrect: true,
      guestCorrect: false,
      guestOption: null,
      hostScore: 1,
      guestScore: 0,
    });
    await expect(
      submitRoomAnswer(admin, code, GUEST.id, s.question!.answerId, "A", now()),
    ).rejects.toThrow();
  });

  it("conta tempo restante da pergunta", async () => {
    const code = await createAndJoin();
    expect((await getRoomState(admin, code, HOST.id, now())).secondsLeft).toBe(QUESTION_SECONDS);
    tick(10);
    expect((await getRoomState(admin, code, HOST.id, now())).secondsLeft).toBe(
      QUESTION_SECONDS - 10,
    );
  });

  it("joga uma partida inteira até o vencedor, atualizando rodadas e placar", async () => {
    const code = await createAndJoin(3);
    let rounds = 0;
    let guard = 0;
    let state = await getRoomState(admin, code, HOST.id, now());
    const roundsSeen: number[] = [];

    while (state.phase !== "finished" && guard++ < 60) {
      const q = state.question!;
      await submitRoomAnswer(admin, code, HOST.id, q.answerId, correctFor(q.code), now());
      state = await submitRoomAnswer(admin, code, GUEST.id, q.answerId, wrongFor(q.code), now());
      if (state.reveal?.roundWinner) {
        rounds++;
        roundsSeen.push(state.reveal.roundNumber);
        expect(state.reveal.roundWinner).toBe("host");
        expect(state.reveal.hostScore).toBe(10);
      }
      tick(REVEAL_SECONDS);
      state = await getRoomState(admin, code, HOST.id, now());
    }

    expect(rounds).toBe(2);
    expect(roundsSeen).toEqual([1, 2]);
    expect(state).toMatchObject({
      phase: "finished",
      winner: "host",
      hostRounds: 2,
      guestRounds: 0,
      question: null,
    });
    expect(state.reveal?.nextInSeconds).toBeNull();
    const guestView = await getRoomState(admin, code, GUEST.id, now());
    expect(guestView).toMatchObject({ phase: "finished", winner: "host", role: "guest" });
    await expect(submitRoomAnswer(admin, code, HOST.id, "x", "A", now())).rejects.toThrow(
      /terminou/,
    );
  });

  it("zera o placar da rodada ao iniciar a seguinte", async () => {
    const code = await createAndJoin(5);
    let state = await getRoomState(admin, code, HOST.id, now());
    for (let i = 0; i < 10; i++) {
      const q = state.question!;
      await submitRoomAnswer(admin, code, GUEST.id, q.answerId, correctFor(q.code), now());
      state = await submitRoomAnswer(admin, code, HOST.id, q.answerId, wrongFor(q.code), now());
      tick(REVEAL_SECONDS);
      state = await getRoomState(admin, code, GUEST.id, now());
    }
    expect(state).toMatchObject({
      phase: "playing",
      currentRound: 2,
      guestRounds: 1,
      hostRounds: 0,
      hostScore: 0,
      guestScore: 0,
    });
    expect(state.question).not.toBeNull();
  });

  it("sair sozinho apaga a sala; sair no meio da partida dá vitória ao adversário", async () => {
    const { code: solo } = await createRoom(
      admin,
      HOST,
      { totalRounds: 3, difficulty: "normal" },
      now(),
    );
    await leaveRoom(admin, HOST.id, solo, now());
    expect(db.tables["matches"]).toHaveLength(0);

    const code = await createAndJoin();
    await expect(leaveRoom(admin, OTHER.id, code, now())).rejects.toThrow(/não faz parte/);
    await leaveRoom(admin, GUEST.id, code, now());
    const state = await getRoomState(admin, code, HOST.id, now());
    expect(state).toMatchObject({ phase: "finished", winner: "host" });
  });

  it("devolve nomes e avatares e lista partidas como convidado", async () => {
    const code = await createAndJoin();
    const players = await getRoomPlayers(admin, code, GUEST.id);
    expect(players.host).toMatchObject({ name: "Maria", avatarUrl: "data:image/png;base64,AAA" });
    expect(players.guest).toMatchObject({ id: GUEST.id, name: "João", avatarUrl: null });
    await expect(getRoomPlayers(admin, code, OTHER.id)).rejects.toThrow(/não faz parte/);

    expect(await listGuestMatches(admin, GUEST.id)).toHaveLength(1);
    expect(await listGuestMatches(admin, OTHER.id)).toHaveLength(0);
  });
});
