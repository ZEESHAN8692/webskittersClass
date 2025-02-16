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
