let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "0";

const display = document.querySelector("#displayValue");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.classList.contains("number")) {
      if (displayValue === "0") {
        displayValue = e.target.textContent;
      } else {
        displayValue = displayValue + e.target.textContent;
      }

      display.textContent = displayValue;
    }
  });
});
