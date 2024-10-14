// go and get the cowsay module
// const cowsay = require("cowsay") // this is the OLD way of importing a package
import cowsay from "cowsay"; // this is the ES6 way of importing a package

// run the cowsay module
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

// run this in the terminal with node and see a cow!
