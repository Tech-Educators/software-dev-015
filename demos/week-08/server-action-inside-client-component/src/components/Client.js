"use client";
import { useState } from "react";
import ServerComponent from "./Server";

export default function ClientComponent() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="client">
      <button onClick={handleShow}>Show/Hide</button>

      {show && <ServerComponent />}
    </div>
  );
}
