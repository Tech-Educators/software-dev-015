CREATE TABLE posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  content TEXT,
  clerk_id TEXT
);

CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT,
  bio TEXT,
  clerk_id TEXT
);

SELECT
  posts.id,
  posts.content,
  users.username,
  users.id as user_id
FROM posts
JOIN users ON posts.clerk_id = users.clerk_id