function one(cbf) {
  console.log("one");
  cbf();
}

function two() {
  console.log("two");
  five();
}

function three() {
  two();
  console.log("three");
}

function four() {
  console.log("four");
}

function five() {
  four();
  console.log("five");
}

one(three);

// one, two, four, five, three
