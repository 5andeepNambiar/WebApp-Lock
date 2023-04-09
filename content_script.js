chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // If the message is "getPassword", send the stored password back to the background script
  if (request === "getPassword") {
    const storedPassword = localStorage.getItem("password");
    // Return the stored password as a response
    sendResponse(storedPassword);
  }
  return true;
});
