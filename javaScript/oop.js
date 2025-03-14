// class Hello {
//   constructor() {
//     // (this.name = "Zeeshan khan"), (this.address = "Bareilly");
//     (this.num1 = 50), (this.num2 = 50);
//   }
// }
// let a = new Hello();
// a = a.num1 + a.num2;
// console.log(a);

// class sum {
//   constructor() {
//     (this.value = 50), (this.value1 = 60);
//   }
//   hello() {
//     console.log(this.value + this.value1);
//   }
// }
// let a = new sum();
// a.hello();

class sum {
  constructor() {
    this.arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }
  hello() {
    this.arr.filter((item) =>
      console.log(item % 2 === 0 ? `Even= ${item}` : `odd = ${item}`)
    );
  }
}
let a = new sum();
a.hello();
