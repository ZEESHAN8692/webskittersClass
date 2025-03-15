const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
// console.log(descriptor);

// hum kudka object bana sakte hai usper change hone se rok sakte hai

let obj = {
  name: "Zeeshan",
  age: 25,
  gender: "Male",
  greet: function () {
    console.log("code fat gaya");
  },
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, "name", {
  writable: true,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// obj.name = "khan";
// console.log(obj.name);

// for (let [key, value] of Object.entries(obj)) {
//   console.log(`${key}, ${value}`);
// }
for (const i in obj) {
  if (typeof obj[i] !== "function") {
    console.log(`${i} : ${obj[i]}`);
  }
}
