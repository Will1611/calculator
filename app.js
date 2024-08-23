"use strict";

// Temp functions

function checkLogic() {
  console.log(equation, numbers, isNegative);
}

// DOM elements

const input = document.querySelector(`.input`);

const btnDivide = document.querySelector(`.btn-divide`);
const btnMultiply = document.querySelector(`.btn-multiply`);
const btnSubtract = document.querySelector(`.btn-subtract`);
const btnAdd = document.querySelector(`.btn-add`);
const btnEquals = document.querySelector(`.btn-equals`);

const btnClear = document.querySelector(`.btn-clear`);
const btnNeg = document.querySelector(`.btn-neg`);
const btnPercent = document.querySelector(`.btn-percent`);

const btnOps = Array.from(document.querySelectorAll(".btn-operator"));
const btnNums = Array.from(document.querySelectorAll(".btn-number"));

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

// Event Listeners

btnNums.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    numbers.push(btn.textContent);

    input.textContent = numbers.join(``);

    checkLogic();
  });
});

btnClear.addEventListener(`click`, () => {
  input.textContent = 0;
  numbers = [];
  equation = [];

  checkLogic();
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
    numbers.push(input.textContent);
    equation.push(input.textContent);

    // numbers = [];

    checkLogic();
  }
});

// Operator buttons

btnAdd.addEventListener(`click`, () => {
  btnOps.forEach((btn) => {
    btn.style.backgroundColor = `#4f4fc2`;
  });

  btnEquals.style.backgroundColor = `#4f4fc2`;

  btnAdd.style.backgroundColor = `#aaaafb`;
  equation.push(numbers.join(``), `+`);

  numbers = [];

  checkLogic();
});

btnSubtract.addEventListener(`click`, () => {
  btnOps.forEach((btn) => {
    btn.style.backgroundColor = `#4f4fc2`;
  });

  btnEquals.style.backgroundColor = `#4f4fc2`;

  btnSubtract.style.backgroundColor = `#aaaafb`;
  equation.push(numbers.join(``), `-`);

  numbers = [];

  checkLogic();
});

btnMultiply.addEventListener(`click`, () => {
  btnOps.forEach((btn) => {
    btn.style.backgroundColor = `#4f4fc2`;
  });

  btnEquals.style.backgroundColor = `#4f4fc2`;

  btnMultiply.style.backgroundColor = `#aaaafb`;
  equation.push(numbers.join(``), `*`);

  numbers = [];

  checkLogic();
});

btnDivide.addEventListener(`click`, () => {
  btnOps.forEach((btn) => {
    btn.style.backgroundColor = `#4f4fc2`;
  });

  btnEquals.style.backgroundColor = `#4f4fc2`;

  btnDivide.style.backgroundColor = `#aaaafb`;
  equation.push(numbers.join(``), `/`);

  numbers = [];

  checkLogic();
});
