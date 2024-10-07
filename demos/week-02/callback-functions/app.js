// CALLBACK FUNCTIONS WE'VE ALREADY SEEN
// events
const button = document.querySelector("button");

function handleClick() {
  console.log("Somebody clicked me!");
}

button.addEventListener("click", handleClick); // handleClick is a Callback Function

// same thing but with ANONYMOUS functions
button.addEventListener("click", function () {
  console.log("Somebody clicked me, but I am anonymous");
});

// OR A NEW WAY WE HAVEN'T SEEN BEFORE
function childOne() {
  console.log("I am child one");
}

function childTwo() {
  console.log("I am child two");
}

function parent(cbf) {
  console.log("I am parent");
  cbf();
}

parent(childOne);
parent(childTwo);
parent(handleClick);
