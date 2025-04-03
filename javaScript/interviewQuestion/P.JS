// const P1 = new Promise((resolve, reject) => {
//   resolve("P1  Resolved");
// });
// const P2 = new Promise((resolve, reject) => {
//   resolve("P2  Resolved");
// });
// const P3 = new Promise((resolve, reject) => {
//   resolve("P3  Resolved");
// });

// const a = Promise.all([P1, P2, P3]);
// a.then((res) => console.log(res)).catch((err) => console.log(err));

// const b = Promise.any([P1, P2, P3]);
// a.then((res) => console.log(res)).catch((err) => console.log(err));

// let arr = [1,2,3,4,5]
// const [a,b,...rest]=arr
// console.log(a)
// console.log(b)
// console.log(rest)

// call back
// function display(a, b, plus) { // higher oreder function
//   return plus(a, b);
//   //   console.log(result);
// }
// function add(a, b) {
//   console.log(a + b);
// }
// display(10, 20, add);

// (function () {
//   console.log("Hello zeeshan");
// })();

// let a = ["z", "a", "l", "i", "r"];
// let b = a.sort();
// console.log(b);
// let c = a.reverse();
// console.log(c);

// let a = [-1, 4, -5, 10, -20, 50, 20];
// let b = a.filter((item) => item < 0).reduce((acc, cur) => acc + cur, 0);
// let c = a.filter((item) => item > 0).reduce((acc, cur) => acc + cur, 0);

// console.log(b);
// console.log(c);

// let aa = 0;
// let bb = 0;
// let c = a.map((item) => {
//   if (item < 0) {
//     aa += item;
//   } else {
//     bb += item;
//   }
// });
// console.log(aa);
// console.log(bb);

const a = Promise.reject("hello Promise Resolved");

a.then((res) => console.log(res)).catch((err) => console.log(err));
