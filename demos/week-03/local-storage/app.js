const countBtn = document.getElementById("count-btn");
const countDisplay = document.getElementById("count-display");

// get the value of loacl storage when the page loads
// we have a backup value of 0 if its null
let count = localStorage.getItem("count") || 0; // use the right hand side of || if the left is null

// make sure to update the p tag on page load to match LS
countDisplay.textContent = count;

function increment() {
  count++; // increase the count
  countDisplay.textContent = count; // update the p tag
  localStorage.setItem("count", count);
}

countBtn.addEventListener("click", increment);
