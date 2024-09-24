import { env } from "process";
import * as schema from "./schema"
import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

declare global {
  // eslint-disable-next-line no-var only var works here
  var database: PostgresJsDatabase<typeof schema> | undefined;
}

let database: PostgresJsDatabase<typeof schema>;
let pg: ReturnType<typeof postgres>;

if (env.NODE_ENV === "production") {
  const databaseUrl = env.DATABASE_URL || ""; // הגדר מחרוזת ריקה כברירת מחדל אם לא מוגדר
  pg = postgres(databaseUrl);
  database = drizzle(pg, { schema });
} else {
  if (!global.database) {
    const databaseUrl = env.DATABASE_URL || ""; // הגדר מחרוזת ריקה כברירת מחדל אם לא מוגדר
    pg = postgres(databaseUrl);
    global.database = drizzle(pg, { schema });
  }
  database = global.database;
}

export { database, pg };