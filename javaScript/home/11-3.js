class Hello {
  constructor() {
    this.aarOfObject = [
      {
        name: "zeeshan",
        age: 23,
        gendor: "Male",
      },
      {
        name: "ashfak",
        age: 25,
        gendor: "Male",
      },
      {
        name: "Anis",
        age: 26,
        gendor: "Male",
      },
      {
        name: "Deepika",
        age: 23,
        gendor: "Female",
      },
      {
        name: "Saglic Sir",
        age: 26,
        gendor: "Male",
      },
      {
        name: "Rajeev",
        age: 23,
        gendor: "Male",
      },
    ];
  }

  printLoop() {
    for (const i of this.aarOfObject) {
      console.log(i);
      for (const j in i) {
        console.log(`Key = ${j} and Value =${i[j]}`);
      }
    }
  }
}

let a = new Hello();
a.printLoop();
