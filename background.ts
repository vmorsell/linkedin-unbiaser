chrome.browserAction.onClicked.addListener((tab: chrome.tabs.Tab) => {
  chrome.tabs.executeScript(tab.id, { file: "content.js" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.from === "content") {
    console.log(request.message);
  }
});
