// get the DOM Node of our button and P tag
const button = document.getElementById("counterBtn");
const countContainer = document.getElementById("countContainer");

let count = 0; // global variable because it is defined OUTSIDE of any of code blocks

// the function that we will run when we click the button
function handleClick() {
  console.log("Somebody clicked the button");
  count = count + 1;
  countContainer.textContent = count;
}

// listen for the event, and run the function
button.addEventListener("click", handleClick);
