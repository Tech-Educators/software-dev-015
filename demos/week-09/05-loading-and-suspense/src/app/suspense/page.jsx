import FlashingThing from "@/components/FlashingThing";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function SuspensePage() {
  return (
    <div>
      <h2>Suspense</h2>
      <h3>Fast Page</h3>
      <p>
        This page is going to load the entire content right away EXCEPT the
        SlowComponent
      </p>
      <p>This is because the SlowComponent is in Suspense</p>

      <Suspense fallback={<FlashingThing />}>
        <SlowComponent />
      </Suspense>

      <p>I am underneath the slow thing</p>
    </div>
  );
}
