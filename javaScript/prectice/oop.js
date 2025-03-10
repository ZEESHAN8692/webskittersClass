// constructor function

function user(userName, login, isLogin) {
  this.userName = userName;
  this.login = login;
  this.isLogin = isLogin;
  return this;
}

// const userOne = user("zeeshan", 11, true);
// const userTwo = user("khan", 11, true);
const userOne = new user("zeeshan", 11, true);
const userTwo = new user("khan", 11, true);
console.log(userTwo);

// class Hello {
//   zeeshan() {
//     console.log("Hello Zeeshan");
//   }
//   khan(k) {
//     console.log(`hello Zeeshan ${k}`);
//   }
// }

// let a = new Hello();
// a.zeeshan();
// a.khan("Khan");

// Type of Mathods
//  1. constructor
// 2.  prototype
// 3. static

// class Hello {
//   constructor(name, age) {
//     this.anisName = name;
//     this.anisAge = age;
//     console.log("hello zeeshan");
//   }
//   anis() {
//     console.log(`Hello ${this.anisName} and age ${this.anisAge}`);
//   }
//   static zeeshan() {
//     console.log("Hello ZEESHAN KHAN");
//   }
// }

// let a = new Hello("anis", 25);
// let b = new Hello("Zeeshan Khan", 23);
// a.anis();
// b.anis();

// Hello.zeeshan();
