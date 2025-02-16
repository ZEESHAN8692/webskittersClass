// Promise


async function API() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const Data = await response.json();
  return Data;
}

let a = API();
a.then((res) => {
  for (const i in res) {
    // console.log(res[i]);
    let { title, body } = res[i];
    console.log(body);
  }
});
a.catch((error) => {
  console.log(`Error = ${error}`);
});

// const Hello = () => {
//   return new Promise((resolve, reject) => {
//     let a = true;
//     setTimeout(() => {
//       resolve("Resolve Success");

//       // reject("Error");
//     }, 3000);
//   });
// };

// async function AW() {
//   try {
//     const Data = await Hello();
//     console.log(Data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// AW();

// Hello()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(`Error = ${error}`);
//   });
// async Await
