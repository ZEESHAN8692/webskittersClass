// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   vhicle() {
//     console.log(`Car make in ${this.make}, and model = ${this.model}`);
//   }
// }

// const myCar = new Car("india", 2025);

// myCar.vhicle();
// console.log(myCar);

// ------------Inheritance-------------

// class Father {
//   father() {
//     console.log("My name is Father");
//   }
// }

// class Son1 extends Father {
//   son1() {
//     console.log("My name is son1");
//   }
// }

// class Son2 extends Father {
//   son2() {
//     console.log("my name is son2");
//   }
// }

// const famly = new Son2();
// console.log(famly.father());

// ------ super keyword ---------------

// class Vehicle {
//   constructor(make) {
//     this.make = make;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make);
//     this.model = model;
//   }

//   display() {
//     console.log(this.make, this.model);
//   }
// }

// const hello = new Car("India", 2025);
// console.log(hello);
// hello.display();

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  hello() {
    // Parent class ke method ko call karne ke liye `super.speak()` use karte hain
    super.speak();
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.hello();
