// 14.	Write a JavaScript conditional statement to find the largest of five numbers.

let a = 12;
let b = 45;
let c = 23;
let d = 67;
let e = 34;

let largest;

if (a >= b && a >= c && a >= d && a >= e) {
    largest = a;
} else if (b >= a && b >= c && b >= d && b >= e) {
    largest = b;
} else if (c >= a && c >= b && c >= d && c >= e) {
    largest = c;
} else if (d >= a && d >= b && d >= c && d >= e) {
    largest = d;
} else {
    largest = e;
}

console.log("The largest number is: " + largest);
