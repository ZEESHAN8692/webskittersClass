// let a = ["apple", "apple", "cherry", "date", "banana"];

// let b = a.reduce(function (acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);

// console.log(b);

// const countries = [
//   { code: "US", name: "United States" },
//   { code: "CA", name: "Canada" },
//   { code: "MX", name: "Mexico" },
//   { code: "FR", name: "France" },
//   { code: "JP", name: "Japan" },
// ];

// let b = countries.reduce(function (acc, cur) {
//   acc[cur.code] = cur.name;
//   return acc;
// }, {});
// console.log(b["US"]);

// let c = countries.reduce((acc, cur) => {
//   acc[cur.code] = cur.name;
//   return acc;
// }, {});
// console.log(c["JP"]);

const user = [
  { age: 23, name: "Zeeshan" },
  { age: 25, name: "Ahmed" },
  { age: 30, name: "Ali" },
  { age: 35, name: "Ahmed2" },
  { age: 40, name: "Zeeshan2" },
];

let b = user.reduce((acc, cur) => {
  acc[cur.age] = cur.name;
  return acc;
}, {});

console.log(b[40]);
