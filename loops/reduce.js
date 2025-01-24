// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const b = arr.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(b);

// const b = arr.reduce((acc, crr) => {
//   return acc + crr;
// }, 0);
// console.log(b);

// const b = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(b);

// let shoppingCart = [
//   {
//     itemName: "Laptop3",
//     price: 10000,
//   },
//   {
//     itemName: "Laptop4",
//     price: 11000,
//   },
//   {
//     itemName: "Laptop5",
//     price: 10900,
//   },
//   {
//     itemName: "Laptop6",
//     price: 10020,
//   },
//   {
//     itemName: "Laptop7",
//     price: 10000,
//   },
// ];

// const total = shoppingCart.reduce((acc, cur) => {
//   return acc + cur.price;
// }, 0);

// console.log(total);

// const a = [
//   {
//     name: "Zeeshan",
//     age: 25000,
//   },
//   {
//     name: "Zeeshan Khan",
//     age: 25500,
//   },
//   {
//     name: "Zeeshan3",
//     age: 25600,
//   },
//   {
//     name: "Zeeshan",
//     age: 25800,
//   },
// ];

// let b = a.reduce(function (acc, cur) {
//   return acc + cur.age;
// }, 0);
// console.log(b);

// let a = [1, 2, 3, 4, 5, 6];
let a = [
  { name: "Zeeshan Khan" },
  { name: "Zeeshan Khan" },
  { name: "Zeeshan Khan" },
  { name: "Zeeshan Khan" },
];
let b = a.reduce((acc, cur) => {
  cur.name = cur.name;
  acc.push(cur);
  return acc;
}, []);
console.log(b);
