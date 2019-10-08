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
  // Make sure we're live and don't play from cache.
  const stream = npr.innerHTML;
  npr.innerHTML = '';
  npr.innerHTML = stream;

  npr.load();
}
