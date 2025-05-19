// 12.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

let arr = [1, 2, 3, 4, 3, 232, 21, 556, 54, 54];
const NumberFind = (arr) => {
  let secondLowest = arr.sort((a, b) => a - b);
  console.log("Second Lowest :-", secondLowest[1]);

  function greatest() {
    let secondGreatest = arr.sort((a, b) => b - a);
    console.log("Second Greatest :-", secondGreatest[1]);
  }
  greatest();
};

NumberFind(arr);
