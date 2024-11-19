import { Clicker } from "@/components/Clicker";
import { Content } from "@/components/Content";

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>

      <h3>Client Rendered Component</h3>
      <Clicker />

      <h3>Server Rendered Component</h3>
      <Content />
    </div>
  );
}
