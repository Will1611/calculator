"use strict";

// Arithmetic functions

function add(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

function subtract(...nums) {
  let firstNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    firstNum -= nums[i];
  }
  return firstNum;
}

function multiply(...nums) {
  let firstNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    firstNum *= nums[i];
  }
  return firstNum;
}

function divide(...nums) {
  let firstNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    firstNum /= nums[i];
  }
  return firstNum;
}
