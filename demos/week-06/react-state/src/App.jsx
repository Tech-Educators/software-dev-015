import { useState } from "react";

export default function App() {
  // const [stateVariable, mutationFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  function handleClick() {
    // set count to be the value of count, but one more
    setCount(count + 1); // this will cause anywhere that "count" was used to rerender
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
}
