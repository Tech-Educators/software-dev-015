export default function Submit() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.message.value);
    console.log("Form is submitted");
  }

  return (
    <div>
      <h2>Submit</h2>
      <form onSubmit={handleSubmit}>
        <input name="message" />
        <button>Submit Form</button>
      </form>
    </div>
  );
}
