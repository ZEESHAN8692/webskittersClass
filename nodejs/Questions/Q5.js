// 5.	Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

const alphabetical = (str) => {
  let arr = str.split("");
  let alphabeticalVal = arr.sort().join("");
  console.log(alphabeticalVal);
};
alphabetical("webmaster");
