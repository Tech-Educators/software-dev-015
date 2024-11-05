import Block from "./components/Block";

export default function App() {
  return (
    <div>
      <h1>Props Recap</h1>
      <p>Did you know you can pass pretty much anything in a prop?</p>

      <Block title="I am block 1" content="Wow this is the best block!" />
      <Block title="I am block 3" content="Wait, what happened to block 2?!" />
    </div>
  );
}
