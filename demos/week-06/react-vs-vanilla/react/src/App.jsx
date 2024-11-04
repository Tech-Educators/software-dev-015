import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0); // our state variable

  function handleClick() {
    setCount(count + 1); // we JUST change the value
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}
