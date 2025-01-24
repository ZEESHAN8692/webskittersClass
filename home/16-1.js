let Username = [
  { name: "zeeshan" },
  { name: "ali" },
  { name: "hassan" },
  { name: "khan" },
  { name: "khan" },
];

let NewUserName = Username.reduce((acc, cur) => {
  if (cur.name.length < 5) {
    acc.push(cur.name);
  }
  return acc;
}, []);
console.log(NewUserName);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num2 = number.reduce((acc, cur) => {
//   if (cur < 5) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(num2);
