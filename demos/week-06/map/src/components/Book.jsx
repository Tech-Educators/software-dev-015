export default function Book({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>
        {book.author} - {book.year}
      </h4>
    </div>
  );
}
