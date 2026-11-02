/**
 * Banco de dados em memória que imita o subconjunto da API do Supabase (PostgREST)
 * usado pelo modo multiplayer. Serve apenas para testes.
 */
type Row = Record<string, any>;

const DEFAULTS: Record<string, () => Row> = {
  matches: () => ({
    status: "in_progress",
    current_round: 1,
    player_rounds: 0,
    codificador_rounds: 0,
    winner: null,
    finished_at: null,
    created_at: new Date().toISOString(),
  }),
  rounds: () => ({ player_score: 0, codificador_score: 0, winner: null }),
  answers: () => ({
    player_option: null,
    player_correct: null,
    codificador_option: null,
    codificador_correct: null,
    answered_at: null,
  }),
};

export class FakeDb {
  tables: Record<string, Row[]> = { matches: [], rounds: [], answers: [], questions: [], profiles: [] };
  /** Colunas que o "banco remoto" não possui (insert falha). */
  missingColumns: Record<string, string[]> = {};
  private seq = 0;

  uuid(): string {
    this.seq++;
    const hex = this.seq.toString(16).padStart(12, "0");
    return `00000000-0000-4000-8000-${hex}`;
  }

  from(table: string) {
    return new Query(this, table);
  }
}

type Op = "select" | "insert" | "update" | "delete";

class Query {
  private op: Op = "select";
  private payload: any;
  private filters: ((r: Row) => boolean)[] = [];
  private orders: { col: string; asc: boolean }[] = [];
  private max: number | null = null;
  private returning = true;
  private mode: "many" | "single" | "maybe" = "many";

  constructor(
    private db: FakeDb,
    private table: string,
  ) {}

  select(_cols?: string) {
    this.returning = true;
    return this;
  }
  insert(payload: Row | Row[]) {
    this.op = "insert";
    this.payload = payload;
    this.returning = false;
    return this;
  }
  update(patch: Row) {
    this.op = "update";
    this.payload = patch;
    this.returning = false;
    return this;
  }
  delete() {
    this.op = "delete";
    this.returning = false;
    return this;
  }
  eq(col: string, val: any) {
    this.filters.push((r) => r[col] === val);
    return this;
  }
  is(col: string, val: null) {
    this.filters.push((r) => (r[col] ?? null) === val);
    return this;
  }
  in(col: string, vals: any[]) {
    this.filters.push((r) => vals.includes(r[col]));
    return this;
  }
  like(col: string, pattern: string) {
    const re = new RegExp(
      "^" + pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/%/g, ".*") + "$",
    );
    this.filters.push((r) => typeof r[col] === "string" && re.test(r[col]));
    return this;
  }
  order(col: string, opts?: { ascending?: boolean }) {
    this.orders.push({ col, asc: opts?.ascending !== false });
    return this;
  }
  limit(n: number) {
    this.max = n;
    return this;
  }
  single() {
    this.mode = "single";
    return this;
  }
  maybeSingle() {
    this.mode = "maybe";
    return this;
  }

  private exec(): { data: any; error: { message: string } | null } {
    const rows = this.db.tables[this.table]!;
    let affected: Row[] = [];

    if (this.op === "select") {
      affected = rows.filter((r) => this.filters.every((f) => f(r)));
    } else if (this.op === "insert") {
      const items: Row[] = Array.isArray(this.payload) ? this.payload : [this.payload];
      for (const item of items) {
        for (const col of this.db.missingColumns[this.table] ?? []) {
          if (col in item) {
            return { data: null, error: { message: `column ${this.table}.${col} does not exist` } };
          }
        }
        const row = { id: this.db.uuid(), ...(DEFAULTS[this.table]?.() ?? {}), ...item };
        rows.push(row);
        affected.push(row);
      }
    } else if (this.op === "update") {
      affected = rows.filter((r) => this.filters.every((f) => f(r)));
      for (const r of affected) Object.assign(r, this.payload);
    } else {
      affected = rows.filter((r) => this.filters.every((f) => f(r)));
      for (const r of affected) {
        rows.splice(rows.indexOf(r), 1);
        if (this.table === "matches") {
          this.db.tables["rounds"] = this.db.tables["rounds"]!.filter((x) => x["match_id"] !== r["id"]);
          this.db.tables["answers"] = this.db.tables["answers"]!.filter((x) => x["match_id"] !== r["id"]);
        }
      }
    }

    if (this.orders.length) {
      affected = [...affected].sort((a, b) => {
        for (const { col, asc } of this.orders) {
          if (a[col] < b[col]) return asc ? -1 : 1;
          if (a[col] > b[col]) return asc ? 1 : -1;
        }
        return 0;
      });
    }
    if (this.max !== null) affected = affected.slice(0, this.max);

    // Sem .select() após insert/update/delete o PostgREST não devolve linhas.
    if (this.op !== "select" && !this.returning) return { data: null, error: null };

    const copy = affected.map((r) => ({ ...r }));
    if (this.mode === "single") {
      return copy.length === 1
        ? { data: copy[0], error: null }
        : { data: null, error: { message: "JSON object requested, multiple (or no) rows returned" } };
    }
    if (this.mode === "maybe") return { data: copy[0] ?? null, error: null };
    return { data: copy, error: null };
  }

  then<T>(resolve: (v: any) => T, reject?: (e: any) => T) {
    try {
      return Promise.resolve(this.exec()).then(resolve, reject);
    } catch (e) {
      return Promise.reject(e).then(resolve, reject);
    }
  }
}

