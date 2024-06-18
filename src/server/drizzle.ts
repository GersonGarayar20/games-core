import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { games } from "./db/schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

export const getAllGames = async () => {
  const res = await db.select().from(games);
  return res;
};

export const addGame = async ({
  title,
  description,
  developer,
  price,
  publisher,
  releaseDate,
}: {
  title: string;
  description: string;
  developer: string;
  price: number;
  publisher: string;
  releaseDate: Date;
}) => {
  const res = await db.insert(games).values({
    title,
    description,
    developer,
    price,
    publisher,
    releaseDate,
  });

  return res;
};
