export default function Click() {
  function handleClick() {
    console.log("wow!");
  }

  return (
    <div>
      <h2>Click Events</h2>
      <p>Check the console after clicking the button!</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
