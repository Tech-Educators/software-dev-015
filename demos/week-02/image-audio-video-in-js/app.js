// First, I get my elements:
// Play, pause, stop:
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
// forwards, backwards:
const forwardsBtn = document.getElementById("skipForwardsBtn");
const backwardsBtn = document.getElementById("skipBackwardsBtn");
// Stretch goals!:
const playPauseBtn = document.getElementById("playPauseBtn");
//Our Audio element:
const nightfallBass = document.getElementById("nightfallBass");

// Now some event listeners attached to our buttons, so that our JS can handle media control
// Why? Well, we might want to create some buttons and style them with CSS to keep in theme with our website!
playBtn.addEventListener("click", function () {
  console.log("play button clicked");
  nightfallBass.play();
});

pauseBtn.addEventListener("click", function () {
  console.log("pause button clicked");
  nightfallBass.pause();
});

stopBtn.addEventListener("click", function () {
  console.log("stop button has been clicked");
  nightfallBass.pause();
  nightfallBass.currentTime = 0;
});

forwardsBtn.addEventListener("click", function () {
  nightfallBass.currentTime = nightfallBass.currentTime + 10;
});

backwardsBtn.addEventListener("click", function () {
  nightfallBass.currentTime = nightfallBass.currentTime - 10;
});

// 'play' and 'pause' in the same button?!?! Logic Time!:

// - keep track of if a audio is playing or not
// - check that value
// - have an if statement which plays if the audio is paused
// - else, pauses if the audio is played.

// Declaring a boolean variable, so we can check if our audio is playing or not:
let isPlaying = false;

playPauseBtn.addEventListener("click", function () {
  // Checking that variable:
  //   if (isPlaying == false) {
  //     isPlaying = true;
  //   } else if (isPlaying == true) {
  //     isPlaying = false;
  //   }
  // The 'if statement' above is the longer explanation of this fancy codey one-liner:
  // isPlaying = !isPlaying;

  console.log(isPlaying);

  // Doing something with our audio, depending on if it is playing or not:
  if (isPlaying == false) {
    nightfallBass.play();
    isPlaying = true;
  } else if (isPlaying == true) {
    nightfallBass.pause();
    isPlaying = false;
  }
});

// STRETCH GOAL FOR YOU GUYS! WOOP WOOP:
// pause and stop in the same button
