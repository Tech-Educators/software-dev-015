const button = document.querySelector("button");
const p = document.querySelector("p");
let count = 0;

function handleClick() {
  count++; // we change the value
  p.textContent = `Count: ${count}`; // we update the DOM
}

button.addEventListener("click", handleClick);
