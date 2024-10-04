// declaring a function (so we can use it later)
function greet() {
  console.log("Hello there");
}

// calling a function that we have declared
greet(); // putting () after our function name "invokes" it

// we can invloke a funciton as many times as we like!
greet();
greet();
greet();

// returning a value from a function
function greet2() {
  return "Hello there (from greet2)";
}

greet2(); // this won't show anything in the console

const myGreeting = greet2(); // this variable with have the value that the greet2 function returns
console.log(myGreeting);

// we have seen this before
// const username = prompt("What is your name"); // prompt "returns" whatever the user puts in the box

// function parameters (extra information for the function to use)
function add(a, b) {
  return a + b;
}

add(1, 2); // 3

// when we DECLARE the function, the PARAMETERS go inside the () - eg function sum(a,b)
// when we INVOKE the function, the ARGUMENTS go inside the () - eg sum(1, 2)
// the ARGUMENTS become the value of the PARAMETERS

// so some more examples

function subtract(a, b) {
  return a - b;
}

function divide() {
  return a / b;
}

// functions can have more than one line side the code block
function multiply(a, b) {
  const product = a * b;
  return product;
}

// and we can write more complete functions too
// this is nonsensicle, but its for fun and only an example (don't sue)
function madlibs(noun, adj, verb, adverb, number) {
  const myString = `Once upon a time there was a ${adj} person named ${noun}. They loved to ${verb} ${adverb} ${number} times a day!`;
  console.log(myString);
  return myString;
}
madlibs("Bob", "joyful", "sing", "loudly", "10");
madlibs("Liam", "cool", "sleep", "soundly", "27");
madlibs("Ren", "compassionate", "dance", "majestically", "80");
madlibs("Bella", "cool", "roaming", "crazily", "35");
madlibs("Tee", "handsome", "smile", "shipishly", 10);
madlibs("john", "silly", "jump", "bouncily", "1000");
madlibs("Tim", "man", "walk", "slowly", 2);
