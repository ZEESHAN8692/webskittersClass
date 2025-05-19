// 20.	Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let b = arr1.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

let mostFrequentItem = Object.keys(b).reduce((acc, cur) =>
  b[acc] > b[cur] ? acc : cur
);

console.log(`${mostFrequentItem} (${b[mostFrequentItem]} times)`);
