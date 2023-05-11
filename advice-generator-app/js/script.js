const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

const renderResult = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceId.innerText = `#${data.slip.id}`;
    adviceText.innerText = `"${data.slip.advice}"`;
  } catch (e) {
    adviceId.innerText = `Error`;
    adviceText.innerText = `Error`;
    console.log(e);
  }
};

renderResult();

generateBtn.addEventListener("click", () => {
  renderResult();
});
