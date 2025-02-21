// ### Arrays
// 1. How do you shuffle an array randomly in JavaScript?

// const shuffle = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let random = Math.floor(Math.random() * (i + 1));

//     let tem = arr[i];
//     arr[i] = arr[random];
//     arr[random] = tem;
//   }
//   return arr;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(shuffle(arr));
//--------------------------------------------------------

// 2. How do you remove falsy values (like `null`, `undefined`, `0`, `""`, `NaN`, `false`) from an array?

// let arr = [null, undefined, 0, " ", NaN, false, 25, 30];

// let fltr = arr.filter((item) => {
//   return (
//     item != NaN &&
//     item != undefined &&
//     item != 0 &&
//     item != " " &&
//     item != false &&
//     item != null &&
//     item
//   );
// });
// console.log(fltr);
//------------------------------------------------------------

// 3. How do you check if two arrays are equal in JavaScript?

// const equal = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// let a = [1, 2, 3, 4];
// let b = [1, 2, 3, 4];
// let c = [4, 3, 2, 1];

// console.log(equal(a, c));

//--------------------------------------------

// 4. What is the difference between `Array.includes()` and `Array.indexOf()`?

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.includes(9)); // check karta hai ki value array ke ander hai ya nahi

// console.log(arr.indexOf(3));    /// ye value ka index check karta hai

// 5. How do you convert an array of objects into a single object using `.reduce()`?

//--------------------------------------------------------

// 6. How do you capitalize the first letter of each word in a string?

// const capitalize = (str) => {
//   return str
//     .split(" ")
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     .join(" ");
// };
// let a = capitalize("my name zeeshan");
// console.log(a);

// const capitstr = (str) => {
//   return str
//     .split(" ")
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     .join(" ");
// };
// console.log(capitstr("hello my name is zeeshan"));

//---------------------------------------------

// 7. How do you check if a string contains only numbers?

// 8. How do you extract numbers from a string?

// let strt = "h1llo32 ljsa32h8fsdn o9fe  9w843  byu7";
// let a = strt.split(" ");
// let num = [];
// a.forEach((item) => {
//   let number = item.match(/\d+/);
//   if (number) {
//     num.push(number[0]);
//   }
// });
// console.log(num);

// const extract = (str) => {
//   let number = str.split(" ");
//   let num = [];
//   number.forEach((item) => {
//     let numbers = item.match(/\d+/);
//     if (numbers) {
//       num.push(numbers[0]);
//     }
//   });
//   console.log(num);
// };
// extract("23dns8d sdf843 88df 65");

//-----------------------------------------------------------------

// 9. What is the difference between `charAt()` and `charCodeAt()`?

// let a = "My Name is Zeeshan";
// let b = a.charAt(0); // charAt ka kaam string me kisi ek leter ko nikal sakte ho
// let c = a.charCodeAt(0); // charCodeAt ka kaam keybord ke key ka code nikalna hota hai
// console.log(c);

//-----------------------------------------------

// 10. How do you replace all occurrences of a word in a string without using `.replaceAll()`?

// let a = "hello world";
// let b = a.replace(/l/g, "b");
// console.log(b);

// ----------------------------------------

// ### Objects

// 11. How do you find the difference between two objects in JavaScript?
// let obj1 = {
//   name: "zeehan",
//   age: 25,
// };
// let obj2 = {
//   name: "zeehan",
//   age: 25,
//   gender: "Male",
// };
// let b = obj1.filter((item) => !obj2.includes(item));
// console.log(b);
//--------------------------------------------------------

// 12. How do you convert an object into an array of key-value pairs?

// let obj1 = {
//   name: "zeehan",
//   age: 25,
// };

// let b = Object.entries(obj1);
// console.log(b);

// 13. How do you merge multiple objects dynamically?

// let obj1 = { name: "John" };
// let obj2 = { age: 30 };
// let obj3 = { city: "New York" };

// let mergedObj = Object.assign({}, obj1, obj2, obj3);
// let mergedObject = { ...obj1, ...obj2, ...obj3, gender: "Male" };
// mergedObject.address = "Bareilly";
// console.log(mergedObject);

//-------------------------------------------------------

// 14. How do you prevent modification of an object in JavaScript?
// 15. How do you remove a key from an object without mutating the original object?

// ---

// ### Async/Await & Promises
// 16. What happens when you `await` a non-promise value?
// 17. How do you implement a delay in JavaScript using `Promise`?
// 18. How do you cancel a promise before it resolves?
// 19. What is the difference between `Promise.resolve()` and `Promise.reject()`?
// 20. Explain `Promise chaining` with an example.

// ---

// ### Spread & Rest Operators
// 21. How do you convert a function that takes multiple arguments into a function that takes an array?
// 22. Can you use the spread operator inside function parameters? Why or why not?
// 23. How do you use the rest operator to extract specific properties from an object?
// 24. What happens when you spread an object inside an array?
// 25. How do you combine multiple objects with nested properties using the spread operator?

// ---

// ### Functions
// 26. What is the difference between a pure function and an impure function?
// 27. How does JavaScript handle function hoisting?
// 28. What is the difference between an arrow function and a regular function?
// 29. How do you implement a debounce function in JavaScript?
// 30. How do you implement a throttle function in JavaScript?

// ---

// ### Loops
// 31. How do you break out of a `.forEach()` loop in JavaScript?
// 32. How do you iterate over an object’s keys and values?
// 33. What is the difference between `for…of` and `for…in` loops?
// 34. How do you implement a loop that executes asynchronously?
// 35. How do you create an infinite loop in JavaScript, and how can you stop it?

// ---

// ### If-Else Statements
// 36. What is the difference between `==` and `===` in JavaScript?
// 37. How do you use a ternary operator to replace an if-else statement?
// 38. What is the difference between `if-else` and `switch` statements?
// 39. How can you check multiple conditions in an `if` statement efficiently?
// 40. How do you handle multiple asynchronous conditions inside an `if` statement?

// ---

// let aar = [1, 2, 3, 4, 5, 6];
// aar[aar.length] = 10;
// console.log(aar);
