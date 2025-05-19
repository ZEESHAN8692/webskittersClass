// 33.	Write a JavaScript program to convert an asynchronous function to return a promise.

const Api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }, 1000);
  });
};

Api()
  .then((res) => console.log(res))
  .then((err) => console.log(err));
