export default function Button({ count, action, content }) {
  return (
    <div className="button-wrap">
      <button onClick={action}>
        {content} Count: {count}
      </button>
    </div>
  );
}
