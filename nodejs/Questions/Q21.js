// 21.	Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let input = "The Quick Brown Fox";

let arr = input.split(" ");
let c = arr.map(
  (item) => item.toLowerCase().charAt(0) + item.slice(1).toUpperCase()
);

console.log(c);
