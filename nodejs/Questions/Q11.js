// 11.	Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?

const Prime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
if (Prime(3) === true) {
  console.log(`${Prime(22)} Prime Number`);
} else {
  console.log(`${Prime(22)} Not Prime Number`);
}
