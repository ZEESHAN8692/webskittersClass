// let arr = ["apple", "cherry", "banana"];
// let count = arr.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);

// let arr = ["apple", "cherry", "banana"];
// let countL = arr.reduce((acc, cur) => {
//   acc[cur] = cur.length;
//   return acc;
// }, {});
// console.log(countL);

// function high(a, b, call) {
//   return call(a, b);
// }

// function call(a, b) {
//   console.log(a + b);
// }
// high(20, 30, call);

const promise = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (random < 5) {
      resolve("Lessthen 5");
    } else {
      reject("More than 5");
    }
  }, 1000);
});

// promise.then((res) => console.log(res)).catch((err) => console.log(err));

// async function API() {
//   const respose = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await respose.json();
//   return data;
// }

// async function API() {
//   return promise;
// }
// API()
//   .then((data) => console.log(data))
//   .catch((data) => console.log(data));

// API().then((data) => console.log(data));

// let obj = {
//   name: "zeeshan",
//   address: "bareilly",
//   phone: 9568046912,
// };

// obj.name = "Anis";
// console.log(obj);
// let b = { ...obj, name: "Anis" };
// console.log(b);
