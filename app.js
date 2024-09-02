"use strict";

// Temp functions

function checkLogic() {
  console.log(
    `firstNum: ${firstNum}, secondNum: ${secondNum}, operator: ${operator}`
  );
}

// DOM elements

// Screen display
const display = document.querySelector(`.display`);

// Individual blue buttons
const btnDivide = document.querySelector(`.btn-divide`);
const btnMultiply = document.querySelector(`.btn-multiply`);
const btnSubtract = document.querySelector(`.btn-subtract`);
const btnAdd = document.querySelector(`.btn-add`);
const btnEquals = document.querySelector(`.btn-equals`);

// Individual red buttons
const btnClear = document.querySelector(`.btn-clear`);
const btnNeg = document.querySelector(`.btn-neg`);
const btnPercent = document.querySelector(`.btn-percent`);

// Button arrays
const btnOps = Array.from(document.querySelectorAll(".btn-operator"));
const btnNums = Array.from(document.querySelectorAll(".btn-number"));

// Colors
const lightBlue = `#aaaafb`;
const darkBlue = `#4f4fc2`;

// Logic variables

let firstNum = ``;
let secondNum = ``;
let operator = ``;
let displayValue = ``;

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

function subtract(...nums) {
  return nums.reduce((acc, curr) => acc - curr);
}

function multiply(...nums) {
  return nums.reduce((acc, curr) => acc * curr);
}

function divide(...nums) {
  if (nums.includes(0)) {
    display.textContent = `NOPE`;
  } else {
    return nums.reduce((acc, curr) => acc / curr);
  }
}

function operate(num1, num2, operator) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  if (operator === `+`) {
    firstNum = add(num1, num2);
  } else if (operator === `-`) {
    firstNum = subtract(num1, num2);
  } else if (operator === `/`) {
    firstNum = divide(num1, num2);
  } else if (operator === `*`) {
    firstNum = multiply(num1, num2);
  }

  operator = ``;
}

// Red buttons
btnClear.addEventListener(`click`, () => {
  firstNum = ``;
  secondNum = ``;
  operator = ``;
  displayValue = ``;
  display.textContent = `0`;
});

// Green buttons
btnNums.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    displayValue += btn.textContent;
    display.textContent = displayValue;

    if (!operator) {
      firstNum = displayValue;
    } else {
      secondNum = displayValue;
    }
  });
});

// Blue buttons
btnAdd.addEventListener(`click`, () => {
  operator = `+`;
  displayValue = ``;

  operate(firstNum, secondNum, operator);

  checkLogic();
});

btnSubtract.addEventListener(`click`, () => {
  operator = `-`;
  displayValue = ``;

  operate(firstNum, secondNum, operator);

  checkLogic();
});

btnEquals.addEventListener(`click`, () => {});
