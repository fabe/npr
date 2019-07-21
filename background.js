let hls = null;
let player = document.getElementById('npr');
const stream = 'https://nprsxsw-lh.akamaihd.net/i/prog24_1@348758/master.m3u8';

function start() {
  reset();
  player.play();
}

function stop() {
  player.pause();
  reset();
}

function reset() {
  // If an hls.js instance already
  // exists, destroy it.
  if (hls) {
    hls.destroy();
  }

  // Refresh the player element
  // by removing it from the DOM
  // and promptly reinserting.
  const parent = player.parentNode;
  parent.removeChild(player);
  parent.appendChild(player);

  // Create the hls.js instance.
  hls = new Hls();
  hls.loadSource(stream);
  hls.attachMedia(player);
}

function checkIfPlaying() {
  return !player.paused;
}
