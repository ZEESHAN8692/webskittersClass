// Write a function that fetches data from an API using async/await.

// async function API() {
//     const response =await fetch('https://jsonplaceholder.typicode.com/posts')
//     const Data = await response.json()
//     return Data

// }
// API()
// .then((data)=>{
//     console.log(data)
// })

// Write a function to find the first non-repeating character in a string.

// JavaScript program to find the index of the first
// non repeating character using nested loop

// Function to find the index of the first
// non-repeating character

// You need to simulate two asynchronous tasks, one that resolves after 1 second and another that resolves after 2 seconds. Log the result when both tasks complete.

// const task = (data)=>{
//     return new Promise ((resolve , reject )=>{
//         setTimeout(()=>{
//             resolve(`Data = ${data}`)
//         },1000)

//     })
// }
// task("Success")
// .then((res)=>{
//     console.log(res)
//     task("success2")
//     .then((res)=>{
//         console.log(res)
//     })
// })

// const task1 = new Promise((resolve, rejecet )=>{
//     setTimeout(() => {
//         resolve("Task One Complete ")
//     }, 1000);
// })

// const task2 = new Promise((resolve, rejecet )=>{
//     setTimeout(() => {
//         resolve("Task two Complete ")
//     }, 2000);
// })

// const data  = Promise.all([task1,task2])
// .then((res)=>{
//     console.log(res)
// })

// const data  = Promise.any([task1,task2])
// .then((res)=>{
//     console.log(res)
// })
// const dat2  = Promise.any([task2,task1])
// .then((res)=>{
//     console.log(res)
// })

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 1 Fullfill");
//       resolve("");
//     }, 1000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 2 fulfilled");
//       resolve("");
//     }, 2000);
//   });

//   const p = Promise.any([p1, p2]);
//   p.then((value) => {
//     console.log("Returned Promise");
//     console.log(value);
//   });

// const Hello = new Promise((resolve, reject) => {
//   let rNum = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (rNum < 5) {
//       resolve(`Success`);
//     } else {
//       reject(`Unsuccess`);
//     }
//   }, 2000);
// });

// Hello.then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error);
// });

// splice

// a = [1, 2, 3, 4, 5, 6];

// a.splice(1, 0, "Z");

// a.splice(2, 1, "z");
// console.log(a);

// a.splice(2, 1);
// console.log(a);
// function sum() {
//   console.log(arguments[0]);
// }
// sum(1, 2, 3);

// const a = (function (a, b) {
//   console.log(a + b);
// })(10, 20);

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(10, 20)
// );

// function Name(Hel) {
//   Hel();
// }
// Name(NameTWo);

// function NameTWo() {
//   console.log("This is Call Back Function ");
// }

// function Hello(num) {
//   return function ValueFun(value) {
//     return num + value;
//   };
// }

// const a = Hello(10);
// const b = a(10);
// console.log(b);

// const firstFun = function (number) {
//   return number * 2;
// };

// const secondFun = function (firstFun, value) {
//   return firstFun(value);
// };

// const a = secondFun(firstFun, 10);
// console.log(a);

// let total = 0;

// const Hello = function (value) {
//   total += value;
//   return total;
// };

// console.log(Hello(10));
// console.log(Hello(10));
// console.log(Hello(10));
// console.log(Hello(10));

// let a = "I am a Good Good Boy";

// let b = a.split(" ");
// let c = b.reduce((acc, cur) => {
//   acc[cur] = cur.length;
//   return acc;
// }, {});
// console.log(c);

// let count = 1;
// let d = b.reduce((acc, cur) => {
//   acc[cur]=(acc[cur]||0)+1
//   return acc;
// }, {});

// console.log(d);

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
// let hello = 0;
// let name1 = "I am Good Boy Boy";
// let b = name1.split(" ");
// let c = b.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;

//   return acc;
// }, {});

// let filter=b.filter((item)=>c[item]===1)

// console.log(filter.join(" "))

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

