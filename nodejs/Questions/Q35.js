// 35.	 Write a JavaScript program to perform left-to-right function composition for asynchronous functions.

function pluralize(word, count) {
  if (count === 1) {
    return `${count} ${word}`;
  } else {
    return ` ${count} ${word}s`;
  }
}
console.log(pluralize("apple", 1));
console.log(pluralize("apple", 3));
console.log(pluralize("car", 0));
console.log(pluralize("dog", 5));
