// Arrays:
const myArray = ["blue", "orange", "red", "green", "tomato"];
console.log(myArray);

// This array is a bit hard to read, as we don't know what the values apply to:
const frankie = ["Frankie", 31, true, true, false, "Nottingham"];
console.log(frankie);

// Objects:
// Allow us to give each item a bit more information,
// by using a 'key:value' pairing:
const frankieObject = {
  key: "value",
  name: "Frankie",
  age: 31,
  likesSantaCruzTShirts: true,
  cycles: true,
  lovesTheRain: false,
  livesIn: "Nottingham",
};

// Logging the whole object:
console.log(frankieObject);

// Adding key:value pairs to our object:
frankieObject.coloursHeLikes = myArray;
frankieObject.worksAt = "TechEducators";
// Checking our additions worked:
console.log(frankieObject);

// Accessing specific key:value pairs with 'Dot Notation'
console.log(frankieObject.age);
console.log(frankieObject.cycles);

//
console.log(frankieObject[2]); // this logs out as undefined.
// We can use our 'square bracket' notation, combined with the specific name of the key, to access the 'value' of that key:
console.log(frankieObject["age"]); // logs 31.
console.log(frankieObject["worksAt"]); // logs 'TechEducators'.

// Funky Object and Array combinations:
const myFunkyArray = [
  {
    id: 1,
    username: "Heniry",
    favouriteColour: myArray[3],
    favouriteActivites: ["Bowling", "Smiling"],
  },
  {
    id: 2,
    username: "Tim",
    favouriteColour: myArray[4],
    favouriteActivites: ["Pranking", "Joking"],
  },
];

console.log(myFunkyArray);

// Accessing a specific value within our funky array:
console.log(myFunkyArray[1].favouriteActivites[1]);

// Updating an item in an object:
frankieObject.age = 32;
console.log(frankieObject.age);
console.log(frankieObject);

// A 'real world' example:
const posts = [
  {
    id: 1,
    title: "My Fantastic First Post",
    content: "I am practising my writing",
  },
  {
    id: 2,
    title: "I give up it's too hard",
    content: "help. Writing is tough....",
  },
];

// Accessing the 'keys' of an object:
console.log(Object.keys(frankieObject));
