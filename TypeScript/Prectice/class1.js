"use strict";
// -----------Valiable------------
// let a:(string)="Hello"
// let b:(number)=123456789.6453
// console.log(a)
// console.log(b)
// ---- Array------
// let a:(string|number)[]=[1,2,3,"zeeshan",665.45,"khan"]
// console.log(a)
// ----Object-----
// interface objtype{
//     name:string,
//     age:number,
//     gender:string,
//     phone:number
// }
// let obj: objtype[]=[
//     {name:"Zeeshan",age:25,gender:"Male",phone:9568046912},
//     {name:"Zeeshan",age:25,gender:"Male",phone:9568046912},
//     {name:"Zeeshan",age:25,gender:"Male",phone:9568046912},
//     {name:"Zeeshan",age:25,gender:"Male",phone:9568046912},
// ]
// obj.map((item:objtype)=>{
//     console.log(item.name)
// })
//---------slice---------------
// let arr:(string|number)[]=[1,2,3,4,5,6,7,8,9,10]
// let b= arr.splice(2,5)
// console.log(b)
//-----splice-----
// arr.splice(2,0,"Zeeshan")
// console.log(arr)
//-------sort ,reverse upperCase , Loyer Case-------
// let a:(string)="Hello Hi How Are You"
// console.log(a)
// console.log(a.toLocaleUpperCase())
// console.log(a.toLocaleLowerCase())
// let arr:(number|string)[]=["z","x","l","a"]
// let b = arr.sort()
// let d = arr.reverse()
// console.log(b)
// console.log(d)
//-----split , trim , push , pop , shift , unshift------
// let str:(string)="zeeshan khan"
// let b = str.split("")
// let c = str.split(" ")
// console.log(b)
// console.log(c)
// let str :(string)="    hello i am zeeshan khan        "
// console.log(str)
// console.log(str.trim())
// let arr:(string|number)[]=[1,2,3,4,5,6,7,8]
// arr.push("Zeeshan")
// arr.pop()
// arr.shift()
// arr.unshift("Zeeshan")
// console.log(arr)
//-------condition -----------
// let a:(string)="hello"
// if (a==="hello") {
//     console.log("Hello My Name is Zeeshan") 
// }else{
//     console.log("Not  Name ")
// }
// console.log(a==="hello"?"Hello My Name is Zeeshan":"Not  Name ")
//------loops------------
// let arr:(number|string)[]=[1,2,3,4,5,6,7,8,9,10,"Hello"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// arr.forEach((item:(number|string))=>{
//     console.log(item)
// })
// for (const i of arr) {
//     console.log(i)
// }
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b= arr.map((item:number|any)=>{
//     return item*2
// })
// console.log(b)
// let c:number = arr.reduce((acc:number|any,cur:number|any)=>{
//     return acc+cur
// },0)
// console.log(c)
// let d = arr.find((item:number|any)=>{
//     return item >5
// })
// console.log(d)
// Object 
// interface objType{
//     name:string,
//     age:number
//     login: boolean,
// }
// let obj:objType={
//     name:"Zeeshan",
//     age:25,
//     login:true
// }
// console.log(obj)
// let ArObj:objType[]=[
//     {name:"Zeeshan",age:25,login:true},
//     {name:"Zeeshan",age:25,login:true},
//     {name:"Zeeshan",age:25,login:true},
//     {name:"Zeeshan",age:25,login:true},
// ]
// console.log(ArObj)
