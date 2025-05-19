// 25.	Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items =
// Expected Output :
// console.log(binary_Search(itezms, 1)); //0
// console.log(binary_Search(items, 5)); //4

let item = [1, 2, 3, 4, 5, 7, 8, 9];
const binary_Search = (item, value) => {
  return item.indexOf(value);
};
console.log(binary_Search(item, 5));
