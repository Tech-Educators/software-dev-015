import { useContext } from "react";
import { MyContext } from "../context/Context";

export default function Header() {
  const { count } = useContext(MyContext);

  return (
    <header>
      <h1>React Context is FUN!</h1>
      <p>Count: {count}</p>
    </header>
  );
}
