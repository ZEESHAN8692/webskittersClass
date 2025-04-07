// let a:(number | string)[]=[1,2,3,4,5,6,7,8,9,10,"Zeeshan"]
// console.log(a)
// a.splice(2,0,"Anis")
// console.log(a)




// interface objtype{
//     name:string;
//     age:number;
// }
// let obj: objtype[] =[
//     {
//         name:"Zeeshan",
//         age:25
//     },
//     {
//         name:"Anis",
//         age:23
//     },
//     {
//         name:"Zeeshan Khan",
//         age:25
//     },
// ]

// obj.filter((item:objtype)=>console.log(item.name==="Anis"))

// let obj:{name:string,age:number}={
//     name:"zeeshan",
//     age:25
// }
// console.log(obj)



// optional paraameter 

// function para (name:string,  age:number, gender?:string){
//     if(gender){
//         return `name = ${name} and age = ${age} gender = ${gender}`

//     }else{
//         return `name = ${name} and age=${age} and gender not provide `
//     }
// }
// console.log(para("zeehan",25, "Male"))
// console.log(para("zeehan",25))

// type aliases 

// function hello<T>(a:T):T{
//     return a
// }
// console.log(typeof hello("hello"))
// console.log(typeof hello(25))

// function myDecorator(constroctor:Function) {
//     console.log("Decorator is called")
//     console.log(constroctor);
    
// }

// @myDecorator
// class myclsss{
//     constructor(){
//         console.log("My class instace create ");
        
//     }
// }
// let myclassCall = new myclsss()


// Class Decorators

// Method Decorators

// Accessor Decorators

// Property Decorators

// Parameter Decorators

// function classDecorator(constructor: Function) {
//     console.log("Class decorated!");
//     console.log(constructor)
//   }
  
//   @classDecorator
//   class MyClass {
//     constructor() {
//       console.log("Class instantiated");
//     }
//   }
  
//   const obj = new MyClass();


// Enum 

// enum direction {
//   up =1,
//   down,
//   right,
//   left
// }
// console.log(direction.up)
// console.log(direction.down)
// console.log(direction.right)
// console.log(direction.left)

// enum counting{
//   one=1,
//   two,
//   three,
//   four,
//   five
// }
// console.log(counting.one)
// console.log(counting.two)
// console.log(counting.three)
// console.log(counting.four)
// console.log(counting.five)

// string enum 

// enum STATUS{
//   active='ACTIVE',
//   pending="PENDING",
//   inactive ="INACTIVE"
// }

// console.log(STATUS.active)

// function printStatus(a:STATUS) {
//   console.log(`The status = ${a}`)
// }
// printStatus(STATUS.active)


// function hello<T>(a:T):T{
//     return a
// }
// console.log(hello("zeeshan"))
// console.log(hello(25))
// console.log(hello([1,2,3,4]))
// console.log(hello({name:"zeeshan"}))
// console.log(hello(()=>{
//     console.log("hello")
// })())

