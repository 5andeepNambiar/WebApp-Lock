chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request === "getPassword") {
    const storedPassword = localStorage.getItem("password");
    sendResponse(storedPassword);
  }
  return true;
});

const restrictedWebsites = ['web.whatsapp.com', 'www.facebook.com'];
const storedPassword = localStorage.getItem('password');

function isRestrictedWebsite(url) {
  return restrictedWebsites.includes(new URL(url).hostname);
}

function promptForPassword() {
  const password = prompt('Please enter the password:');
  if (password === storedPassword) {
    return true;
  } else {
    alert('Incorrect password');
    return false;
  }
}

if (isRestrictedWebsite(window.location.href) && !promptForPassword()) {
  window.location.href = 'about:blank';
}
