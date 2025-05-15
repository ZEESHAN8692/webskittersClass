// 3.	Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// let x = 32243;

const revers = (val) => {
  let b = val.toString();
  let arr = b.split("").reverse().join("");
  console.log(parseInt(arr));
};
revers(x);
