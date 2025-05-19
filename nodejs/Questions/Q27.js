// 27.	Write a JavaScript program to find duplicate values in a JavaScript array

const hello5 = () => {
  let arr = [1, 2, 2, 34, 5, 6, 7, 7, 8, 9, 8, 8];
  let uniqueValue = new Set();
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueValue.has(arr[i])) {
      duplicate.push(arr[i]);
    } else {
      uniqueValue.add(arr[i]);
    }
  }
  console.log(duplicate);
};
hello5();
