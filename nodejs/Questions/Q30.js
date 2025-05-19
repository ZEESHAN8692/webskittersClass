// 30.	Write a JavaScript function that merges two arrays and removes all duplicate elements.
// 31.	Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

const merge_array = (...arr) => {
  return [...new Set(arr.flat())];
};
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
