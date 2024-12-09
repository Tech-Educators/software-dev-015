export default async function BadPostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  return (
    <div>
      <h2>Bad Posts Page</h2>
    </div>
  );
}
