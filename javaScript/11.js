// HighOrder 

// function A (item){
//     item()
// }
// function B (){
//     console.log("callBack");       
// }
// A(B)

// Destucturing  

// let a = [1,2,3,4,5,6,7,8,]
// let [b,d,c,f,g,h]=a
// console.log(h)

// let b=a[2]
// console.log(b)


// Object Dstructuring

// let a = {
//     name :"zeeshan",
//     addres :"Bareilly",
//     hobby:{
//         sleep:7
//     }
// }

// let {name,addres,hobby}=a
// console.log(name);

// let a = [
//     {
//         name :'Zeeshan',
//         age:23
//     },
//     {
//         name:'khan',
//         age :42
//     }
// ]
// let [b,c]=a
// console.log(c.age)


// const js = (name) => {
//     if (name === "Nill") {
//       return function (topic) {
//         console.log(` Hi ${name}. What is Course? ${topic}`);
//       };
//     }
  
//     if (name === "Raj") {
//       return function (topic) {
//         console.log(` Hi ${name}. What is Course? ${topic}`);
//       };
//     }
  
//     if (name === "Jhon") {
//       return function (topic) {
//         console.log(` Hi ${name}. What is Course? ${topic}`);
//       };
//     } else {
//       return function () {
//         console.log("Error");
//       };
//     }
//   };
  
//   js("Nillnn")("React");
//   js("Raj")("Node");
//   js("Jhon")("Angular");



let arr1= [1,2,3,4]
let arr2= [4,5,5,6]

let arr3 = [...arr1,...arr2]

let arr4= arr3.reduce((acc, cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc
 
},{})
console.log(arr4)