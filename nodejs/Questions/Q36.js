// 37.	 Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function

const hello = (arr, func) => {
  let a = arr.map(func);
  return Math.min(...a);
};
const Square = (num) => num * num;
let arr = [4, 2, 3, 1, 5, 6];
let a = hello(arr, Square);
console.log(a);
