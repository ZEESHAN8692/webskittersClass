// 23.	Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
let arr = [1, 2, 3, 4, 52, 1, 3, 3, 4, 6, 3, 2, 1];

let b = [...new Set(arr)];
console.log(b);
