export default async function PostsPage() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
