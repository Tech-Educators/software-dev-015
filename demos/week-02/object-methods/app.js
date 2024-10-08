// Basic example of an object that describes a thing
const timsCar = {
  make: "Suzuki",
  model: "Grand Vitara",
  year: 2005,
  license: "QW12 ERT",
  mot: false,
  startNoise: function () {
    console.log("putt putt putt");
  },
};

console.log(timsCar.model);
timsCar.startNoise(); // we access methods the same wasy as properties, but we can also invloke them with ()
console.log(timsCar.startNoise); // this will show us the value of the property (which is an anonymous function)

// Document Object Model
// we have a p tag with an id of "ptag" which we can retrieve as a DOM Node using a METHOD of the document object
const p = document.getElementById("ptag");

// You can do ANYTHING inside a method. If you can do it in a funciton, you can do it in a method
// a method is just a function that is scoped ONLY to the object itself
const tim = {
  name: "Tim",
  age: 29,
  speak: function () {
    const p = document.createElement("p");
    p.textContent = `My name is ${tim.name} and I say blah blah blah.`;
    document.body.appendChild(p);
  },
};

// Changing an img src with an object method
const dodgeObj = {
  imageSrc: "dodge.jpg",
  change: function () {
    const img = document.querySelector("img");
    img.src = dodgeObj.imageSrc;
  },
};

const vanObj = {
  imageSrc: "van.webp",
  change: function () {
    const img = document.querySelector("img");
    img.src = vanObj.imageSrc;
  },
};

const dodgeBtn = document.getElementById("dodgeBtn");
const vanBtn = document.getElementById("vanBtn");

dodgeBtn.addEventListener("click", dodgeObj.change);
vanBtn.addEventListener("click", vanObj.change);
