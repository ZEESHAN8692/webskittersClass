"use strict";
// function logger(constroctor:Function){
//     console.log(`logger create of class : ${constroctor.name}`)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logger
// class peaple {
//     constructor(public name:string){}
// }
// let p = new peaple("Zeeshan")
// console.log(p)
// function loger (constroctor:Function){
//     console.log(`loger create  class : ${constroctor.name}`)
// }
// @loger
// class names{
//     constructor(name:string){console.log(name)}
// }
// let c = new names("Ayra")
// const API=():Promise<string>=>{
//     return new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve("Successful resolve ")
//     // reject("Error : Somthing Wrong ")
// })
//     })
// }
// API()
// .then((data)=>console.log(data))
// // .then((erorr)=>console.log(erorr))
function MyDecorator(constructor) {
    console.log("Class Decorator called");
    console.log(constructor);
}
let MyClass = class MyClass {
    constructor() {
        console.log("MyClass instance created");
    }
};
MyClass = __decorate([
    MyDecorator
], MyClass);
const obj = new MyClass();
