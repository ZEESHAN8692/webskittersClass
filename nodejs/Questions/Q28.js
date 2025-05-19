// 28.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let SampleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
let b = SampleArray.filter(
  (item) =>
    item !== NaN &&
    item !== 0 &&
    item &&
    item !== false &&
    item !== "" &&
    item !== undefined &&
    item !== null &&
    item
);
console.log(b);
