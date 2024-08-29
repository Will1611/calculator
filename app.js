"use strict";

// Temp functions

function checkLogic() {
  console.log(sum, initialValue, currentValue, operator);
}

function clearConsole() {
  console.clear();
}

// DOM elements

// Screen display
const input = document.querySelector(`.input`);

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
let sum = 0;
let initialValue = ``;
let currentValue = ``;
let operator = ``;

// Arithmetic functions

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
    input.textContent = `NOPE`;
  } else {
    return nums.reduce((acc, curr) => acc / curr);
  }
}

// Red buttons
btnClear.addEventListener(`click`, () => {
  input.textContent = 0;
  sum = 0;
  currentValue = ``;
  operator = ``;

  checkLogic();
});

btnNeg.addEventListener(`click`, () => {
  // if (input.textContent !== `0`) {
  //   if (isNegative === false) {
  //     isNegative = true;
  //     numbers.unshift(`-`);
  //     input.textContent = numbers.join(``);
  //     checkLogic();
  //   } else {
  //     isNegative = false;
  //     numbers.shift();
  //     input.textContent = numbers.join(``);
  //     checkLogic();
  //   }
  // }
});

btnPercent.addEventListener(`click`, () => {
  // if (input.textContent !== `0`) {
  //   input.textContent /= 100;
  //   numbers = [];
  //   numbers.push(input.textContent);
  //   checkLogic();
  // }
});

// Green buttons
btnNums.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    currentValue += btn.textContent;
    input.textContent = currentValue;

    checkLogic();
    // numbers.push(btn.textContent);
    // input.textContent = numbers.join(``);
    // checkLogic();
  });
});

// Blue buttons

btnOps.forEach((btn) => {
  btn.addEventListener(`click`, (event) => {
    initialValue = currentValue;
    currentValue = ``;

    if (event.target === btnAdd) {
      operator = `+`;
    } else if (event.target === btnSubtract) {
      operator = `-`;
    } else if (event.target === btnMultiply) {
      operator = `*`;
    } else if (event.target === btnDivide) {
      operator = `/`;
    }

    checkLogic();
    // equation.push(numbers.join(``));
    // equation.push(btn.textContent);
    // numbers = [];
    // checkLogic();
  });
});

btnEquals.addEventListener(`click`, () => {
  if (operator === `+`) {
    sum += Number(initialValue) + Number(currentValue);
    initialValue = ``;
    currentValue = ``;
  } else if (operator === `-`) {
    sum -= Number(currentValue);
  } else if (operator === `*`) {
    sum *= Number(currentValue);
  } else if (operator === `/`) {
    sum /= Number(currentValue);
  }

  input.textContent = sum;
  operator = ``;
  checkLogic();

  // equation.push(numbers.join(``));
  // numbers = [];
  // operate();
});

// Operate

function operate() {
  // console.log(`Equation is: ${equation.join(``)}`);
}

// Run code
