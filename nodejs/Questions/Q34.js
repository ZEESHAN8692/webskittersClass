// 34.	Write a JavaScript program that returns the singular or plural form of the word based on the input number.

const helo = (number, word) => {
  if (number === 1) {
    return `${number} ${word} - singular`;
  } else {
    return `${number} ${word} - plural`;
  }
};
console.log(helo(1, "apple"));
