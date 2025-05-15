// 1.	 Write a function that takes a string as input and returns the reverse of the string?


const reverse = (str) => {
  let arr = str.split("");
  let revers = arr.sort();
  console.log(revers.join(""));
};
reverse("ZEESHAN");
