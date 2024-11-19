import { db } from "@/utils/db";

export default async function BookPage() {
  const result = await db.query(`SELECT * FROM books`);
  const books = result.rows;

  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h3>{book.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
