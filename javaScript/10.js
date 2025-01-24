// const a = "Hello";
// const b = "Boy";
// console.log(a + b);
// console.log(...a, ...b);
// const c = a.concat(b);
// console.log(c);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10];
// let c = arr1.concat(arr2);
// console.log(c);
// console.log([...arr1, ...arr2]);

// spread oprator

// let a = {
//   name: "John",
// };
// let b = {
//   age: 25,
// };

// let c = { ...a, ...b };
// console.log(c);

//============================

// const fname = "zeeshan";
// const lname = "khan";

// const fullName = [...fname, ...lname];
// const Fo={...fname,...fname}
// console.log(fullName);

// let a = [1, 2, 3];
// let s = [...a, 4];
// console.log(a);

// let a = 5;
// let b = "10";
// console.log(a + b);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10];
// console.log([...arr1, ...arr2]);

// rest oprator

// let a = (...item) => {
//   console.log(item);
// };
// a(1, 2, 3, 4, 5);

// let a = (...item) => {
//   let b = item;
//   let sum = 0;
//   for (const i of item) {
//     sum = sum += i;
//   }
//   console.log(sum);
// };
// a(1, 2, 3, 4, 5);

// let a = (...item) => {
//   let b = item;

//   for (const i of item) {
//     if (i < 3) {
//       console.log(i);
//     }
//   }
// };
// a(1, 2, 3, 4, 5);

let t = [];
let a = (...item) => {
  for (const i of item) {
    if (i < 3) {
      t.push(i);
    }
  }
};
a(1, 2, 3, 4, 5);
console.log(t);

let r = t.pop([1]);
console.log(r);
