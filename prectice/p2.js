// Hy I am Good Boy". return the max word using filter

// e = "Hy I am Good Boy";
// let a = e.split(" ");

// let d = "";
// let b = a.filter((item) => {
//   if (item.length > d.length) {
//     d = item;
//   }
//   return item;
// });
// console.log(d);

// Hy I am Good Boy" convert in lowercase

// let a = "Hy I am Good Boy";
// let b = a.toLowerCase();
// console.log(b);

// 20-12-2000" return in array

// let date = "20-12-2000";
// let arrDate = date.split("-");
// console.log(arrDate);

// [1,2,3,4,5,6] return in object

// let a = [1, 2, 3, 4, 5, 6];

// let obj = a.reduce((acc, cur) => {
//   acc[cur] = cur;
//   return acc;
// }, {});
// console.log(obj);

// obj = {};
// a.forEach((value, index) => {
//   obj[index] = value;
// });
// console.log(obj);

// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
let a = [1, 4, 5, 8, 7, 9, 2, 1];
let b = [...new Set(a)].sort();
for (const i of b) {
  if (i.length < 2) {
    console.log("There is no second lowest or second greatest number");
  }

  let L = [i[i]];
  let G = [i[i.length - 1]];
  console.log(L);
  console.log(G);
}
// if (b.length < 2) {
//   console.log("There are less than two unique numbers in the array.");
// }
// let c = b[1];
// let d = b[b.length - 2];
// console.log(c);

// function findSecondLowestAndSecondGreatest(arr) {
//   // Remove duplicates and sort the array
//   const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

//   // Ensure the array has at least two unique numbers
//   if (uniqueArr.length < 2) {
//     return "Array must have at least two unique numbers";
//   }

//   // Second lowest is the second element, second greatest is the second to last element
//   const secondLowest = uniqueArr[1];
//   const secondGreatest = uniqueArr[uniqueArr.length - 2];

//   return {
//     secondLowest,
//     secondGreatest,
//   };
// }

// // Example usage
// const arr = [5, 3, 9, 1, 4, 9, 3, 6];
// const result = findSecondLowestAndSecondGreatest(arr);
// console.log(result); // { secondLowest: 3, secondGreatest: 6 }
