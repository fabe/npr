const npr = document.getElementById('npr');

function start() {
  reset();
  npr.play();
}

function stop() {
  npr.pause();
  reset();
}

function checkIfPlaying() {
  return !npr.paused;
}

function reset() {
  const stream = npr.src;
  npr.src = '';
  npr.src = stream;
}
