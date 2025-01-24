// function countElements(arr) {
//   return arr.reduce((countObj, element) => {
//     countObj[element] = (countObj[element] || 0) + 1;
//     return countObj;
//   }, {});
// }

// const arr = ["zeeshan", "zeeshan", "khan", "khan", "anaiza", "rahul", "khan"];
// const result = countElements(arr);
// console.log(result);

const arr = ["zeeshan", "zeeshan", "khan", "khan", "anaiza", "rahul", "khan"];

let b = arr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(b);

// let c = arr.reduce(function (acc, cur) {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(c);

