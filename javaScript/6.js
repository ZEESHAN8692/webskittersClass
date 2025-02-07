// reduce
// let a=[1,2,3,4,5,6,7,]
// let a= ["a","b","c"]
// let c =[8,9,20,23,34]
// let b= a.reduce(function(acc, cur){
//     return acc + cur
// },3)
// Dependency

// console.log(b)

// let a = ["apple", "cherry", "date", "banana"];
// // Aarry Value = cur
// // Array Index = acc
// let b = a.reduce(function (acc, cur) {
//   acc[cur] = cur.length;
//   return acc;
// }, {});
// console.log(b);


// let a = ["apple", "apple", "cherry", "date", "banana"];

// function hello(acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }
// let b = a.reduce(hello, []);
// console.log(b);

// function remove(item) {
//   const unic = [];
//   for (let i = 0; i < item.length; i++) {
//     if (!unic.includes(item[i])) {
//       unic.push(item[i]);
//     }
//   }
//   return unic;
// }

// let arr = ["apple", "apple", "cherry", "date", "banana", "banana"];
// let uni = remove(arr);
// console.log(uni);

// let arr = ["apple", "apple", "cherry", "date", "banana", "banana"];

// function hello(acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }
// let b = arr.reduce(hello, []);
// console.log(b);

// let b = arr.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(b);
