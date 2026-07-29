document.querySelector("#signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name").value;
  let emailInput = document.querySelector("#email").value;
  let passwordInput = document.querySelector("#password").value;
  let confirmPasswordInput = document.querySelector("#confirm-password").value;
  let message = document.querySelector("#error-message");

  if (nameInput === "" || emailInput === "" || passwordInput === "" || confirmPasswordInput === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput)) {
    message.textContent = "Please enter a valid email (e.g. ayushi@example.com)";
    message.style.color = "red";
    return;
  }

  let passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  if (!passwordPattern.test(passwordInput)) {
    message.textContent = "Password must be 8+ characters with letters, numbers & a symbol (e.g. Ayushi@123)";
    message.style.color = "red";
    return;
  }

  if (passwordInput !== confirmPasswordInput) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Signup successful!";
  message.style.color = "green";
});