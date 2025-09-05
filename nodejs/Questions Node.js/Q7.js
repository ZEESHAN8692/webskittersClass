// Sum of all odd and even number 1- 100 for loop , while loop , do while loop

// For Loop

let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(`Sum of even numbers: ${sumEven}`);
console.log(`Sum of odd numbers: ${sumOdd}`);

// while loop 

// let i = 1;
// let sumEven = 0;
// let sumOdd = 0;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }
//     i++;
// }
// console.log(`Sum of even numbers: ${sumEven}`);
// console.log(`Sum of odd numbers: ${sumOdd}`);


// Do while

// let i = 1;
// let sumEven = 0;
// let sumOdd = 0;
// do {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }
//     i++;
// } while (i <= 100);
// console.log(`Sum of even numbers: ${sumEven}`);
// console.log(`Sum of odd numbers: ${sumOdd}`);

