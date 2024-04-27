const form = document.getElementById("emailForm");
const emailInput = document.getElementById("input-email");
const input = document.getElementById("input");
const errorMessage = document.getElementById("error-message");
const iconError = document.getElementById("icon-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === "") {
    errorMessage.textContent = "Please enter your email address.";
    errorMessage.style.color = "red";
    input.style.borderColor = "red";
    iconError.style.visibility = "visible";
    return;
  }

  if (!isValidEmail) {
    errorMessage.textContent = "Please provide a valid email";
    errorMessage.style.color = "red";
    input.style.borderColor = "red";
    iconError.style.visibility = "visible";
    return;
  } else {
    errorMessage.textContent = "Thanks for signing up!";
    errorMessage.style.color = "";
    input.style.borderColor = "";
    emailInput.value = "";
    iconError.style.visibility = "hidden";
    return;
  }
});
