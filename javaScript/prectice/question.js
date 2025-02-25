// Q Second Largest Number in Array

// let a = [10, 20, 4, 45, 99, 99];
// let b = [...new Set(a)];
// let d = b.sort((a, b) => b - a);

// console.log("Second Largest Number " + d[1]);

//------------------------------------------------------

// Q Find the Most Frequent Word in a Sentence

// let str = "apple banana apple orange apple ";
// let arr = str.split(" ");
// let b = arr.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(b)

//---------

// let b = {};
// for (const i of arr) {
//   if (b[i]) {
//     b[i] += 1;
//   } else {
//     b[i] = 1;
//   }
// }
// let d = arr.filter((item) => b[item] !== 1);
// console.log(d);

//-------------------------------------------------------

// how to two Object is eguel

// let obj = { name: "zeeshan" };
// let obj1 = { name: "zeeshan" };
// let b = [JSON.stringify(obj) === JSON.stringify(obj1)];
// console.log(b);

//-----------------------------------

// how to check twro array is equel

// let array = [1, 2, 3, 4];
// let array2 = [1, 2, 3, 5];

// function name1(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] !== arr1[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(name1(array, array2));

//----------------------------------------------------------------

// let a = ["zeeshan", "khan"];
// let b = a.includes("khan");
// console.log(b);
// let c = a.indexOf("khan");
// console.log(c);

// for (const i of a) {
//   console.log(i.charAt(0).toUpperCase());
// }

//--------------------------------------------

// 8. How do you extract numbers from a string?

// const hello = (str) => {
//   let arr = str.split(" ");
//   let final = [];
//   for (const i of arr) {
//     let number = i.match(/\d+/);
//     if (number) {
//       final.push(number[0]);
//     }
//   }
//   console.log(final);

//   let b = arr.reduce((acc, cur) => {
//     let number = cur.match(/\d+/);
//     if (number) {
//       acc.push(number[0]);
//     }
//     return acc;
//   }, []);
//   console.log(b);
// };
// hello("jshkj321 kh23 lj435 jhhv36 ");

// --------------------------------------
// 10. How do you replace all occurrences of a word in a string without using `.replaceAll()`?

// let a = "my name is zeeshan zeeshan";
// let b = a.replace(/zeeshan/g, "zeeshan khan");

// console.log(b);

//-----------------------------------------
// 11. How do you find the difference between two objects in JavaScript?

// let obj = { name: "zeeshan" };
// let obj1 = { name: "zeeshan" };

// let b = JSON.stringify(obj) === JSON.stringify(obj1);
// console.log(b);

//-------------------------------------------------------------
// 12. How do you convert an object into an array of key-value pairs?

// let obj = { name: "zeeshna", age: 25 };

// let c = Object.entries(obj);
// console.log(c);

//---------------------------------------------------------
// 13. How do you merge multiple objects dynamically?

// let obj = { name: "zeeshna", age: 25 };
// let obj1 = { gender: "Male" };
// let obj2 = { adddess: "bareilly" };

// let b = Object.assign({}, obj, obj1, obj2);
// console.log(b);

// let c = { ...obj, obj1, obj2 };
// console.log(c);

//-----------------------------------------------------
// 14. How do you prevent modification of an object in JavaScript?

// let obj = {
//   name: "zeeshan",
//   age: 25,
// };
// Object.freeze(obj);
// obj.age = 35;
// console.log(obj);

//---------------------------------------------
// 15. How do you remove a key from an object without mutating the original object?

// let obj = {
//   name: "zeeshan",
//   age: 25,
// };

// let b = { ...obj };
// delete b.name;
// console.log(b);
// console.log(obj);

// let b = Object.fromEntries(
//   Object.entries(obj).filter(([key]) => key != "name")
// );
// console.log(b);
//--------------------------------------------------

// let a = "my name is zeeshan";
// let c = a.split(" ");
// let b = {};
// for (const i of a) {
//   if (b[i]) {
//     b[i] += 1;
//   } else {
//     b[i] = 1;
//   }
// }
// console.log(b);

//

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

//------------------------

// let a = "abc#$%123";
// let spc = [];
// for (const i of a) {
//   if (i.match(/[^a-zA-Z0-9]/)) {
//     spc.push(i);
//   }
// }
// console.log(spc);


//---------------------------------------

