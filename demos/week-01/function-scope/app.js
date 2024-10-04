// GLOBAL variables are declared OUTSIDE of any code blocks
// LOCAL variables are defined INSIDE code blocks

let myGlobal = 0;

function increment() {
  myGlobal = myGlobal + 1; // this will increase the global variable

  // we can define more variables inside a code block
  let myLocal = 0;
  myLocal = myLocal + 1; // we can do this because we are using the variable within the same scope that is was defined
}

myLocal = myLocal + 1; // this will error because the scope of that variable is ONLY within the increment function

// but it gets funkier
// BUT DON'T EVER DO THIS ON PURPOSE
let confusingName = "Tim";

function normalFunction() {
  console.log(confusingName); // "Tim"
}

function confusingFunction() {
  let confusingName = "Heinry";
  console.log(confusingName); // "Heinry"
  // if a variable exists WITHIN the scope it will use that
  // so in this case confusingName is local even though there exists a global varibale of the same name
}
