 
// function logger(constroctor:Function){
//     console.log(`logger create of class : ${constroctor.name}`)
// }

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

const API=():Promise<string>=>{
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve("Successful resolve ")

    // reject("Error : Somthing Wrong ")
})
 
     
    })
}
API()
.then((data)=>console.log(data))
// .then((erorr)=>console.log(erorr))
