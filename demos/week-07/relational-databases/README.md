# Relational Databases

## One to Many

### Create the tables

```sql
CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);

CREATE TABLE posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content TEXT,
  user_id INT REFERENCES users(id)
);
```

### Add our data

```sql
INSERT INTO users (name) VALUES
('Wollivan'),
('Sir Francis Tables');

INSERT INTO posts (content, user_id) VALUES
('Look at my giant hat!', 2),
('Its so cold in the shade of Frankies hat', 1),
('My hat is so cool I love it!', 2);
```

### Selecting our data

```sql
SELECT
  posts.id,
  users.name,
  posts.content
FROM posts
JOIN users ON posts.user_id = users.id;
```

## Many to Many

### Create the tables

```sql
CREATE TABLE books (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  author TEXT,
  year INT
);

CREATE TABLE genres (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);

CREATE TABLE genre_juntion (
  book_id INT REFERENCES books(id),
  genre_id INT REFERENCES genres(id)
);
```

### Add our data

```sql
INSERT INTO books (title, author, year) VALUES
('The Hobbit', 'JRR Tolkien', 1937),
('Dune', 'F Herbert', 1965),
('One Hundred Years of Solitude', 'Gabriel García Márquez' ,1967),
('The Culture Playbook', 'Daniel Coyle', 2022),
('Magician', 'R. E. Feist', 1982),
('ring' , 'koji suzuki', '1991'),
('The Trouble with Lichen', 'John Wyndham', '1960'),
('way of the shadows', 'brent weeks', '2008'),
('Totally Real Book', 'John Realman', 2025),
('1984', 'George Orwell', 1949),
('The romance of the three kingdoms', 'Luo Guanzhong', '1522'),
('Atomic Habits', 'James Clear ', '2018');

INSERT INTO genres (name) VALUES
('Fantasy'),
('Children'),
('Sci-fi'),
('Novel'),
('Psychology'),
('Horror'),
('Non-fiction'),
('Thriller'),
('Dystopian'),
('Self help');
```

### Add our genres

Now that we know the IDs of our books and genres, we can add our genres to our junction table, so that each book has genres.

```sql
INSERT INTO genre_juntion (book_id, genre_id) VALUES
(1, 1), -- The Hobbit and Fantasy
(1, 2) -- The Hobbit and Children
(2,1),
(2,3),
(3,4),
(4,5),
(5,1),
(6,6),
(7,3),
(8,1),
(8,6),
(9,7),
(10,8),
(10,9),
(11,4),
(12,10);
```

### Selecting our data

Now we can do funky things like selecting all the books that have a genre and see them:

```sql
SELECT
  books.id,
  books.title,
  books.author,
  books.year,
  genres.name
FROM books
JOIN genre_junction ON books.id  = genre_junction.book_id
JOIN genres         ON genres.id = genre_junction.genre_id;
```

BUT what if we want to get ALL the books regardless of whether or not they have a genre?!
Fear not, just change the `JOIN` to `LEFT JOIN` so it will get ALL the results from the tables on the _left_ of the join, and either get the result from the right table, or just return `null`.

### Aggregating our genres

Because we are using a many to many relationship, the above SELECT statement will get us each book twice if it has 2 genres. We can aggregate the genres together by `GROUP`ing by the other columns, and using `ARRAY_AGG` on our genres:

```sql
SELECT
  books.id,
  books.title,
  books.author,
  books.year,
  ARRAY_AGG(genres.name) AS genres
FROM books
JOIN genre_junction ON books.id  = genre_junction.book_id
JOIN genres         ON genres.id = genre_junction.genre_id
GROUP BY books.id, books.title, books.author, books.year;
```
