chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "addGooglyEyes",
      "title": "Add Googly Eye",
      "contexts": ["all"]
    });
  });

  chrome.contextMenus.onClicked.addListener(function(info, tab) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
          console.log(response.farewell);
        });
      });
  });
