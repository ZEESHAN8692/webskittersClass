// 31.  Write a JavaScript program to reverse the order of characters in the string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversed = reverseString("hello");

console.log("Reversed string:", reversed);
