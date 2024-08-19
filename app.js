"use strict";

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
    console.log(`NOPE`);
  } else {
    return nums.reduce((acc, curr) => acc / curr);
  }
}
