import Book from "./components/Book";

export default function App() {
  const books = [
    { title: "The Hobbit", author: "Tolkien", year: 1937 },
    { title: "Foundation's Edge", author: "Isaac Asimov", year: 1982 },
    { title: "The Ring", author: "Koji Suzuki", year: 1991 },
    { title: "The Lean Startup", author: "Eric Ries", year: 2011 },
    { title: "Eragon", author: " Chris Paolini", year: 2001 },
    { title: "Eloquent Javascript", author: "Marijn Haverbeke", year: 2018 },
    { title: "The Invincible", author: "Stanislaw Lem", year: 1963 },
    { title: "Of mice and men", author: "John Steinbeck", year: "1937" },
  ];

  return (
    <div>
      <h1>Using map to show every item in an array</h1>

      {books.map((book) => {
        return (
          <div key={book.title}>
            <h3>{book.title}</h3>
            <h4>
              {book.author} - {book.year}
            </h4>
          </div>
        );
      })}

      {books.map((book) => {
        return <Book key={book.title} book={book} />;
      })}
    </div>
  );
}
