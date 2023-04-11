chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "checkPassword") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "getPassword", function (response) {
        if (chrome.runtime.lastError) {
          sendResponse("");
        } else if (response === "") {
          sendResponse("");
        } else {
          sendResponse(response);
        }
      });
    });
    return true;
  }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "storePassword") {
    chrome.storage.local.set({ password: request.password }, function() {
      console.log("Password saved:", request.password);
      sendResponse({ success: true });
    });
    return true;
  }
});
