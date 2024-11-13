import { useContext } from "react";
import { MyContext } from "../context/Context";

export default function Button({ text }) {
  const { incrementCount } = useContext(MyContext);

  return <button onClick={incrementCount}>{text}</button>;
}
