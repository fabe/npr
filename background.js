const npr = document.getElementById('npr');

function start() {
  npr.play();
}

function stop() {
  // Reset instead of pause, because we want to be live.
  const stream = npr.src;
  npr.src = '';
  npr.src = stream;
}

function checkIfPlaying() {
  return !npr.paused;
}
