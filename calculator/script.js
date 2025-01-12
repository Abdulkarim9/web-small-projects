const labelInput = document.querySelector(".input");
const labelOuput = document.querySelector(".output");
const allClearBtn = document.querySelector(".all-clear");
const deleteBtn = document.querySelector(".delete");
const dotBtn = document.querySelector(".dot");
const equalBtn = document.querySelector(".equal");
const refreshBtn = document.querySelector(".refresh");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

labelInput.textContent = "";
labelOuput.textContent = "";

let operator, number1, number2, result;

// FUNCTIONS
const clearAll = function () {
  labelInput.textContent = "";
  labelOuput.textContent = "";
};

// RESET ALL
const resetAll = function () {
  number1 = 0;
  number2 = 0;
  operator = "";
  labelInput.textContent = "";
  labelOuput.textContent = "";
};

/// Operation Function
// ADDITION
const add = function (number1, number2) {
  return Number(number1) + Number(number2);
};

// SUBSRACTION
const substract = function (number1, number2) {
  return Number(number1) - Number(number2);
};

// MULTIPLICATION
const multiply = function (number1, number2) {
  return Number(number1) * Number(number2);
};

// DIVIDE
const divide = function (number1, number2) {
  return Number(number1) / Number(number2);
};

// MODULUS
const modulus = function (number1, number2) {
  return Number(number1) % Number(number2);
};

const displayResult = function () {
  labelOuput.textContent = `${number1} ${operator} ${number2} =`;
  labelInput.textContent = result;
};

// EVENT HANDLERS
// NUMBER BUTTONS
numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (labelOuput.textContent !== "") clearAll();
    if (labelInput.textContent !== "0")
      labelInput.textContent += btn.textContent;
  });
});

// OPERATOR BUTTONS
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number1 = labelInput.textContent;
    operator = btn.textContent;
    labelInput.textContent = "";
  });
});

// DELETE BUTTON
deleteBtn.addEventListener("click", () => {
  const inputArr = labelInput.textContent.split("");
  inputArr.pop();
  labelInput.textContent = inputArr.join("");
});

// ALL CLEAR BUTTON
allClearBtn.addEventListener("click", clearAll);

// REFRESH BUTTON
refreshBtn.addEventListener("click", resetAll);

// DOT BUTTON
dotBtn.addEventListener("click", () => {
  if (labelInput.textContent === "" || labelInput.textContent.includes("."))
    return;
  else labelInput.textContent += ".";
});

// EQUAL BUTTON
equalBtn.addEventListener("click", () => {
  number2 = labelInput.textContent;

  switch (operator) {
    case "+":
      result = add(number1, number2);
      displayResult();
      break;

    case "-":
      result = substract(number1, number2);
      displayResult();
      break;

    case "x":
      result = multiply(number1, number2);
      displayResult();
      break;

    case "÷":
      result = divide(number1, number2);
      displayResult();
      break;

    case "%":
      result = modulus(number1, number2);
      displayResult();
      break;

    default:
      return;
  }
});
