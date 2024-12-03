// named exports:
// these need 'destructuring' from the file they are in.
// we need to call them explicitly by their exact name.
import { db, unicorn } from "../lib/db";

// default exports:
// it is the default/main thing being exported from its file.
// therefore, no curly braces needed. It's the only one!
import AllBooksDisplay from "../components/AllBooksDisplay";

export default async function Home() {
  const myImportedString = unicorn;
  console.log("The unicorn export ", myImportedString);

  const response = await db.query(`
    SELECT 
    books.title, 
    books.year, 
    book_authors.name AS author
    FROM books
    JOIN book_authors ON books.author = book_authors.id
    `);

  const booksData = response.rows;
  console.log("---this is my books data: ", booksData);

  // const authorResponse = await db.query("SELECT * FROM book_authors");
  // console.log("--- this is my author response ", authorResponse.rows);

  return (
    <div>
      <h1>Welcome to my fabulous books!</h1>

      <h2>Heres all my books in my database, have a look!</h2>
      <AllBooksDisplay booksData={booksData} />
    </div>
  );
}
