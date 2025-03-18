// ### Assignment 2: String Operations
// Write a function that:
// - Takes a string as input.
// - Converts it into uppercase.
// - Reverses the string.
// - Returns the modified string.

// *Example Input:*
//  `"hello"`
// *Example Output:* `"OLLEH"`

const stringOperations = (str) => {
  let modifiedString = str.split("").reverse().join("").toUpperCase();
  console.log(modifiedString);
};
stringOperations("hello");
