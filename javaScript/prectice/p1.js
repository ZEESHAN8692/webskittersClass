// array in 5 opject name address , a.leanght 5, reduce , loop

// let a = [
//     { name: "Raj", address: "Kolkata" },
//     { name: "SK", address: "Dehli" },
//     { name: "Sita", address: "Bareilly" },
//     { name: "Rahul", address: "cota" },
//     { name: "Raju", address: "Rajasthan" },
//   ];

// for (const i of a) {
//   if (i.address.length < 5) {
//     console.log(i.address);
//   }
// }

//   b = [];
//   for (const i of a) {
//     if (i.address.length < 5) {
//       b.push(i.address);
//     }
//   }
//   console.log(b);

//--------------------------------------------

// let a = [
//   { name: "Zeeshan", address: "Bareilly" },
//   { name: "Rahul", address: "Kolkata" },
//   { name: "Sonu", address: "Salt Lake" },
//   { name: "Ramu", address: "Bareilly" },
//   { name: "Ashfak", address: "Bareilly" },
// ];

// let b = a.reduce((acc, cur) => {
//   if (cur.address.length < 5) {
//     // acc.push(cur.address);
//   }

//   return acc;
// }, []);
// console.log(b);

//------------------------------------------

// ek array without push mathod , value add karna hai

// let a = [1, 2, 3, 4, 5];
// let b = (a[a.length] = "Hello");
// console.log(a);

//-----------------------------------------------

// isme ek property  aur add ho jaye

// let a = {
//   name: "cj",
//   address: "jd",
// };
// a.age = 25;
// console.log(a);

// =====================================

// take array use reduce for loop foreach for off for in find sum of all elements in array

// const a = [10, 10, 20];

// let b = a.reduce((acc, cur) => {
//   return acc + cur;
// });
// console.log(b);

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log(sum);

// let sum = 0;
// a.forEach((i) => {
//   sum += i;
// });
// console.log(sum);

// let sum = 0
// for (let i in a) {
//   sum += a[i]
// }
// console.log(sum)

// for (const i of a) {
//   sum += i;
// }
// console.log(sum);

// remove duplicate using reduce for loop

// let arr = [1, 1, 3, 2, 4, 4];
// let Narr = arr.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(Narr);

// let aa = [];
// for (const i of arr) {
//   if (!aa.includes(i)) {
//     aa.push(i);
//   }
// }
// console.log(aa);

// find the longest string in array using reduce and loop

// let str = ["shadvhskadkv", "kkdf", "jkagsfdfjkd", "kjgafjvdfjvdKFADSMHHGDJV"];
// let Logest = str.reduce((acc, cur) => {
//   if (cur.length > acc.length) {
//     return cur;
//   }
//   return acc;
// });
// console.log(Logest);

// let a = "";
// for (let i of str) {
//   if (i.length > a.length) {
//     a = i;
//   }
// }
// console.log(a);
