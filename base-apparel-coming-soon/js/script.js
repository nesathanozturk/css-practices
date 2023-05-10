const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");

emailInput.addEventListener("input", (e) => {
  const isValid = e.target.checkValidity();

  if (!isValid) {
    errorIcon.classList.add("active");
    emailInput.classList.add("error");
  } else {
    errorIcon.classList.remove("active");
    emailInput.classList.remove("error");
  }
});
