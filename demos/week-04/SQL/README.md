# SQL Databases

## Create a table called books that has id, title author and year

```sql
CREATE TABLE books (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  author TEXT,
  year INT
);
```

## Inserting items into a table

```sql
INSERT INTO books (title, author, year) VALUES ('The Hobbit', 'JRR Tolkien', 1937);
```

## Inserting multiple items at once

```sql
INSERT INTO books (title, author, year) VALUES
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
```

## Reading data from a table

```sql
SELECT * FROM books;
```

## Reading specific data from a table

```sql
SELECT * FROM books WHERE year > 2000;
SELECT * FROM books where author = 'JRR Tolkien';
SELECT * from books where title LIKE '%The%'; -- check part of a string
SELECT * from books where title LIKE '%The%' AND year > 2000; -- multiple conditions
```
