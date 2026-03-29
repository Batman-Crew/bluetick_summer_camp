import "dotenv/config";
import { defineConfig } from "prisma/config";

// For Turso migrations, embed the auth token in the URL so the Prisma CLI can connect.
function buildMigrationUrl() {
  const tursoUrl = process.env["TURSO_DATABASE_URL"]
  const authToken = process.env["TURSO_AUTH_TOKEN"]
  if (tursoUrl) {
    return authToken ? `${tursoUrl}?authToken=${authToken}` : tursoUrl
  }
  return process.env["DATABASE_URL"]
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts",
  },
  datasource: {
    url: buildMigrationUrl(),
  },
});
