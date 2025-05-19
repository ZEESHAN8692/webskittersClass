// 38.	 Write a JavaScript program to create an object from the specified object, where all keys are in lowercase

const hello = (obj) => {
  let newObj = {};
  for (const key in obj) {
    newObj[key.toLowerCase()] = obj[key];
  }
  console.log(newObj);
};
let obj = {
  NAME: "ZEESHAN",
  GENDER: "MALE",
  ADDRESS: "BAREILLY",
};
hello(obj);
