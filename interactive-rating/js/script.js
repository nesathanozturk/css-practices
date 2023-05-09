// Elements:
const numberBtn = document.querySelectorAll(".number-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thx-card");
const resultText = document.getElementById("result-text");

const removeSelected = () => {
  numberBtn.forEach((numberButton) => {
    numberButton.classList.remove("selected");
  });
};

numberBtn.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    let buttonValue = numberButton.innerText;

    removeSelected();
    numberButton.classList.toggle("selected");

    resultText.innerText = `You selected ${buttonValue} out of 5`;
  });
});

submitBtn.addEventListener("click", () => {
  ratingCard.classList.add("hide");
  thankYouCard.classList.add("active");
});
