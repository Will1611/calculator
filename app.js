"use strict";

// Temp functions

function checkLogic() {
  console.log(equation, numbers, isNegative);
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
let equation = [];
let numbers = [];
let isNegative = false;

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

// Misc functions
function changeColor() {
  btnOps.forEach((btn) => {
    if (btn.style.backgroundColor === darkBlue) {
      btn.style.backgroundColor = lightBlue;
    } else btn.style.backgroundColor = darkBlue;
  });
}

// Green buttons
btnNums.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    numbers.push(btn.textContent);

    input.textContent = numbers.join(``);

    checkLogic();
    changeColor();
  });
});

// Red buttons
btnClear.addEventListener(`click`, () => {
  input.textContent = 0;
  numbers = [];
  equation = [];

  checkLogic();
  // clearConsole();

  changeColor();
});

btnNeg.addEventListener(`click`, () => {
  if (input.textContent !== `0`) {
    if (isNegative === false) {
      isNegative = true;
      numbers.unshift(`-`);
      input.textContent = numbers.join(``);

      checkLogic();
    } else {
      isNegative = false;
      numbers.shift();
      input.textContent = numbers.join(``);

      checkLogic();
    }
  }
});

btnPercent.addEventListener(`click`, () => {
  // numbers.pop(input.textContent.length);

  if (input.textContent !== `0`) {
    input.textContent /= 100;
    numbers = [];
    numbers.push(input.textContent);

    checkLogic();
  }
});

// Blue buttons

function pushEquation(btn) {
  let operator;

  switch (btn) {
    case btnAdd:
      operator = `+`;
      break;
    case btnSubtract:
      operator = `-`;
      break;
    case btnMultiply:
      operator = `*`;
      break;
    case btnDivide:
      operator = `*`;
      break;
  }

  btn.addEventListener(`click`, () => {
    changeColor();
    btnEquals.style.backgroundColor = darkBlue;

    btn.style.backgroundColor = lightBlue;
    equation.push(numbers.join(``), operator);

    numbers = [];

    checkLogic();
  });
}

// btnAdd.addEventListener(`click`, () => {
//   changeColor();
//   btnEquals.style.backgroundColor = darkBlue;

//   btnAdd.style.backgroundColor = lightBlue;
//   equation.push(numbers.join(``), `+`);

//   numbers = [];

//   checkLogic();
// });

// Operate

pushEquation(btnAdd);
pushEquation(btnDivide);
pushEquation(btnSubtract);
pushEquation(btnMultiply);

// getNums();
