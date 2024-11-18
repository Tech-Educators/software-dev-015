export default async function SinglePostPage({ params }) {
  const id = (await params).id; // in the new version of Next (15) params are async so we need to await them
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
