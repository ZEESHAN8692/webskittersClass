"use strict";
// function isPrime(num:number): boolean {
//     if(num <=1)return false;
//     if(num <=3)return true;
//     if(num %2===0 || num %3===0)return false;
//     for(let i )
// }
function userData(user, number) {
    if (typeof user === "string") {
        return user.toUpperCase();
    }
    else {
        return number.toString();
    }
}
console.log(userData("Zeeshan khan", 25));
function even(num) {
    return num.filter((hello) => hello % 2 === 0);
}
const NumberAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let zeeshan = even(NumberAr);
console.log(zeeshan);
// console.log(even(NumberAr))
