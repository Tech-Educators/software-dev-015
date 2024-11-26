import SlowComponent from "@/components/SlowComponent";

export default function Loading() {
  return (
    <div>
      <h2>Loading</h2>
      <h3>Slow Page</h3>
      <p>This page loads after the SlowComponent finishes loading</p>
      <p>Before that happens, we see the content of loading.jsx</p>
      <p>
        This is usefull if you don&apos;t want to show ANYTHING until your page
        is complelety ready
      </p>
      <SlowComponent />
    </div>
  );
}
