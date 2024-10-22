const bookContainer = document.getElementById("book-container");

async function getBooks() {
  // retrieve the books from the server
  const response = await fetch("http://localhost:8080/books");
  const books = await response.json();

  // display the books on the page
  for (let i = 0; i < books.length; i++) {
    // make a variable for the information in the book
    const title = books[i].title;
    const author = books[i].author;
    const year = books[i].year;

    // make a new element
    const p = document.createElement("p");

    // add the text to the element
    p.textContent = `${title} by ${author} written in ${year}`;

    // append the element to the page
    bookContainer.appendChild(p);
  }
}

getBooks();
