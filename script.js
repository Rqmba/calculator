let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "0";

const display = document.querySelector("#displayValue");
const buttons = document.querySelectorAll("button");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error : Dont'do that!";
  }
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "×") {
    return multiply(a, b);
  } else if (operator === "÷") {
    return divide(a, b);
  }
}

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

    if (e.target.classList.contains("operator")) {
      firstNumber = displayValue;
      operator = e.target.textContent;
      displayValue = "0";
    }

    if (e.target.classList.contains("action") && e.target.id === "btn-equal") {
      if (firstNumber === null || operator === null) {
        return;
      }

      firstNumber = parseFloat(firstNumber);
      displayValue = parseFloat(displayValue);
      operate(firstNumber, displayValue);
      displayValue = operate(operator, firstNumber, displayValue);

      if (Number.isInteger(displayValue)) {
        display.textContent = displayValue;
      } else {
        display.textContent = displayValue.toFixed(2);
      }
    }
    if (e.target.textContent === "AC") {
      firstNumber = null;
      secondNumber = null;
      operator = null;
      displayValue = "0";
      display.textContent = "0";
    }
  });
});
