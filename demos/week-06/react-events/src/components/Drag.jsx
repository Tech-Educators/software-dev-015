export default function Drag() {
  function handleDrag(event) {
    console.log("x", event.screenX);
    console.log("y", event.screenY);
  }

  return (
    <div>
      <h2>Drag</h2>
      <img
        src="https://placehold.co/600x400?text=Drag%20me!"
        alt="Drag me!"
        onDragEnd={handleDrag}
      />
    </div>
  );
}
