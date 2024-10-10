// get my DOM nodes from the page
const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

// this isn't used in this example
// a variable that represents the current possition in the array
// what if you press the right arrow, this gets increased, and the image gets changed to THIS index in the array
let imgIndex = 0;

// an array to store our images and information about them
const images = [
  {
    src: "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2FTimTech.png&w=640&q=75",
    alt: "Tim",
  },
  {
    src: "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fjeztech.png&w=640&q=75",
    alt: "Jez",
  },
  {
    src: "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fheinryanselmtech.jpeg&w=640&q=75",
    alt: "Heinry",
  },
  {
    src: "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Ffrankietech.jpg&w=640&q=75",
    alt: "Frankie",
  },
];

// loop through our images array and put our thumbnails onto the page
for (let i = 0; i < images.length; i++) {
  // create a new DOM Node img
  const img = document.createElement("img");

  // add the src and alt to the img
  img.src = images[i].src;
  img.alt = images[i].alt;

  // add a click event listener to the image
  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  // put the image on the page
  thumbnailContainer.appendChild(img);
}
