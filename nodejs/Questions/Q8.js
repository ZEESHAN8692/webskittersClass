// 8.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

let arr = [1, 2, 3, 4, 5];
const number = (arr) => {
  let secondLowest = arr.sort((a, b) => a - b);
  let secondGreatest = arr.sort((a, b) => b - a);
  console.log("second lowest :- ", secondLowest[1]);
  console.log("second greatest :- ", secondGreatest[1]);
};
number(arr);
