export default function SinglePostPage({ params }) {
  // make a fetch/sql query here using params.slug to go and get that post
  return (
    <div>
      <h2>Post {params.slug}</h2>
      <p>I am post {params.slug}</p>
    </div>
  );
}
