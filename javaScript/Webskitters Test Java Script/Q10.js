// ### Assignment 10: If-Else Condition
// Write a function that:
// - Takes a number as input.
// - If the number is divisible by 3, print "Fizz".
// - If divisible by 5, print "Buzz".
// - If divisible by both 3 and 5, print "FizzBuzz".
// - Otherwise, print the number itself.

// *Example Input:* `1`
// *Example Output:*
//  `"FizzBuzz"`

const ifElse = () => {
  let number = 15;
  
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  }
};

ifElse();
