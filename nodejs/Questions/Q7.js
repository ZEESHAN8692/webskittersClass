// 7.	Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.



const typeVal = (val) => {
  return typeof val;
};
console.log(typeVal({ name: "zeeshan" }));
console.log(typeVal(true));
console.log(typeVal(() => {}));
console.log(typeVal(123));
console.log(typeVal("Hello"));
