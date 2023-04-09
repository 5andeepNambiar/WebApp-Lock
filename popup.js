const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = document.querySelector('input[name="password2"]').value;
  const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

  if (password === confirmPassword) {
    localStorage.setItem('password', password);
    alert('Password saved successfully');
  } else {
    alert('Passwords do not match');
  }
});


document.getElementById("myButton1").addEventListener("click", function() {
  const password = document.getElementById("password1").value;
  // Send a message to the background script to check the password
  chrome.runtime.sendMessage("checkPassword", function(response) {
    // If the stored password matches the entered password, display a success message
    console.log(response)
    console.log(password)
    if (response === password) {
      alert("Correct!");
      // Open the target page in a new tab
      chrome.tabs.create({ url: "page.html" });
    } else {
      // If the passwords don't match, display an error message
      alert("Incorrect");
    }
  });
});

