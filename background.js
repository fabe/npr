const npr = document.getElementById('npr');

function start() {
  npr.play();
}

function stop() {
  npr.pause();
}

function checkIfPlaying() {
  return !npr.paused;
}
