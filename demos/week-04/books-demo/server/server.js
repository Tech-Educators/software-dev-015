import express from "express";
import cors from "cors";
import pg from "pg"; // this is how we connect to the database
import dotenv from "dotenv"; // this is how we store secrets

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); // set up the ability to use our environment variables

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("Root route.");
});

app.get("/books", async function (request, response) {
  // select all of the books
  const result = await db.query("SELECT * FROM books");
  const books = result.rows;
  // send the books to the client
  response.json(books);
});

app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});

// postgresql://postgres.xwpigpermrmmbdjddjyy:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
// 0W1z2BQlksp6YkEs
