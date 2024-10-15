function change() {
  document.body.classList.toggle("tomato");
}

let changeInterval = setInterval(change, 4000);

function stop() {
  clearInterval(changeInterval);
}

function start() {
  changeInterval = setInterval(change, 4000);
}
