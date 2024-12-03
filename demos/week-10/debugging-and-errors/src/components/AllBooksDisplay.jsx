export default function AllBooksDisplay({ booksData }) {
  console.log("---AllBooksDisplay Component -- booksData: ", booksData);

  return (
    <>
      {booksData.map((book) => {
        return (
          <div key={book.id}>
            <p>Book Title:{book.title}</p>
            <p>Book Year:{book.year}</p>
            <p>Book Author:{book.author}</p>
          </div>
        );
      })}
    </>
  );
}
