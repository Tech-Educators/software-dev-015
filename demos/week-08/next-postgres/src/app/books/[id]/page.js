import { db } from "@/utils/db";

export default async function SingleBookPage({ params }) {
  const id = (await params).id;
  const result = await db.query(`SELECT * FROM books WHERE id = ${id}`);
  const book = result.rows[0];

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        {book.author} - {book.year}
      </p>
    </div>
  );
}
