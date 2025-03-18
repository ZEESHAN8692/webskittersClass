// ### Assignment 8: Functions & Callbacks
// Write a function `calculate` that:
// - Accepts two numbers and a callback function.
// - Calls the callback function with the two numbers.
// - Implement `add`, `subtract`, and `multiply` as callback functions.

// *Example:*

// js
// calculate(5, 3, add); // 8
// calculate(5, 3, subtract); // 2
// calculate(5, 3, multiply); // 15

// const calculate = (num1, num2, hello) => {
//   if (hello === add) {
//     console.log(num1 + num2);
//   } else if (hello === subtract) {
//     console.log(num1 - num2);
//   } else if (hello === multiply) {
//     console.log(num1 * num2);
//   }
// };

// const add = () => {};
// const subtract = () => {};
// const multiply = () => {};

// calculate(5, 3, multiply);

function sum(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function calculate(a, b, callback) {
  return callback(a, b);
}
calculate(5, 3, sum);
calculate(5, 3, subtract);
calculate(5, 3, multiply);
