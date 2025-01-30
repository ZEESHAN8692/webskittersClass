// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


// let a= [NaN, 0, 15, false, -22, '',undefined, 47, null]
// let b =a.filter((item)=>{
//     return item != NaN && item != 0 && item != '' && item != false &&  item

// })
// console.log(b)


//  Write a JavaScript function to sort the following array of objects by title value.

let obj = [
    { title: 'Zeeshan', },
    { title: 'Aazhar', },
    { title: 'Baby',},
]

let b = []
for (const i of obj) {
    b.push(i.title)
   
}
let c= b.sort()
console.log(c);


// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// let arr1= [1,2,3,4]
// let arr2= [4,5,5,6]

// let a = [...arr1,...arr2]

// let b = a.reduce(function (acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);

// console.log(b);

