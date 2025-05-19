// 40.	Write a JavaScript program to check if the provided integer is a prime number or is not

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
