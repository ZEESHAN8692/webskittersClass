// Filter

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ES5

// let b = a.filter(function (item) {
//   return item > 5;
// });
// console.log(b);

// ES6

// let b = a.filter((item => item < 5));
// console.log(b);

// let b = a.filter((item) => {
//   return item > 5;
// });
// console.log(b);

// let b = a.filter((item) => item > 5);
// console.log(b);

//-----------------------------------

// const obj = [
//   { name: "zeeshan", phone: 646533535 },
//   { name: "ali", phone: 878445555 },
//   { name: "hassan", phone: 878446355 },
//   { name: "hhl", phone: 878446455 },
//   { name: "ishaak", phone: 5655155 },
//   { name: "khan", phone: 8784463555 },
//   { name: "ans", phone: 87844654355 },
// ];

// let b = obj.filter((item) => item.name.length <= 5);
// console.log(b);

// let b = obj.filter(function (item) {
//   return item.name.length <= 5;
// });
// console.log(b);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = number.filter((item) => item % 2 === 0);
// console.log(`Even Number: ${b}`);

// let c = number.filter((item) => item % 2 != 0);
// console.log(`Odd Number: ${c}`);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let prime = number.filter((item) => {
//   for (let i = 2; item > i; i++) {
//     if (item % i === 0) {
//       return false;
//     }
//     return true;
//   }
//   return item > 1;
// });
// console.log(prime);

let prime = number.filter((item) => {
  return item;
});
console.log(prime);

for (let i = 2; i < prime.length; i++) {
  console.log(i);
}
