// ### Assignment 9: Loop
// Write a function that:
// - Accepts an array of numbers.
// - Uses a `for` loop to find the sum of all numbers.
// - Returns the total sum.

// *Example Input:*
//  `[1, 2, 3, 4, 5]`
// *Example Output:*
//  `15`

const Loop = () => {
  let arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
Loop();


