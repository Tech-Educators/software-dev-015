export default function PostsPage({ searchParams }) {
  // if I visit /posts?sort=desc, then the searchParams is equal to:
  // { sort: "desc" }

  return (
    <div>
      <h2>Posts</h2>
      <p>This page shows a list of all the posts from our database</p>
      <p>Observe, the search params at the top of this component</p>
    </div>
  );
}
