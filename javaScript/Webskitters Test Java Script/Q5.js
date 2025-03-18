// ### Assignment 5: New Promise
// Write a function that returns a new Promise that:
// - Resolves with "Success!" after 2 seconds if a random number (1-10) is greater than 5.
// - Rejects with "Failed!" otherwise.
// - Use `.then()` and `.catch()` to handle the result.



const newPromise = () => {
  return new Promise((resolve, reject) => {
    let rendomNumber = Math.floor(Math.random() * 10);
   setTimeout(() => {
    if (rendomNumber > 5) {
        resolve("success!");
      } else reject("Failed!");
    
   }, 2000);
  });
};
newPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
