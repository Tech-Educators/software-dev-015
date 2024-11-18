import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h2>Posts</h2>
      <p>
        Please pretend that on this page is a list of posts that we got from our
        database.
      </p>
      <p>Below is a fake version:</p>

      <Link href="/posts/one">Post one</Link>
      <Link href="/posts/two">Post two</Link>
      <Link href="/posts/three">Post three</Link>
    </div>
  );
}
