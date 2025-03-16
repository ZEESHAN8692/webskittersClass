// super key word ,inheritance topic

// class Company {
//   constructor(name) {
//     this.name = name;
//     console.log(name);
//   }

//   eat() {
//     console.log("Food Done");
//   }
// }

// class User extends Company {
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     super.eat();
//     console.log("Work Start");
//   }
// }

// let call = new User("Zeeshan");
// call.work();

// ------------------------------------------------------
// filter ,find , splice using oops
//--------------------filter------------------------------

class Filter {
  constructor() {
    this.arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  Sum() {
    let total = 0;
    this.arr.filter((item) => (total += item));
    console.log(`Array of Sum = ${total}`);
  }
}
let final = new Filter();
final.Sum();

//----------------------find-----------------------

class Find {
  constructor() {
    this.arr = [10, 20, 30, 40, 50, 60, 70];
  }
  find() {
    let b = this.arr.find((item) => item > 40);
    console.log(`More than 40 = ${b}`);
  }
}
let result = new Find();
result.find();

//--------------------splice--------------------------

class Splice {
  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  additem() {
    this.arr.splice(2, 0, "Added Item");
    console.log(this.arr);
  }
  DeleleItem() {
    this.arr.splice(2, 2, "Two Item Deleted");
    console.log(this.arr);
  }
  updateItem() {
    this.arr.splice(2, 2, "Three", "Four");
    console.log(this.arr);
  }
}
let a = new Splice();
a.additem();
a.DeleleItem();
a.updateItem();

//------------------------------------------------------

// {a:null,b:null,C:null}
// [10,20,30]
// output:-{a:10,b:20,C:30}
// using loop and reduce
//--------------------reduce-----------------

let obj = { a: null, b: null, C: null };
let value = [10, 20, 30];

let b = Object.keys(obj).reduce((acc, cur, index) => {
  acc[cur] = value[index];
  return acc;
}, {});
console.log(b);

//------------------loop--------------------

let d = {};
for (const i in obj) {
  for (let index = 0; index < value.length; index++) {
    d[i] = value[index];
  }
}
console.log(d);

//------------------foreatch--------------------

let e = {};
Object.keys(obj).forEach((item, index) => {
  e[item] = value[index];
  return item;
});
console.log(e);
