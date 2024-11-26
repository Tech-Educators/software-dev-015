import type { Post } from "@/utlities/types";

type IDParams = {
  params: Promise<{ id: string }>;
};

export default async function SinglePostPage({ params }: IDParams) {
  const id = (await params).id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = await response.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
