import { text, sqliteTable, real, integer } from "drizzle-orm/sqlite-core";

export const games = sqliteTable("games", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title"),
  description: text("description"),
  price: real("price"),
  releaseDate: integer("release_date", { mode: "timestamp" }),
  developer: text("developer"),
  publisher: text("publisher"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(new Date()),
});
