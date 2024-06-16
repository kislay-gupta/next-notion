import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  console.log("database url not found");
}

export default defineConfig({
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    user: process.env.DB_USER || "",
    password: process.env.PW || "",
    database: "postgres",
  },
});
