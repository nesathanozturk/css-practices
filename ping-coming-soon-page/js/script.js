const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailInput.addEventListener("input", () => {
  if (!emailRegex.test(emailInput.value) || emailInput.value === "") {
    errorMessage.classList.add("active");
    submitButton.classList.add("active");
  } else {
    errorMessage.classList.remove("active");
    submitButton.classList.remove("active");
  }
});
