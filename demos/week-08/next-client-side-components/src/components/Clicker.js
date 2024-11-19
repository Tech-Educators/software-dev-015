"use client";
import { useState } from "react";

export function Clicker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("I am running on the client");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
}
