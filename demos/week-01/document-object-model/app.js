// retireve the DOM Nodes
let myFirstP = document.querySelector("p"); // this will get the FIRST p tag on the page
let pToChange = document.getElementById("p-to-change");

// change the DOM nodes content
pToChange.textContent = "I am the new content";

// create new DOM nodes
let container = document.getElementById("container"); // first get the parent Node that we want to append to
let myNewP = document.createElement("p"); // then we create a new DOM node
myNewP.textContent = "This p tag was added using JavaScript"; // add some content
container.appendChild(myNewP); // add the new node to the page

// updating a nodes' attributes
let myImg = document.createElement("img");
myImg.src = "https://placehold.co/600x400/ff6347/ffffff";
myImg.alt = "A placeholder image";
document.body.appendChild(myImg);

// removing DOM nodes
let removeP = document.getElementById("remove-me");
removeP.remove();

// add classes to DOM nodes
// lets add a class to myFirstP using JavaScript
myFirstP.classList.add("fancy");
