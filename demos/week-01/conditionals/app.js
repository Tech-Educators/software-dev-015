console.log("Conditionals are fun!!");

/*

every conditional follows the same pattern.

if a condition is true, then do something

if(condition) {
  something
}

*/

if (2 > 1) {
  console.log("Yay maths.");
}

if (5 <= 6) {
  console.log("More maths.");
}

let a = "Tim";
let b = 10;
let c = 90;

if (a == b) {
  console.log("Is Tim a number?");
}

if (c > b) {
  console.log("Seriously, more maths?");
}

if (a != c) {
  console.log("Tim is NOT a number!");
}

/*
Comparison Operators

==  is equal
!= is NOT equal
<   is less than
>   is greater than
<=  is equal to or less than
>=  is equal to or greater than

*/

// ELSE

if (b > c) {
  console.log("This one won't happen");
} else {
  console.log("This WILL happen!");
}

// IF ELSE IF ELSE IF ELSE....
let time = prompt("What is the hour? (0-23)");
console.log(time);

// if its before 9am, tell the user to go back to bed
// else if its before 12pm tell the user to get ready for lunch
// else tell the user to enjoy dinner
if (time < 9) {
  console.log("Go back to bed!");
} else if (time < 13) {
  console.log("Nearly lunch time!");
} else if (time < 24) {
  console.log("It will be dinner soon!");
} else {
  console.log("That is not a time!");
}

// combining this with the previous lesson
let preference = prompt("Light mode or dark mode? (l/d)");

if (preference == "l") {
  document.body.classList.add("light");
} else if (preference == "d") {
  document.body.classList.add("dark");
} else {
  console.log("That wasn't one of the choices");
}

// multiple conditions
if (1 == 1 && 2 == 2) {
  console.log("I need TWO things to be true to run");
}

if (1 == 1 || 1 == 2) {
  console.log("I only need ONE of the things to be true to run");
}

// a note on let vs const
let d = 10; // variables that are decelared with let can change
const e = 10; // variables declared with const are CONSTANT and cannot be changed

d = 11; // this is allowed
//e = 11; // this will error

// strictness
const num = 10;
const strNum = "10";

if (num == strNum) {
  console.log("They may be different types, but they rae the same value");
  console.log(
    "This is called Type Coersion. JS has changed the type of num to a string for the purposes of this condition"
  );
}

if (num === strNum) {
  console.log("This will NOT do type coersion, and will not run");
}
