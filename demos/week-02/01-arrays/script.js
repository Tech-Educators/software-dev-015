// We can use Arrays to group items together:

let animals = ["Dog", "Cat", "Elephants", "Koalas", "Otters", "Racoons"];
// Arrays start at 0 - Dog, 1 - Cat, 2 - Elephants etc etc

// Accessing our array:
console.log(animals);

// Accessing our array at different points:
console.log(animals[1]); // We want to see Dog...
console.log(animals[0]); // What on earth?...
console.log(animals[5]);

// -- Methods we can use on our Array --
// Find out the length of our array:
console.log(animals.length);

// What if we want to 'add' an element to our array, at the end?
animals.push("Kangaroo");
console.log(animals);

// How about 'removing' an item from the end of our array?
animals.pop();
console.log(animals);

// To add an item to the start of an array:
animals.unshift("Kangaroos");
console.log(animals);

// To remove an item from the start of our array:
animals.shift();
console.log(animals);

// Add an item at a specific 'index':
// adding 'Monkeys' between 'Koalas' and 'Otters'
animals.splice(4, 0, "Monkeys");
console.log(animals);

// .splice() takes 3 parameters:
// .splice(theIndexStartPoint, theNumberOfItemsToDelete, theItemToAdd)
animals.splice(1, 4, "Kangaroos");
console.log(animals);

// Can we leave the second parameter blank?
animals.splice(1, 0, "Geese");
console.log(animals);

// A numbers array:
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// An array of oranges:
let oranges = ["Light Orange", "Orange", "Dark Orange"];

// An array of colours, containing two arrays:
let colours = ["Blue", ["Light Green", "Green", "Dark Green"], "Red", oranges];
console.log(colours);
console.log(colours[1]);
console.log(colours[1][1]);
console.log(oranges);

// A mega array of arrays!
let myArrayOfArrays = [animals, oranges, colours];
console.log("Take a look at our mighty array! ", myArrayOfArrays);
