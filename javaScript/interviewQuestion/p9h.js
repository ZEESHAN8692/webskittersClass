// let a = "I am a Good Good Boy";

// Display Word Length

// let b = a.split(" ");
// let c = b.reduce((acc, cur) => {
//   acc[cur] = cur.length;
//   return acc;
// }, []);
// console.log(c);

// Display Word Count

// let d = b.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(d);

//-------------------------------------
// Display Array Sum Value

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// arr.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// let sum2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum2 += arr[i];
// }
// console.log(sum2);

// Display Only Single Silgle Sting

// let name1 = "I am Good Boy Boy Boy";
// let b = name1.split(" ");
// let c = b.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;

//   return acc;
// }, {});

// let filter = b.filter((item) => c[item] !== 1);

// console.log(filter);

///-------------------------------------------------------

// let arrr = [
//   {
//     id: 1,
//     name: "Zeeshan",
//     Address: "Barilly",
//   },
//   {
//     id: 2,
//     name: "Suman",
//     Address: "Barilly 2",
//   },
// ];

// let arrr2 = arrr.map((item) => {
//   if (item.id === 1) {
//     return { ...item, name: "Rajeeb", age: 25, gender: "Male" };
//   } else if (item.id === 2) {
//     return {
//       ...item,
//       name: "Zeeshan",
//       age: 22,
//       gender: ["male , Female", "Custom"],
//     };
//   }
//   return item;
// });

// console.log(arrr2);

//---------------------------------------

// async function fun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" ");
//       console.log("first ");
//     }, 2000);
//   });
// }

// async function fun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" ");
//       console.log("Second ");
//     }, 2000);
//   });
// }

// fun1().then((res) => {
//   console.log(res);
//   fun2().then((res) => {
//     console.log(res);
//   });
// });

//---------------------------
// Q print Palindrome

// function Palindrome(str) {
//   let data = str.split("").reverse().join("");
//   console.log(data);

// if (data === str) {
//   console.log("Palindrom");
// } else {
//   console.log(" Not Palindrom");
// }
// }
// Palindrome("nitin");

//-------------------------------------------

// Q print Anagrams

// const Anagrams = (str1, str2) => {
//   let Ana1 = str1.split("").sort().join("");
//   let Ana2 = str2.split("").sort().join("");

//   if (Ana1 === Ana2) {
//     console.log("Anagrams");
//   } else {
//     console.log("Not Anagrams");
//   }
// };

// Anagrams("mam", "amm");

//-------------------------------------------

// Write a function to find the first non-repeating character in a string.

// const Hello = (str) => {
//   let b = str.split("");
//   let c = b.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});

//   let e = b.filter((item) => c[item] === 1);
//   console.log(e[0]);
// };

// Hello("ZEESHAN");

//---------------------------------------------------------------

// Display Vovels

// const Vovels = (srt) => {
//   let a = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < srt.length; i++) {
//     if (a.includes(srt[i])) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// Vovels("hello");

//--------------------------------------------

// Print A-Q Random Leater 6 Leter Print

// function Random() {
//   let Leter = "ABCDEFHIJKLMNOPQ";
//   let a = "";
//   for (let i = 0; i < 6; i++) {
//     a += Leter[Math.floor(Math.random() * 16)];
//   }
//   console.log(a);
// }
// Random();

// -----------------------------------------------
// Dispay Random Color Code

// const RColor = () => {
//   let numAL = "123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += numAL[Math.floor(Math.random() * 16)];
//   }
//   console.log(color);
// };
// RColor();

//---------------------------------------------------
// array in 5 opject name address , add lenght lessthen 5, using reduce , using loop
// let arr = [
//   {
//     id: 1,
//     name: "Zeeshan",
//     Address: "Bareilly",
//   },
//   {
//     id: 2,
//     name: "Khan",
//     Address: "cota",
//   },
//   {
//     id: 3,
//     name: "Rajeeb",
//     Address: "JH",
//   },
//   {
//     id: 4,
//     name: "suman",
//     Address: "kolkata",
//   },
// ];

// for (let i of arr) {
//   if (i.Address.length < 5) {
//     console.log(i.Address);
//   }
// }

// let add = arr.reduce((acc, cur) => {
//   if (cur.Address.length < 5) {
//     acc.push(cur.Address);
//   }
//   return acc;
// }, []);
// console.log(add.join(" "));

//-------------------------------------------------------------------

// ek array without push mathod , value add karna hai

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let b = [...arr, 10];
// console.log(b);

//------------------------------------------------------------

// add property in one Object

// let a = {
//   id: 1,
//   name: "cj",
//   address: "jd",
// };
// a.age = 25;
// let b = { ...a, age: 25 };
// console.log(b);

//---------------------------------------------------------------------

// take array use reduce for loop foreach for off for in find sum of all elements in array

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Reduce

// let b = array.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(b);

// For loop
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// for of
// let sum = 0;
// for (let i of array) {
//   sum += i;
// }
// console.log(sum);

// for in loop

// let sum = 0;
// for (let i in array) {
//   sum += array[i];
// }
// console.log(sum);

// forEach loop

// let sum = 0;
// array.forEach((item) => {
//   sum += item;
// });
// console.log(sum);
//------------------------------------------------------------
// remove duplicate using reduce for loop

// Reduce

// let a = [1, 2, 4, 4, 5, 6, 7, 8, 8, 9, 9];
// let b = a.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);

// console.log(b);

// let str = ["apple", "chery", "apple", "banana"];
// let str1 = str.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(str1);

// for loop

// let a = [];
// for (let i = 0; i < str.length; i++) {
//   if (!a.includes(str[i])) {
//     a.push(str[i]);
//   }
// }
// console.log(a);

//------------------------------------------------------

// find the longest string in array using reduce and loop
// Reduce

// let a = ["zeeshanKhan", "rahul", "kolkata", "zeeshanRazaKhan"];
// let b = a.reduce((acc, cur) => {
//   if (cur.length > acc.length) {
//     acc = cur
//   }
//   return acc;
// }, []);
// console.log(b);

// for loop

// let bigStr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i].length > bigStr.length) {
//     bigStr = a[i];
//   }
// }
// console.log(bigStr);

//--------------------------------------
// Hy I am Good Boy". return the max word using filter

// let a = "Hy I am Gooffffd Boy dsgfdgfdgfgdfgdfg";
// let b = a.split(" ");
// let big = "";
// let c = b.filter((item) => {
//   return item.length > big.length ? (big = item) : "";
// });
// console.log(big);
//------------------------------------------------

// Hy I am Good Boy" convert in lowercase

// let a = "Hy I am Good Boy";
// let b = a.toLowerCase();
// console.log(b);

//----------------------------------------------------

// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

// const hello = () => {
//   let arr = [1, 20, 4, 67, 90, 56, 88];
//   let arr2 = arr.sort();
//   console.log(`Second Lowest Number = ${arr2[1]}`);

//   function Hello2() {
//     let arr3 = arr.reverse();
//     console.log(`Second Greatest Number = ${arr3[1]}`);
//   }
//   Hello2();
// };
// hello();

//----------------------------------------------------

// 14)Write a function that accepts any number of arguments and returns their sum using the rest parameter.

// const Fun = (...rest) => {
//   let sum = 0;
//   for (const i of rest) {
//     sum += i;
//   }
//   console.log(sum);
// };
// Fun(1, 2, 3, 4);
//-----------------------------------------------------------------------

// 15)Create a function that takes any number of arguments (numbers)
//  and calculates the average using the rest parameter.

// const average = (...number) => {
//   let sum = 0;
//   for (const i of number) {
//     sum += i;
//   }
//   console.log(sum / number.length);
// };
// average(1, 2, 3, 5, 4);

//--------------------------------------------------------------

//  16)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// const Largest = (...rest) => {
//   let a = 0;
//   for (const i of rest) {
//     if (i > a) {
//       a = i;
//     }
//   }
//   console.log(a);
// };
// Largest(1, 2, 44, 66, 8, 1, 9);

//----------------------------------------------

// 18)Implement a function that takes a variable number of string arguments and returns an array
// containing only the strings with a length greater than a specified value using the rest

// const fun = (...arr) => {
//   let specifiedValue = 4;
//   let b = arr.filter((item) => item.length > specifiedValue);
//   console.log(b);
// };
// fun("apple", "banana", "date", "hel", "orange");

//-------------------------------------------------------------

// 19)Edit in array of object  property without changing original array of object.

// let a = [
//   {
//     id: 1,
//     name: "Zeeshan",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Zeeshan Khan",
//     age: 23,
//   },
//   {
//     id: 3,
//     name: "Zeeshan Raza Khan",
//     age: 21,
//   },
// ];

// let b = a.map((item) => {
//   if (item.id === 1) {
//     return { ...item, name: "Anees", address: "Kolkata" };
//   }
//   return item;
// });

// console.log(b);
// console.log(a);
//-------------------------------------------------------

// 26)Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// const fun = (str) => {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// fun("Hello");

//-------------------------------------------------

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let Sample = [NaN, 0, 15, false, -22, "", undefined, 47, null];
const hello = () => {
  let b = Sample.filter((item) => {
    // return item != NaN && item != 0 && item !=false && item !=" " && item !=null && item;
    return item;
  });
  console.log(b);
};
hello();

//-------------------------------------------

//  Write a JavaScript function to sort the following array of objects by title value.
// const Hello = () => {
//   let arr = [
//     {
//       title: "Zeeshan",
//       name: "Khan",
//     },
//     {
//       title: "Arman",
//       name: "Khan",
//     },
//     {
//       title: "Rehan",
//       name: "Khan",
//     },
//   ];
//   let a = [];
//   for (const i of arr) {
//     a.push(i.title);
//   }
//   let sortArr = a.sort();
//   console.log(sortArr);
// };
// Hello();

//---------------------------------------------

// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// const Hello = () => {
//   let arr1 = [1, 2, 3, 4, 5];
//   let arr2 = [5, 6, 6, 7, 8, 8];
//   let MergeArr = [...arr1, ...arr2];
//   // let final = new Set(MergeArr);
//   // console.log(final);

//   let b = MergeArr.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
//   console.log(b);
// };
// Hello();

//--------------------------------------------

// 35)Check if a string is a palindrome.

// const Palindrome = (str) => {
//   let palin = str.split("").reverse().join("");
//   if (palin === str) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not Palindrom");
//   }
// };
// Palindrome("mam");
// -----------------------------------------------

// 36)Write a function to deeply clone an object.
// const clone = () => {
//   let obj = {
//     name: "Zeeshan",
//     age: 25,
//   };

//   let b = { ...obj, gender: "Male" };
//   console.log(obj);
//   console.log(b);
// };
// clone();

//--------------------------------------

// 37)Merge two objects without overwriting existing keys.
// const merge = () => {
//   let obj1 = {
//     name: "Zeeshan",
//     age: 25,
//   };
//   let obj2 = {
//     name: "Zeeshan Khan",
//     age: 22,
//   };

//   let b = { ...obj1, ...obj2 };
//   console.log(b);
// };
// merge();
//----------------------------------------------------

// 38)Write a function that fetches data from an API using async/await.

// async function API() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const Data = await response.json();
//   return Data;
// }
// API().then((result) => {
//   console.log(result);
// });

//-----------------------------------------

// 39)Write a function that resolves multiple promises in parallel.

// const P1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise One Success");
//   }, 1000);
// });
// const P2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise One Success");
//   }, 2000);
// });
// const P3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise One Success");
//   }, 3000);
// });
// const P4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise One Success");
//   }, 4000);
// });

// let All = Promise.all([P1, P2, P3, P4]);
// All.then((res) => {
//   console.log(res);
// });
//------------------------------------------------------------

// 40)Write a function to check if two strings are anagrams.

// const Anagrams = (str1, str2) => {
//   let sting1 = str1.split("").sort().join("");
//   let sting2 = str2.split("").sort().join("");
//   if (sting1 === sting2) {
//     console.log(`Strings are Anagrams`);
//   } else {
//     console.log(`Strings are Not Anagrams`);
//   }
// };
// Anagrams("hello", "eollh");

//-------------------------------------------------------

// 41)Write a function to find the first non-repeating character in a string.

// const NR = (str) => {
//   let b = str.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});

//   let c = str.filter((item) => b[item] === 1);
//   console.log(c[0]);
// };
// let a = "hhello";
// NR(a.split(""));

//-------------------------------------------------------------------

// Basic Looping: Write a loop to print all numbers from 1 to 100.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
//----------------------------------------

// Even Numbers: Write a loop that prints all even numbers between 1 and 50.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even Number ${i}`);
//   } else {
//     console.log(`Odd Number ${i}`);
//   }
// }
//------------------------------------------------

// Multiples of 3 and 5: Write a loop that prints all multiples of 3 and 5 from 1 to 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(`Divide by 3 = ${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`Divide by 5 = ${i}`);
//   }
// }

//---------------------------------------------------

// Sum of Numbers: Using a loop, calculate the sum of all numbers from 1 to 200.

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

//--------------------------------------------------

// Reverse an Array: Write a loop that reverses an array (without using reverse() method).

// let arr = [1, 2, 3, 4, 5];
// let final = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   final.push(arr[i]);
// }
// console.log(final);
//------------------------------------------------------------

// Square of Numbers: Given an array of numbers, use map to create a new array that contains the squares of each number.

// let arr = [1, 2, 3, 4, 5, 6];
// let b = arr.map((item) => {
//   return item + 10;
// });
// console.log(b);
//-------------------------------------------------

// Convert Strings to Uppercase: Given an array of strings, use map to convert all the strings to uppercase.

// let arr = ["apple", "banana", "cherry"];
// let b = arr.map((item) => {
//   return item.toUpperCase();
// });
// console.log(b);
//-------------------------------------------------

// Double the Array: Given an array of numbers, use map to return a new array where each number is doubled.
// let arr = [1, 2, 3, 4, 5, 6];
// let b = arr.map((item) => {
//   return item * 2;
// });
// console.log(b);
//--------------------------------------------

// String Lengths: Given an array of strings, use map to return an array of the lengths of each string.

// let arr = ["apple", "banana", "cherry"];
// let b = arr.map((item) => {
//   return item.length;
// });
// console.log(b);
//--------------------------------------------------------

// Object Transformation: Given an array of objects with properties name and age, use map to create an array with the names only.

// let arr = [
//   {
//     id: 1,
//     name: "Zeeshan",
//     age: 23,
//   },

// ];

// let b = arr.map((item) => {
//   return item.name;
// });
// console.log(b);
//----------------------------------------------------

// filter:
// Filter Even Numbers: Given an array of numbers, use filter to return an array of all even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = arr.map((item) => {
//   return item % 2 === 0 ? `Even Number ${item}` : `Odd Number = ${item}`;
// });
// console.log(b);
//-------------------------------------------------------------

// Words Longer than 4 Characters: Given an array of strings, use filter to return all words that have more than 4 characters.

// let str = ["apple", "orange", "date", "Banana"];
// let filter = str.filter((item) => {
//   return item.length > 4;
// });
// console.log(filter);

//---------------------------------------------------------------------

// Filter Objects by Age: Given an array of objects with name and age, use filter to return all objects where the age is greater than 18.

// let age = [
//   {
//     name: "zeeshan",
//     age: 15,
//   },
//   {
//     name: "zeeshan Raza",
//     age: 25,
//   },
//   {
//     name: "zeeshan khan",
//     age: 22,
//   },
// ];

// let b = age.filter((item) => {
//   return item.age > 18;
// });

// console.log(b);

//-------------------------------------------------------

// Non-negative Numbers: Given an array of numbers, use filter to return only the non-negative numbers (i.e., numbers greater than or equal to 0).

//----------------------------------------------

// Filter Strings Containing ‘a’: Given an array of strings, use filter to return all strings that contain the letter 'a'.

// let a = ["apple", "ball", "hell", "hut"];
// let b = a.filter((item) => {
//   return item.includes("a");
// });
// console.log(b);
//------------------------------------------

// Sum of All Elements: Given an array of numbers, use reduce to calculate the sum of all the elements.

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let b = a.filter((item) => {
//   return (sum += item);
// });
// console.log(sum);

// let c = a.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(c);

//----------------------------------

// Product of All Elements: Given an array of numbers, use reduce to find the product of all the elements.

// let arr = [1, 3, 4, 5];
// let b = arr.reduce((acc, cur) => {
//   return acc * cur;
// }, 1);
// console.log(b);
//--------------------------------------------

// Find Maximum Number: Given an array of numbers, use reduce to find the maximum number.

// let arr = [32, 34, 6, 78, 9];
// let b = arr.reduce((acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// }, 0);
// console.log(b);
//-------------------------------------------------

// Concatenate Strings: Given an array of strings, use reduce to concatenate them into a single string.
// let a = ["Hello", " zeeshan"];
// let b = a.reduce((acc, cur) => {
//   return acc.concat(cur);
// });
// console.log(b);
// --------------------------------------------------

// Count Occurrences: Given an array of strings, use reduce to count the number of times each word appears.

// let a = ["apple", "apple", "zeeshan", "khan"];
// let b = a.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(b);
//-------------------------------------------------------

// Display max leangth str

// let a = ["apple", "zeeshan khan", "kjjcbdjkcbjkc"];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i].length > b.length) {
//     b = a[i];
//   }
// }

// console.log(b);

//----------------------------------------------
// calculate of aria of triangle

// let base = 10;
// let height = 20;
// console.log(0.5 * base * height);

//-----------------------------------
// // display sinngle value in

// let a = "I am a Boy Boy Boy";

// let b = a.split(" ");
// let c = b.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});

// let d = b.filter((item) => {
//   return c[item] <= 1;
// });
// console.log(d.join(" "));
//-----------------------------
// 2- 5  Table

// for (let i = 2; i <= 5; i++) {
//   console.log(`Table ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//-------------------------------------------------------
// Given two arrays, find their common elements.

// arr1 = [1, 2, 3, 4, 5, 6, 6, 2];
// arr2 = [7, 8, 9, 1, 2, 4, 2];

// let b = arr1.filter((item) => {
//   return arr2.includes(item);
// });
// console.log(b);

//------------------------------------------------------

// Find common elements, but ensure the result has no duplicates

// arr1 = [1, 2, 3, 4, 5, 5, 6, 2];
// arr2 = [7, 8, 91, 2, 5, 5];

// let c = arr1.filter((item) => {
//   return arr2.includes(item);
// });

// console.log(new Set(c));

// let c = [...new Set(arr1.filter((item) => arr2.includes(item)))];
// console.log(c);

//--------------------------------------------------

// Question: Find elements that are unique to each array (not common).

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 8, 4, 5];
// let b = arr1.filter((item) => !arr2.includes(item));
// let c = arr2.filter((item) => !arr1.includes(item));
// let unique = [...b, ...c];
// console.log(unique);

//------------------------------------------------------
// Question: Combine two arrays and remove duplicates.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 8, 4, 5];

// let mainArr = [...arr1, ...arr2];

// let rDuplicate = mainArr.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(rDuplicate);
// ++++++++++++++++
// let rDup = new Set(mainArr);
// console.log(rDup);
// ++++++++++++++
// let rDup = [...new Set([...arr1, ...arr2])];
// console.log(rDup);

//----------------------------------------------------------------

// Question: Find common elements using Set for better performance

// let arr1 = [2, 1, 4, 6, 3];
// let arr2 = [1, 7, 8, 3, 2];
// let set = new Set(arr1);
// let b = arr2.filter((item) => set.has(item));
// console.log(b);

//---------------------------------------------

// Question: Find elements in arr1 that are not in arr2.

// let arr1 = [2, 1, 5, 3, 3,9];
// let arr2 = [1, 7, 8, 3, 2];
// let a = arr1.filter((item) => !arr2.includes(item));
// console.log(a);

// -------------------------------------------------------

// Question: Find elements that are in either array but not in both.

// let arr1 = [2, 1, 5, 3, 3, 9, 10];
// let arr2 = [1, 7, 8, 3, 2, 10];

// let a = arr1.filter((item) => !arr2.includes(item));
// let b = arr2.filter((item) => !arr1.includes(item));

// let f = [...a, ...b];
// console.log(f);

//-------------------------------------------------------------------

// Question: Find common elements in three arrays.

// let arr1 = [2, 1, 5, 3, 3, 9, 10];
// let arr2 = [1, 7, 8, 3, 2, 10];
// let arr3 = [1, 3, 5, 7, 11, 4, 57];

// let a = arr1.filter((item) => arr2.includes(item) && arr3.includes(item));
// console.log(a);

//------------------------------------------------------

// Question: Check if two arrays have no common elements

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let c = arr1.filter((item) => !arr2.includes(item));
// let d = arr2.filter((item) => !arr1.includes(item));

// let b = arr1.every((item) => !arr2.includes(item));
// console.log(b);

//-----------------------------------------------------------

// Question: Count the number of common elements between two arrays.

// let arr1 = [1, 2, 3, 6, 5];
// let arr2 = [4, 5, 6, 6, 5];

// let a = arr1.filter((item) => arr2.includes(item));
// console.log(a.length);

//------------------------------------------------
