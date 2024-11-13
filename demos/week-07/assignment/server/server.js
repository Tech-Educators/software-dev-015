import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("You are looking at my route route. How roude!");
});

app.get("/books", async function (request, response) {
  const result = await db.query(`
        SELECT
            books.id,
            books.title,
            books.author,
            books.year,
            ARRAY_AGG(genres.name) AS genres
        FROM books
        JOIN genre_junction ON books.id  = genre_junction.book_id
        JOIN genres         ON genres.id = genre_junction.genre_id
        GROUP BY books.id, books.title, books.author, books.year
        `);

  const books = result.rows;

  response.json(books);
});

app.listen(8080, () => console.log("App is running on port 8080"));
