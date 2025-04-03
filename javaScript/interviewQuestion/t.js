// import obj, { add, subtract } from "./im.js";
// console.log(add(50, 50));
// console.log(subtract(50, 30));

// console.log(obj.name);

// let a = 10
// console.log(a+10);

// var

// let name1 = "hello";

// function hello() {
//   var a = 20;
// //   let b = "ram"
//   console.log(a);
//   if (true) {
//     let b = "Zeeshan";
//     b = "deepika";
//     console.log(b);
//     console.log(name1);
//   }
//   //   console.log(b);
//   if (true) {
//     const d = "deepika";
//     // d = "Zeeshan ";
//     console.log(d);
//   }
// }
// hello();
// console.log(b)
// // console.log(a);

// function hello(...res) {
//   console.log(res);
// }
// hello(1, 2, 3, 4, 5);

// let arr = [1,2,3,4,5,6]
// const [a,b, ...res]= arr
// console.log(a); //1
// console.log(b);  //2
// console.log(res); //[3,4,5,6]

// let a = [1, 2, 4, 4];
// let b = [1, 2, 4, 4];

// let c = [...a, ...b];
// console.log(c);

// (function (a, b) {
//   console.log(a + b);
// })(20, 30);

// IIFE

// function hello(a, b) {
//   console.log(a + b);
// }
// hello(50, 50);

// const hello1 = (a, b) => console.log(a + b);
// hello1(60, 60);

// let a = 5;
// if (a < 10) {
//   console.log(`a lesthen 10`);
// } else {
//   console.log(`a greater then 10`);
// }

// let game = false;
// console.log(game ? "Play Game " : "Not Play ");

// let a = 5;
// switch (a) {
//   case 5:
//     console.log("vowels");
//     break;
//   case 6:
//     console.log("Not vowels");
//   default:
//     break;
// }

// function hello(a, b) {
//   console.log(a + b);
// }
// hello(10, 20);
// hello(10, 20);
// hello(10, 20);

// let total = 0;

// function impure(value) {
//   total += value;
//   return total;
// }
// console.log(impure(5));
// console.log(impure(5));
// console.log(impure(5));
// console.log(impure(5));
// console.log(impure(5));
// console.log(impure(5));

// function hello(a) {
//   console.log(a);
// }
// hello("hhh");

// let a = [1, 2, 3, 4, 6];
// for (v of a) {
//   console.log(v);
// }

// let obj = {
//   name: "zeeshan",
//   age: 23,
//   gender: "male",
// };

// for (k in obj) {
//   console.log(`Key = ${k} and Value = ${obj[k]}`);
// }

// let arr = [1, 2, 3, 4, 6];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// obj.city = "bareilly";
// delete obj.city;
// delete obj.age;
// console.log(obj);

// let arr = [1, 2, 3, 4, 6];

// let b = arr.reduce((acc, cur) => {
//   acc[cur] = cur;
//   return acc;
// }, {});
// console.log(b);

// let acc = {};
// arr.forEach((cur) => {
//   acc[cur] = cur;
// });
// console.log(acc);

// let obj = {};
// for (const v of arr) {
//   obj[v] = v;
// }
// console.log(obj);

// let obj = {
//   name: "deepika",
//   age: 23,
//   gender: "female",
// };

// // let key = Object.keys(obj);
// // let value = Object.values(obj);

// // console.log(key);
// // console.log(value);

// let arr = Object.entries(obj);
// let arra = arr.flat();
// console.log(arra);



// class Car {
//   constructor(model, make) {
//     this.model = model;
//     this.make = make;
//   }

//   displayInr() {
//     console.log(`Model = ${this.model} and Make in ${this.make}`);
//   }
// }

// let myCar = new Car("fartuner", "India");
// myCar.displayInr();
