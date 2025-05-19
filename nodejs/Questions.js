// Async Await

// const Api = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   return data;
// };

// Api()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// Promise

// const Api = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise Resolve");
//     }, 1000);
//   });
// };

// Api()
//   .then((res) => console.log(res))
//   .then((err) => console.log(err));

// const Api = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   }, 1000);
// });
// Api
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// SPRAD

// let a = [1, 2, 3];
// let b = [4, 5, 6, 7];
// let c = [...a, ...b];
// console.log(c);

// let a = { name: "zeesha", age: 23, address: "Bareilly" };
// let b = { ...a, gender: "Male" };
// console.log(b);

// rest
// const data = (...err) => {
//   console.log(err);
// };
// data(1, 2, 3, 4, 4);

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b, ...all] = arr;
// console.log(a);
// console.log(all);

// map

// let arr = [
//   { name: "zeehsna", age: 23 },
//   { name: "zeehsna", age: 23 },
//   { name: "zeehsna", age: 23 },
//   { name: "zeehsna", age: 23 },
// ];

// let b = arr.map((item) => {
//   return item.name;
// });

// console.log(b);

// filter

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let e = num.filter((item)=>item%2===0)
// console.log(e);

// let b = num.reduce((acc, cur) => {
//   return acc + cur;
// });

// console.log(b);

// let b = num.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(b);

//  let random =Math.floor(Math.random() * 10000)

//     console.log(random);

const newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.toDateString());
console.log(newDate.toLocaleDateString());
console.log(newDate.toTimeString());
console.log(newDate.toLocaleTimeString());
