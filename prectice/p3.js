// 14)Write a function that accepts any number of arguments and returns their sum using the rest parameter.

// let a = (...item) => {
//   let sum = 0;
//   for (const i of item) {
//     sum = sum += i;
//   }
//   console.log(sum);
// };
// a(1, 2, 3, 4, 5);

// 15)Create a function that takes any number of arguments (numbers)
//  and calculates the average using the rest parameter.

// let a = (...item) => {
//   let sum = 0;
//   for (const i of item) {
//     sum = sum += i;
//     avg = sum / item.length;
//   }
//   console.log(avg);
// };
// a(1, 2, 3, 4, 5);

//  16)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// let a = (...arg) => {
//   return Math.max(...arg);
// };
// a = (1, 2, 3, 4, 5, 6, 7);
// console.log(a);

// 18)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest
// let str = (...str) => {};
// str = ["zeeshan", "khan", "jgg", "hello"];

// let n = str;
// // console.log(n);
// let r = "";
// for (const i of n) {
//   if (i.length < 5) {
//     r += i + " ";
//   }
// }

// console.log(r.split(" "));

// 19)Edit in array of object  property without changing original array of object.
let b = [
  {
    name: "zeeshan",
    age: 25,
  },
  {
    name: "khan",
    age: 30,
  },
  {
    name: "jgg",
    age: 35,
  },
];

// let c = b.map((item) => {
//   if (item.age === 35) {
//     item.name = "Zeeshan";
//   }
//   return item;
// });
// console.log(c);

// let c = [...b];
// // console.log(c);
// let d = (c[0].name = "Hello");

// console.log(c);
// console.log(...b);

// 26)Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.



// const cVowels = (s) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return s.split("").filter((char) => vowels.includes(char)).length;
// };

// const s = "eeeeeeeeeaaaaaaaaaaaa";
// console.log(cVowels(s));
