// import { hello, mul, dev } from "./expor.js";
// import deepika from "./expor.js";
// import * as op from "./expor.js";

// console.log(hello(50, 50));
// console.log(mul(50, 50));
// console.log(dev(50, 50));

// console.log(deepika.age);

// console.log(op.hello(50, 50));
// console.log(op.dev(50, 50));
// console.log(op.mul(50, 50));


let a = [ -2, -5, -3, -5, 34, 34, 45, 56 ];
function sumNegatives(arr, index = 0) {
  if (index >= arr.length) return 0;
  let current = arr[index] < 0 ? arr[index] : 0;
  return current + sumNegatives(arr, index + 1);
}
let result = sumNegatives(a);
console.log(result);