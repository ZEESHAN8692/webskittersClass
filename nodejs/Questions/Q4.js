// 4.	Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = (val) => {
  let revers = val.split("").reverse().join("");
  if (revers === val) {
    return `${val} is Palindrom`;
  } else {
    return `${val} is not Palindrom`;
  }
};
console.log(palindrome("madam"));
console.log(palindrome("nurses"));
console.log(palindrome("word"));
