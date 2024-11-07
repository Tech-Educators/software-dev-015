import { useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <Header count={count} />
      <Button count={count} action={incrementCount} content="+1" />
      <Button count={count} action={decrementCount} content="-1" />
      <Footer count={count} />
    </>
  );
}
