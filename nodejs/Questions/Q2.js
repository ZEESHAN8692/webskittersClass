// 2.	Write a JavaScript program to remove specified elements from the right of a given array of elements.?

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let specified = 4;
const remove = (arr, s) => {
  console.log(arr.slice(0, -s));
};
remove(arr, specified);
