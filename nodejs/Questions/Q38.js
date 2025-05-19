// 39.	Write a JavaScript program to check if the given argument is a string.

const hello = (value) => {
  if (typeof value === "string") {
    console.log(`${value} typeof is String`);
  } else {
    console.log(`${value} typeof is not String`);
  }
};
hello("zeeshan");
