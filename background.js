chrome.runtime.onInstalled.addListener(function() {
  chrome.action.setBadgeText({ text: "ON" });
  setRandomInterval();
});

function getRandomInterval() {
  return Math.floor(Math.random() * (60000 - 10000 + 1) + 10000); // Random interval between 10s and 60s
}

function showPopup() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "showPopup" });
  });
}

function setRandomInterval() {
  setInterval(function() {
    showPopup();
  }, getRandomInterval());
}
