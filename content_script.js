chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request === "getPassword") {
    const storedPassword = localStorage.getItem("password");
    sendResponse(storedPassword);
  }
  return true;
});
