import { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await fetch("http://localhost:8080/books");
      const data = await response.json();
      setBooks(data);
      console.log(data);
    }

    getBooks();
  }, []);

  return (
    <div>
      <h1>BOOKS!</h1>
      <div className="books-container">
        {books.map((book) => {
          return (
            <div key={book.id} className="book">
              <h3>{book.title}</h3>
              <p>
                {book.author} - {book.year}
              </p>
              <h4>Genres</h4>
              <ul>
                {book.genres.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
