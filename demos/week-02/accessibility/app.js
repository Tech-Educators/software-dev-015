// listening for focus events
const input = document.querySelector("input");
input.addEventListener("focus", function () {
  console.log("input was focussed");
});
const img = document.querySelector("img");

// listen for a click on the image
img.addEventListener("click", function () {
  console.log("Image was clicked");
});

// listen for a keydown while the image is focussed, then check what key is pressed
img.addEventListener("keydown", function (event) {
  if (event.key == "Enter" || event.key == " ") {
    console.log("Image was focussed and spacebar was pressed");
  }
});

// listen to ANY key press
document.addEventListener("keydown", function (event) {
  console.log(event.key);
});
