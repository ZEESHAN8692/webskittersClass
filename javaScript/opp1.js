// class Person {
//     constructor(name) {
//       this.name = name;
//     }

//     greet() {
//       console.log(`Hello ${this.name}`);
//     }
//   }

//   class Student extends Person {}
//   let student = new Student("Zeeshan Khan");
//   let stu = new Student("Dipam")
//   student.greet();
//   stu.greet();

// class Mul {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   greet() {
//     console.log(`${this.num1} x ${this.num2} = ${this.num1 * this.num2}`);
//   }
// }
// class Mult extends Mul {}
// let mul = new Mult(20, 20);
// mul.greet();

class Mul {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  greet() {
    console.log(`${this.num1} x ${this.num2} = ${this.num1 * this.num2}`);
  }
}
class Mult extends Mul {
  constructor(item, item2) {
    super(item, item2);
    console.log(`${item} + ${item2} = ${item + item2}`);
  }
  childMathod(){
    console.log(`${this.num1} + ${this.num2} = ${this.num1+this.num2}`)
  }
}
let mul = new Mult(20, 30);
mul.greet();
mul.childMathod();
