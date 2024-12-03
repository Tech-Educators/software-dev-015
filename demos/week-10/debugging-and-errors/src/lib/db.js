import pg from "pg";

export const db = new pg.Pool({ connectionString: process.env.DB_URL });

export const unicorn = "I am a unicorn";

export function sum(a, b) {
  return a + b;
}
