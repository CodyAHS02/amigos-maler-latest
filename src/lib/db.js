import postgres from "postgres";

const globalForDatabase = globalThis;

function createSqlClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return postgres(process.env.DATABASE_URL, {
    max: 10,
    prepare: false,
    idle_timeout: 20,
    connect_timeout: 10
  });
}

function getSqlClient() {
  if (!globalForDatabase.sql) {
    globalForDatabase.sql = createSqlClient();
  }

  return globalForDatabase.sql;
}

// Keep database initialization lazy so static/public pages can build without a
// database. Database-backed routes still fail clearly when invoked without
// DATABASE_URL, rather than breaking the entire deployment during module load.
export const sql = new Proxy(function lazySql() {}, {
  apply(_target, _thisArg, args) {
    return getSqlClient()(...args);
  },
  get(_target, property) {
    const client = getSqlClient();
    const value = client[property];
    return typeof value === "function" ? value.bind(client) : value;
  }
});
