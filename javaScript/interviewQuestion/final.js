// let a = [1,2,3,4,5

// const hello = () => console.log("Zeeshan");
// hello();

// (function (a) {
//   console.log(a);
// })("Zeeshan");

// console.log("1 Value ")

// setTimeout(()=>{
//     console.log("2 Value ")
// },2000)

// console.log("3 Value ")

// document.setAttribute("class","hello")

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// arr.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//   console.log(`2 X ${i} = ${2 * i}`);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [a, b, c, ...num] = arr;
// console.log(a);
// console.log(num);
// textContent = "hello"
// innerHTML = "<h1>hello</h1>"
//
//   -- plain text <h1>hello </h1>

// function higherOrder(a, b, call) {
//   return call(a, b);
// }

// function call(a, b) {
//   console.log(a + b);
// }

// higherOrder(20, 20, call);

// let arr = [-23, 50, -30, 30, -70, 80, -20];
// let minSum = 0;
// let pulsSum = 0;
// arr.map((item) => {
//   if (item < 0) {
//     minSum += item;
//   } else {
//     pulsSum += item;
//   }
// });
// console.log(minSum);
// console.log(pulsSum);

// let min = arr
//   .filter((item) => item < 0)
//   .reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
// console.log(min);

// let arr = [1, 2, 2, 3, 3, 4, 5, 6, 7];
// let b = arr.reduce((acc, cur) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(b);

// let b = [...new Set(arr)];
// console.log(b);
// (function () {
//   console.log("hello");
// })();

// let a = Math.PI;
// let b = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(b);
// console.log(
//   (function (a) {
//     return a;
//   })("hello")
// );

// let arr = [1, 2, 3];
// console.log(typeof arr);

// let ar = ["r", "w", "a", "e", "b"];
// let b = ar.sort((a, b) => a.localeCompare(b));
// console.log(b);

// let a = "hello";
// let c = a.split("").sort();
// console.log(c);

// function mainfunction() {
//   let main = "Main Function";

//   function clauser() {
//     let lexicals = "lexicals scop";
//     console.log(main);
//     console.log(lexicals);
//   }
//   console.log(main);
//   // console.log(lexicals);

//   clauser();
// }

// mainfunction();

// class Vehicle {
//   constructor(make) {
//     this.make = make;
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make); // Parent class ka constructor call karte hain
//     this.model = model;
//   }

//   display() {
//     console.log(this.make, this.model);
//   }
// }

// let hello = new Car("India", "fortuner");
// hello.display();

// class Animal {
//     speak() {
//       console.log('Animal speaks');
//     }
//   }
//   class Dog extends Animal {
//     speak() {
//       console.log('Dog barks');
//     }
//   }
//   const dog = new Dog();

//   dog.speak();  // Output: Dog barks
