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
//------------------------------------

// 5. How do you convert an array of objects into a single object using `.reduce()`?

// let arr = [
//   { name: "zeeshan", age: 25 },
//   { city: "Karachi", country: "Pakistan" },
//   { job: "Developer" },
// ];
// let b = arr.reduce((acc, cur) => {
//   return { ...acc, ...cur };
// }, {});
// console.log(b);

// let arr = ["my", "name", "zeeshan"];
// let b = arr.reduce((acc, cur) => {
//   acc[cur] = cur;
//   return acc;
// }, {});
// console.log(b);

// let b = {};
// for (let i = 0; i < arr.length; i++) {
//   if (b[i]) {
//     b += i;
//   } else {
//     b[i] = arr[i];
//   }
// }
// console.log(b);
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

// const Hello = (str) => {
//   return str
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     .join(" ");
// };
// let string = "hello my name is zeeshan";
// console.log(Hello(string.split(" ")));

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

// const Hello = (str) => {
//   let b = str.split(" ");
//   let c = [];
//   b.forEach((item) => {
//     let number = item.match(/\d+/);
//     if (number) {
//       c.push(number[0]);
//     }
//   });
//   return c;
// };
// console.log(Hello("jkas32kjbb 543h6 346 ks8 suj "));

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
// };

// console.log(JSON.stringify(obj1));

//--------------------------------------------------------

// 12. How do you convert an object into an array of key-value pairs?

// let obj1 = {
//   name: "zeehan",
//   age: 25,
// };

// let b = Object.entries(obj1);
// console.log(b);

//------------------------------------------

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
// Object ki Modification ko rokne ke liye freeze ka use kar sakte hai

// let obj = {
//   name: "Zeeshan",
//   age: 23,
// };
// Object.freeze(obj);
// obj.age = 30;
// console.log(obj.age);

//-----------------------------------------------------------

// 15. How do you remove a key from an object without mutating the original object?

let newObj = {
  name: "Zeeshan",
  age: 23,
  gender: "Male",
};

// let obj = { ...newObj };
// delete obj.age;
// console.log(obj);
// console.log(newObj);
// console.log(newObj);
// delete newObj.age;
// console.log(newObj);

// let b = Object.fromEntries(
//   Object.entries(newObj).filter(([key]) => key != "age")
// );
// console.log(b);

//-------------------------------------------------------

// ### Async/Await & Promises

// 16. What happens when you `await` a non-promise value?

// Agar aap await ka use kisi non-promise value ke saath karte ho, to JavaScript us value ko automatically wrap kar leta hai ek resolved promise mein. Matlab, jo value aap await kar rahe ho, wo directly return ho jayegi as if wo ek resolved promise tha.

// async function testAwait() {
//   const value = 42; // Non-promise value
//   const result = await value; // Awaiting a non-promise value
//   console.log(result); // Output: 42
// }

// testAwait();

//-----------------------------------------------------------------

// 17. How do you implement a delay in JavaScript using `Promise`?

//JavaScript me Promise ka use karke delay implement karne ka tariqa bahut simple hai. setTimeout function ko promise ke saath combine karke hum delay implement kar sakte hain.

// const Deley = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// };
// Deley().then((res) => {
//   console.log(res);
// });

//--------------------------------------------------
// 18. How do you cancel a promise before it resolves?

// JavaScript mein, directly ek Promise ko cancel karna thoda tricky hota hai, kyunki ek baar promise execute ho gaya toh usse cancel nahi kiya jaa sakta. Lekin, aap promise ko cancel karne ke liye ek "cancelable promise" approach use kar sakte hain.

// function cancelablePromise(ms) {
//   return new Promise((resolve, reject) => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     setTimeout(() => {
//       if (signal.aborted) {
//         reject("Promise was cancelled");
//       } else {
//         resolve("Promise resolved after delay");
//       }
//     }, ms);

//     return controller; // controller ko return karenge jise use karke cancel kar sakte hain
//   });
// }

// // Example of using the cancelable promise
// const controller = cancelablePromise(5000); // 5 seconds delay
// controller
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// // Ab hum cancel kar sakte hain
// setTimeout(() => {
//   controller.abort(); // Yeh cancel kar dega promise ko
// }, 2000); // 2 seconds ke baad cancel ho jayega

//--------------------------------------------------------

// 19. What is the difference between `Promise.resolve()` and `Promise.reject()`?
// Promise.resolve

// const resolvedPromise = Promise.resolve("success");

// resolvedPromise.then((value) => {
//   console.log(value);
// });

// const rejectedPromise = Promise.reject("Something went wrong!");

// rejectedPromise.catch((error) => {
//   console.log(error); // Output: Something went wrong!
// });

///1. Promise.resolve()
///Promise.resolve() ka use tab kiya jata hai jab aapko ek already resolved promise chahiye hoti hai. Matlab, agar aapke paas koi value hai aur aap chahte hain ki wo value promise ke through resolve ho jaye, toh aap Promise.resolve() ka use karenge.

///1. Promise.reject()
//Promise.reject() ka use tab kiya jata hai jab aapko ek rejected promise chahiye hoti hai. Matlab, jab koi error ya rejection dena ho, toh Promise.reject() ka use karte hain.

// Promise.resolve() -> Jab aapko ek "successful" promise chahiye.
// Promise.reject() -> Jab aapko ek "failed" promise chahiye.

//-----------------------------------------------

// 20. Explain `Promise chaining` with an example.

// const hello = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Display Data");
//   });
// };
// hello()
//   .then((res) => {
//     console.log(res);
//     return res;
//   })
//   .then((res2) => {
//     console.log(res2.toUpperCase());
//     return res2;
//   })
//   .then((res3) => {
//     console.log(res3.toLowerCase());
//     return res3;
//   })
//   .then((final) => {
//     console.log(final);
//   });

//------------------------------------------------

// ### Spread & Rest Operators
// 21. How do you convert a function that takes multiple arguments into a function that takes an array?

// const hello = (...num) => {
//   console.log(num);
// };
// hello(1, 2, 3, 4, 5);
//------------------------------------------------

// 22. Can you use the spread operator inside function parameters? Why or why not?

//Haan, aap spread operator ko function parameters ke andar use kar sakte hain, lekin thoda carefully. Spread operator ko function parameters mein rest parameter ke roop mein use kiya jata hai, jisme aap multiple arguments ko ek array mein combine kar sakte hain.

// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }

//   console.log(sum(1, 2, 3));
//----------------------------------------------------

// 23. How do you use the rest operator to extract specific properties from an object?

// Aap rest operator (...) ko use karke ek object se specific properties ko extract kar sakte hain. Iska matlab yeh hai ki aap ek object mein se kuch properties ko separate kar sakte hain aur baaki ke properties ko ek new object mein collect kar sakte hain.

// let obj = {
//   name: "Zeeshan",
//   age: 23,
//   city: "bareilly",
// };

// let { name, age, ...rest } = obj;
// console.log(name);
// console.log(age);
// console.log(rest);

//--------------------------------------------------------

// 24. What happens when you spread an object inside an array?

// Jab aap [...person] likhte hain, toh JavaScript ko ye samajh mein nahi aata ki person ko kis tarah se spread kare, kyunki object iterable nahi hai. Isliye, TypeError aata hai.

// const person = { name: "John", age: 30 };
// const arr = [...Object.values(person)];
// console.log(arr);

//-------------------------------------------------------------

// 25. How do you combine multiple objects with nested properties using the spread operator?

// let obj1 = {
//   name: "Zeeshan",
//   age: 25,
//   address: { city: "bareilly", state: "UP" },
// };
// let obj2 = {
//   gendor: "Male",
//   father: "Shahid",
//   address: { country: "India" },
// };

// let b = {
//   ...obj1,
//   ...obj2,
//   address: {
//     ...obj1.address,
//     ...obj2.address,
//   },
// };
// console.log(b);
// ----------------------------------------------------

// ### Functions
// 26. What is the difference between a pure function and an impure function?

// pure function

// const pure = (num) => {
//   return num + 10;
// };
// console.log(pure(10));
// console.log(pure(10));

// impure function
// let total = 0;
// const impure = (num) => {
//   return (total += num);
// };
// console.log(impure(10));
// console.log(impure(10));
// console.log(impure(10));
// ----------------------------------------------

// 27. How does JavaScript handle function hoisting?

// function Hoisting
// Hello();
// function Hello() {
//   console.log("Function Hoisting");
// }

// // variable Hoisting

// x = "Variable Hoisting";
// console.log(x);
// var x;
//-------------------------------------------------

// 28. What is the difference between an arrow function and a regular function?
// regular function

// function regular() {
//   console.log("Regularr Function");
// }
// regular();
// const arrow = () => {
//   console.log("arrow Function");
// };
// arrow();

//--------------------------------------------

// 29. How do you implement a debounce function in JavaScript?

// 30. How do you implement a throttle function in JavaScript?

// ------------------------------------------------------------------

// ### Loops
// 31. How do you break out of a `.forEach()` loop in JavaScript?

// forEatch me break ka use nahi kar sakte hai
// salution  - forOf ka use kar sakte hai

//-----------------------------------------------------

// 32. How do you iterate over an object’s keys and values?

// let obj = {
//   name: "zeeshan",
//   age: 25,
//   gender: "Male",
// };

// Object.keys(obj).forEach((key) => {
//   console.log(`${key} : ${obj[key]}`);
// });

// for (let key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

//--------------------------------------------------------

// 33. What is the difference between `for…of` and `for…in` loops?

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

//   for (let key in person) {
//     console.log(key);  // Logs the keys: name, age, city
//     console.log(person[key]);  // Logs the values: John, 30, New York
//   }

//   const arr = [1, 2, 3, 4];

// for (let value of arr) {
//   console.log(value);  // Logs: 1, 2, 3, 4
// }

//-----------------------------------------------------------------
// 34. How do you implement a loop that executes asynchronously?

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//   setTimeout(() => {
//     console.log(a[i]);
//   }, i * 1000);
// }

// 35. How do you create an infinite loop in JavaScript, and how can you stop it?

// for (let i = 0; i >= 0; i++) {
//   console.log(i);
//   if (i === 300) {
//     break;
//   }
// }

// ----------------------------------------------------

// ### If-Else Statements
// 36. What is the difference between `==` and `===` in JavaScript?

// ==: Loose comparison, ye type conversion karta hai pehle comparison ke liye (type coercion).
// ===: Strict comparison, ye value aur type dono ko compare karta hai bina type conversion ke.

// console.log("5" == 5); // true, because it converts the string '5' to number
// console.log("5" === 5); // false, because one is string and other is number

//------------------------------------------------------------

// 37. How do you use a ternary operator to replace an if-else statement?
// let age = 18;

// let prin = age >= 18 ? "Eligible For Vote" : "Not Eigible for Vote";
// console.log(prin);

// if (age >= 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not Eligible for vote");
// }

//----------------------------------------------------------------

// 38. What is the difference between `if-else` and `switch` statements?

// if-else: if-else mein aap multiple conditions ko check karte ho using logical operators (like &&, ||), aur har condition ke liye ek block execute hota hai.

// const day = 2;
// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else {
//   console.log("Other day");
// }

// const day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Other day");
// }

// switch statement ek specific value ko evaluate karta hai aur uss value ke match hone par corresponding case block ko execute karta hai.

//---------------------------------------------------------------

// 39. How can you check multiple conditions in an `if` statement efficiently?

// let age = 18;
// let driving = true;
// if (age >= 18 && driving) {
//   console.log("eligible for Drive");
// } else {
//   console.log("Not Eligible for Drive");
// }
//----------------------------------------------------------------------

// 40. How do you handle multiple asynchronous conditions inside an `if` statement?

// async function hello() {
//   condition1 = await chekCondition1();
//   condition2 = await chekCondition2();

//   if (condition1 && condition2) {
//     console.log("both condition are true");
//   } else {
//     console.log("not true");
//   }
//   async function chekCondition1(params) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(true), 2000);
//     });
//   }

//   async function chekCondition2(params) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(true), 3000);
//     });
//   }
// }
// hello();

// --------------------------------------------------------

// check string , konsa leter kitni baar aaya hai

// let a = "hello my name is zeeshan khan";
// let b = {};
// for (const i of a) {
//   if (b[i]) {
//     b[i] += 1;
//   } else {
//     b[i] = 1;
//   }
// }

// console.log(b);
