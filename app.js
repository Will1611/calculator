"use strict";

// Temp functions

function checkLogic() {
  console.log(equation, numbers, isNegative);
}

// DOM elements

const input = document.querySelector(`.input`);

const btnClear = document.querySelector(`.btn-clear`);
const btnNeg = document.querySelector(`.btn-neg`);
const btnPercent = document.querySelector(`.btn-percent`);
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

// Other functions

// function pushEquation(btn) {
//   equation.push(btn.textContent);
// }

function getNumbers() {
  btnNums.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      equation.push(btn.textContent);
      numbers.push(btn.textContent);

      input.textContent = numbers.join(``);

      checkLogic();
    });
    return numbers;
  });
}

function clear() {
  btnClear.addEventListener(`click`, () => {
    input.textContent = 0;
    numbers = [];
    equation = [];

    checkLogic();
  });
}

function negate() {
  btnNeg.addEventListener(`click`, () => {
    if (input.textContent != 0) {
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
}

function percentage() {
  btnPercent.addEventListener(`click`, () => {
    console.log(`clicked`);
  });
}

// equation.push(equation.join(``));

// Run code

getNumbers();
clear();
negate();
percentage();
