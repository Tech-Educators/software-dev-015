export default function SinglePostPage() {
  return (
    <div>
      <h2>Single Post</h2>
      <p>This page uses the id from our params to show only 1 post.</p>
      <p>We also use that id to show that posts comments</p>
      <p>
        We also have a form that we can use to add new comments with THIS
        posts&apos; id
      </p>
    </div>
  );
}
