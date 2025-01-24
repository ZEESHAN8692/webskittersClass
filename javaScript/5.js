//  if else

// let i = 0

// if(i===0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(i==="0"){
//     console.log(true)
// }else{
//     console.log(false)
// }

// create array

// let a =[1,2,3,4,5,6,7,8,9,10,11,12]

// for (let i = 1; i < a.length; i++) {
//     if (i<=5) {
//         console.log(i)
//     }
// }

// for (let i = 2; i < a.length; i++) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }

// for(let i of a){
//     if(i%2==0){
//         console.log(i)
//         }

// }

// let b = ["Nill", "Raju", "Rohan", "John"]

// for (let i = 0; i < b.length; i++) {
//     if(b[i].length ===4){
//         console.log(b[i])
//     }
// }

// ------------------------------

let c = [
  { name: "Zeeshan", number: 123456789 },
  { name: "Rajeev", number: 1654654654 },
  { name: "Rahul", number: 3000 },
];

for (let p of c) {
  if (p.name.length < 7 && p.number < 4000) {
    console.log(p);
  }
}
