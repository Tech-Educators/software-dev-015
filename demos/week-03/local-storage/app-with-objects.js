const colours = {
  green: 0,
  blue: 0,
};

// turn our object into a string so we can store it in local storage
const stringifiedColours = JSON.stringify(colours); // '{"green":0,"blue":0}'

localStorage.setItem("colours", stringifiedColours);

// retrieving objects stored as strings from LS
const coloursFromLS = localStorage.getItem("colours");

// we can PARSE the string to turn it back into an object
const coloursParsed = JSON.parse(coloursFromLS);

console.log(coloursParsed);

// JSON.stringify turns an object into a string
// JSON.parse turns an string into a object
