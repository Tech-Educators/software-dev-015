import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
      {show && <p>I show sometimes, but not all the time</p>}

      <h2>Ternary operator to define an attribute</h2>
      <button disabled={show ? true : false}>Sad button</button>

      <h2>Using a ternary operator for lots of HTML at once</h2>
      {show ? (
        <div>
          <p>I show when show is true</p>
          <p>Thats true, show them</p>
        </div>
      ) : (
        <div>
          <p>I show when show is false</p>
          <p>Thats false, I mean true</p>
        </div>
      )}
    </div>
  );
}
