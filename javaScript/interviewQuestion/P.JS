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

// const a = Promise.reject("hello Promise Resolved");

// a.then((res) => console.log(res)).catch((err) => console.log(err));

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   display() {
//     console.log(`Car Model:- ${this.model} and Card Make ${this.make}`);
//   }
// }
// let shift = new Car("India", 2000);
// shift.display();

// class Vehicle {
//     constructor(make) {
//       this.make = make;
//     }
//   }
//   class Car extends Vehicle {
//     constructor(make, model) {
//       super(make);  // Parent class ka constructor call karte hain
//       this.model = model;
//     }
//   }

// let newCar = new Car("India","Fartuner")

// Call

//------------------------------------------------------------------
// Q What are call , apply and bind method in js ?

// "Call", "Apply", aur "Bind" JavaScript mein functions ke saath kaam karne ke tareeke hain jo yeh control karte hain ki function ko kaise invoke kiya jaaye aur kis context mein woh execute ho.

// function helo(massege) {
//   console.log(`${massege} ${this.name}`);
// }
// const purson = { name: "zeeshan" };
// helo.call(purson, "Hello");
// helo.apply(purson, ["Ashfak"]);
// let greetpurson = helo.bind(purson);
// greetpurson("Anaiza");

// let obj = {
//   name: "zeeshan",
//   age: 23,
//   gender: "male",
//   address: "Bareilly",
// };
// let obj1 = {
//   name: "zeeshan",
//   age: 23,
//   gender: "male",
//   address: "Uttar Pradesh",
// };
// let final = {
//   ...obj,
//   ...obj1,
// };
// (final.address = obj.address), obj1.address;
// console.log(final);

// let arr = [
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"],
// ];
// let obj = {
//   name: "zeeshan",
//   age: 23,
//   gender: "Male",
// };
// // let b = arr.flat();
// // let b = Object.values(obj);
// let b = Object.keys(obj);
// console.log(b);

// let obj = { id: 2, name: "Anees", address: "bareilly" };
// let obj1 = { age: 25, address: "UP" };
// let b = {
//   ...obj,
//   ...obj1,
//   address: `${obj.address} ${obj1.address}`,
// };
// console.log(b);

// let day = 7;
// let dayname;

// switch (day) {
//   case 1:
//     dayname = "Monday";
//     break;
//   case 2:
//     dayname = "Tuesday";
//     break;

//   case 3:
//     dayname = "Wednesday";
//     break;
//   case 4:
//     dayname = "Thursday";
//     break;
//   case 5:
//     dayname = "Fryday";
//     break;
//   case 6:
//     dayname = "Seturday";
//     break;
//   case 7:
//     dayname = "Sunday";
//     break;
//   default:
//     dayname = "Invlid Value";
// }

// console.log(dayname);

// let age = 20;
// if (age >= 18) {
//   console.log("age for Vote");
// } else {
//   console.log("age not for Vote");
// }

// console.log(age >= 18 ? "age for Vote" : "age not for Vote");

// let a = ["z", "a", "l", "i", "r"];
// let b = a.sort((a, b) => a.localeCompare(b));
// console.log(b);

// function Car(make, model) {
//   this.make = make;
//   this.model = model;

//   this.display = () => {
//     console.log(`Model : ${this.model} , Make in ${this.make}`);
//   };
// }
// let myCar = new Car("India", "Fortuner");
// myCar.display();

// let Car = {
//   model: "Fortuner",
//   make: "India",
//   display: function () {
//     console.log(`Model :${this.model} , Make in ${this.make} `);
//   },
// };

// Car.display();

// class Father {
//   father() {
//     console.log("Father Called");
//   }
// }
// class Son1 extends Father {
//   son1() {
//     console.log("Son1 Called");
//   }
// }

// class Son2 extends Father {
//   son2() {
//     console.log("Son2 Called");
//   }
// }

// let family = new Son2();
// let family1 = new Father();
// family.father();
// family.son2();
// family1.Son1();
// // family.son1();

// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const flatArray = nestedArray.reduce((acc, cur) => {
//   return acc.concat(cur);
// }, []);

// console.log(flatArray);
// let b = nestedArray.flat();
// console.log(b);

// class Car {
//   static numberOfWheels = 4;
//   static showType() {
//     console.log("Car");
//   }
// }
// Car.showType();
// console.log(Car.numberOfWheels);

// let b = 5;
// let e = null;
// let c = undefined;
// let d = 10;

// console.log(a ?? b);
// console.log(c ?? d);
// console.log(0 ?? 20);
// console.log(c ?? e);

// let a = Math.floor(Math.random()*999999)
// console.log(a)

// let str =
//   "jbks32xli9nwjnw9nnw93rhn4ru484ry23u894eu0232fhf02urdh8e282@(#))@@__@29uraec89rhfhf2";
// let arr = str.split("");
// let string = [];
// let number = [];
// let special = [];
// arr.forEach((item) => {
//   if (item.match(/\d+/)) {
//     number.push(item);
//   } else if (item.match(/[^a-zA-Z0-9]/)) {
//     special.push(item);
//   } else {
//     string.push(item);
//   }
// });
// console.log(string.join(""));
// console.log(number.join(""));
// console.log(special.join(""));

let str = "hello i am zeeshan";
let b = str
  .split(" ")
  .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
  .join(" ");
console.log(b);
