// 1)Write a function that takes an array of numbers and returns a new array where each element is doubled.
// const double = (arr) => {
//   return arr.map((item) => item * 2);
// };
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// console.log(double(arr));

//-------------------------------------------
// 2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// const number = (arr) => {
//   let b = arr.filter((item) => item % 2 === 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

//---------------------------------------------------------

// 3)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// const sum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`sum = ${sum(arr)}`);

//--------------------------------------------------

// 4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// const maximum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     if (acc < cur) {
//       acc = cur;
//     }
//     return acc;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(`maximum Value = ${maximum(arr)}`);

//----------------------------------------------------------

// 5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// const prime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// function primeArray(arr) {
//   return arr.filter(prime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(primeArray(arr));

// const isprime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//     return true;
//   }
// };
// function filterArray(arr) {
//   return arr.filter(isprime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(filterArray(arr));

//---------------------------------------------------

// 6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// const arrObj = (obj) => {
//   return obj.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let obj = [
//   { title: "hello" },
//   { title: "zeeshan " },
//   { title: "byeee" },
//   { title: "namaste" },
// ];
// console.log(arrObj(obj));

//--------------------------------------------------------

// 7)Write a function that removes duplicate values from an array using the filter function.

// const rDuplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(rDuplicate(arr));

// const duplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(duplicate(arr));

//------------------------------------------------------------

// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
// const sum = (...num) => {
//   let Sum = 0;
//   for (const i of num) {
//     Sum += i;
//   }
//   console.log(Sum);
// };

// sum(1, 2, 3, 4, 5, 6, 7);

//-------------------------------------------------------------
// 9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// const average = (...num) => {
//   return num.reduce((acc, cur) => acc + cur, 0) / num.length;
// };
// console.log(average(1, 2, 3, 4, 5));

//---------------------------------------------------------------

// 10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// const largest = (...num) => {
//   let a = num.sort((a, b) => b - a);
//   return a[0];
// };
// console.log(`largest Number = ${largest(23, 45, 12, 500, 77)}`);

//---------------------------------------------------------------

// 11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

// const hello = (...arry) => {

//   let b = arry.flat()
//   console.log(b);
// };
// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [11, 10, 12];
// let arr3 = [2, 3, 4];
// let arr4 = [9, 3, 5, 2];
// hello(arr1, arr2, arr3, arr4);

//---------------------------------------------
// 12)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest

// const hello = (...arr) => {
//   let specifiedValue = 4;
//   let b = arr.filter((item) => item.length > specifiedValue);
//   console.log(b);
// };
// hello("apple", "banana", "mango", "orange", "date", "eno");

//---------------------------------------------------------------------

// 13)Edit in array of object  property without changing original array of object.

// let arrOfObj = [
//   {
//     id: 1,
//     name: "zeeshan",
//     age: 19,
//   },
//   {
//     id: 2,
//     name: "Anis",
//     age: 28,
//   },
//   {
//     id: 3,
//     name: "Ashfak",
//     age: 25,
//   },
// ];

// let b = arrOfObj.map((item) => {
//   if (item.id === 1) {
//     return { ...item, name: "Zeeshan Khan", age: 23 };
//   } else if (item.id === 2) {
//     return { ...item, name: "ANIS" };
//   }
//   return item;
// });
// console.log(b);

//-----------------------------------------------------------------------

////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [4, 2, 4, 6, 3, 7];
// let b = a.sort((a, b) => a - b);
// console.log(b);

// let d = [4, 2, 4, 6, 3, 7];
// let e = d.sort((a, b) => b - a);
// console.log(e);

// let str = ["d", "e", "a", "b", "c"];
// let com = str.sort((a, b) => a.localeCompare(b));
// console.log(com);

// let stri = ["d", "e", "a", "b", "c"];
// let comp = str.sort((a, b) => b.localeCompare(a));
// console.log(comp);

//------------------------------------
// [1, 2, 5, 78]; max value return korao without using math.max
// const hello = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     if (acc < cur) {
//       acc = cur;
//     }
//     return acc;
//   }, 0);
//   console.log(b);
// };

// hello([1, 2, 5, 78]);

//---------------------------------------------

// let a = ["a", "j", 1, 2];
// only return numbers

// const Hello = () => {
//   let a = ["a", "j", 1, 2];
//   let c = a.join("");
//   let d = [];

//   for (const i of c) {
//     let number = i.match(/\d+/);
//     if (number) {
//       d.push(number[0]);
//     }
//   }

//   return d;
// };
// console.log(Hello());

//---------------------------------------------------------------
// sum of negative number

// let a = [1, 2, 3, -9, 10, -5, -6];
// let b = a
//   .filter((item) => item < 0)
//   .reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

// console.log(b);

//------------------------------

// let a = "abc#$%123";

// let string = [];
// let spacialChar = [];
// let number = [];
// for (const i of a) {
//   if (i.match(/\d+/)) {
//     number.push(i);
//   } else if (i.match(/[a-zA-Z]/)) {
//     string.push(i);
//   } else spacialChar.push(i);
// }
// console.log(string);
// console.log(spacialChar);
// console.log(number);
