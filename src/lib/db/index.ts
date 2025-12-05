import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { postsTable } from "./schema/users";

config({ path: ".env.local" }); // or .env.local

const databaseUrl = process.env.DATABASE_URL || "postgres://mock:mock@mock.com/mock";
// if (!databaseUrl) {
//   throw new Error("DATABASE_URL environment variable is required");
// }

const sql = neon(databaseUrl);
export const db = drizzle({
  client: sql,
  schema: {
    posts: postsTable,
  },
});
