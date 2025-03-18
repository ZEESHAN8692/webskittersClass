// ### Assignment 1: Array Manipulation
// Write a function that:
// - Accepts an array of numbers.
// - Filters out even numbers.
// - Maps the remaining numbers to their squares.
// - Returns the modified array.

// *Example Input:*
//  `[1, 2, 3, 4, 5]`
// *Example Output:*
//  `[1, 9, 25]`

const Manipulation = (...ExampleArr) => {
  let fi = ExampleArr.filter((item) => {
    return item % 2 != 0;
  }).map((item) => {
    return item ** 2;
  });

  console.log(fi);
};
Manipulation(1, 2, 3, 4, 5);
