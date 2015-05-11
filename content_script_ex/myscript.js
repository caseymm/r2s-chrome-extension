chrome.browserAction.onClicked.addListener(function(tabs) {
  console.log(tabs)
  chrome.tabs.executeScript(tabs.id, {file: "jquery-2.1.3.min.js"});
  chrome.tabs.executeScript(tabs.id, {file: "firebase.js"});
  chrome.tabs.executeScript(tabs.id, {file: "contentscript.js"});
});
