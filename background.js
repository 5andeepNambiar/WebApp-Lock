chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "checkPassword") {
    // Send a message to the content script to get the stored password
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

// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "storePassword") {
    // Save the password in local storage
    chrome.storage.local.set({ password: request.password }, function() {
      console.log("Password saved:", request.password);
      sendResponse({ success: true });
    });
    return true;
  }
});
