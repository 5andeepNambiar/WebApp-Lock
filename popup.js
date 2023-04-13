(function() {
  if (localStorage.getItem("password") !== null) {
    window.location.href = "popup.html";
  } else {
    window.location.href = "index.html";
  }
})();

const button2 = document.getElementById('myButton2');

if (button2) {
  button2.addEventListener("click", function() {
    const password = document.getElementById("password2").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(password == confirmPassword) {
      localStorage.setItem('password', password);
      alert("Password saved successfully");
    } else {
      alert('Password do no match');
    }
  });
}

const button1 = document.getElementById('myButton1');

if (button1) {
  button1.addEventListener("click", function() {
    const password = document.getElementById("password1").value;
    chrome.runtime.sendMessage("checkPassword", function(response) {
      if (response === password) {
        alert("Correct!");
        chrome.tabs.create({ url: "page.html" });
      } else {
        alert("Incorrect");
      }
    });
  });
}
