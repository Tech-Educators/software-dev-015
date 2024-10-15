// TIMEOUTS
// basic setTimeout that runs after 5 seconds
setTimeout(function () {}, 5000); // it does nothing after 5 seconds

// here is an actual example
setTimeout(function () {
  console.log("I have waited for this moment.");
}, 5000);

// an example with a function declared elsewhere
function greet() {
  console.log("Hello");
}

setTimeout(greet, 5000);

// INTERVALS
// basic setTimeout that runs every second
setInterval(function () {}, 1000); // it does nothing every second

// here is an actual example
setInterval(function () {
  console.log("Echo...");
}, 1000);

// an example with a function declared elsewhere
function buttIn() {
  console.log("Yes, but...");
}

setInterval(buttIn, 500);
