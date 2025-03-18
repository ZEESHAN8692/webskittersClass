// ### Assignment 7: Rest Operator
// Create a function that:
// - Accepts multiple numbers as arguments using the rest operator.
// - Returns the sum of all numbers.

// *Example Input:* `sum(1, 2, 3, 4, 5)`
// *Example Output:* `15`

const restOperator = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
restOperator(1, 2, 3, 4, 5);
