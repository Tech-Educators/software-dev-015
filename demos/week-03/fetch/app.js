const img = document.querySelector("img");
const btn = document.querySelector("button");

async function handleGetFox() {
  // get the response from calling this API
  const response = await fetch("https://randomfox.ca/floof/");

  // get the data out of the response (this is what we would see if we called the API in the broswer)
  const data = await response.json();

  // update the url of the image to be the url returned by the API
  img.src = data.image;
}

handleGetFox();

btn.addEventListener("click", handleGetFox);
