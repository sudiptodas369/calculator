let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  // Prevent the display from starting with 0 unless it's the first input
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function toggleSign() {
  if (currentInput) {
    if (currentInput[0] === "-") {
      currentInput = currentInput.slice(1); // Remove the negative sign
    } else {
      currentInput = "-" + currentInput; // Add the negative sign
    }
  }
  display.innerText = currentInput;
}

function percentage() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
  }
  display.innerText = currentInput;
}

function calculate() {
  // Replace ÷ and × with their respective operators
  let expression = currentInput.replace("÷", "/").replace("×", "*");

  try {
    // Evaluate the expression
    currentInput = eval(expression).toString();
  } catch (e) {
    currentInput = "Error";
  }

  display.innerText = currentInput;
}
