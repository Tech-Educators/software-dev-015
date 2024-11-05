import Form from "./components/Form";
import Gallery from "./components/Gallery";
import SelfStyled from "./components/SelfStyled";

export default function App() {
  return (
    <div>
      <h1>CSS in React</h1>
      <p>I am only here so you can see what the CSS is doing</p>
      <Form />
      <Gallery />
      <SelfStyled />
    </div>
  );
}
