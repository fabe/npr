// Some helpers.
const dom = query => document.querySelector(query);
const addClass = (query, className) => dom(query).classList.add(className);
const removeClass = (query, className) =>
  dom(query).classList.remove(className);

// Contact the background page.
var bg = chrome.extension.getBackgroundPage();

// Listeners for button.
dom('#start').onclick = function() {
  bg.start();
  setIcon('icon48-active');
  addClass('#controls', 'playing');
};

dom('#stop').onclick = function() {
  bg.stop();
  setIcon('icon48');
  removeClass('#controls', 'playing');
};

// Check if audio is playing in the background, reflect that in the popup.
if (bg.checkIfPlaying()) {
  addClass('#controls', 'playing');
} else {
  setIcon('icon48');
}

// Helper to set icon.
function setIcon(file) {
  chrome.browserAction.setIcon({
    path: `icons/${file}.png`,
  });
}
