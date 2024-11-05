import Click from "./components/Click";
import Drag from "./components/Drag";
import Submit from "./components/Submit";

export default function App() {
  return (
    <div>
      <h1>Events</h1>

      <Click />
      <Submit />
      <Drag />
    </div>
  );
}
