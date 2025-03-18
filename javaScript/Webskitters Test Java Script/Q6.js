// ### Assignment 6: Spread Operator
// Write a function that:
// - Accepts two arrays.
// - Merges them into a single array using the spread operator.
// - Removes duplicates.
// - Returns the new array.

// *Example Input:*
//  `[1, 2, 3]`, `[2, 3, 4]`
// *Example Output:*
//  `[1, 2, 3, 4]`

// 1.

const spreadOperator = () => {
  let Arr1 = [1, 2, 3];
  let Arr2 = [2, 3, 4];
  let singleArr = [...Arr1, ...Arr2];

  let a = singleArr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(a);
};
spreadOperator();

// 2. Extra se

// const Extra = () => {
//   let SArr1 = [1, 2, 3];
//   let SArr2 = [2, 3, 4];
//   let final = [...new Set([...SArr1, ...SArr2])];
//   console.log(final);
// };
// Extra();

// const Extra = (value1, value2) => {
//   let final = [...new Set([...value1, ...value2])];
//   console.log(final);
// };
// Extra([1, 2, 3, 4], [2, 3, 4]);
