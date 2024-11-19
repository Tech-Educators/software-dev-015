import { Clicker } from "./Clicker";

export function Content() {
  return (
    <div>
      <p>
        This component is rendered on the server because it doesn&apos;t need
        any interaction with the client
      </p>
      <p>BUT... we CAN use client components within our server components</p>
      <Clicker />
    </div>
  );
}
