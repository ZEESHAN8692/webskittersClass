// Promise All and Any 

// const promiseOne =new Promise((resolve , reject )=>{
//     const error = false
//     setTimeout(()=>{
//         if(error===true){
//             resolve("Hello , My name is Zeeshan Khan ")

//         }else{
//             reject("Somthing went Wrong ")
//         }

//     })
// })

// .then((massege)=>{
//     console.log(massege)
// })
// .catch((error)=>{
//     console.log(error)
// })

// const promiseTwo = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if (error ===true) {
//     reject("Something went Wrong ")

            
            
//         }else{
//             resolve({
//                 name :'Zeeshan',
//                 age:23,
//                 gender:"Male",
//             },
//             {
//                 name :'Zeeshan Khan',
//                 age:24,
//                 gender:"Male",
//             },
//             {
//                 name :'Anamika',
//                 age:23,
//                 gender:"Female",
//             },
//         )
//         }
    

//     },1000)
// })

// promiseTwo.then((user)=>{
//     console.log(user)
// })
// .catch((error)=>{
//     console.log(error);
    
// })


// Fetch API 

let PromiseThree= new Promise((resolve , reject)=>{
    setTimeout(()=>{
        lfetch('https://dummyjson.com/products/1')
        .then((resolve)=>resolve.json)
        .then((Response)=>resolve(Response))

    },1000)
})

PromiseThree.then((product)=>{
    console.log(product)
})


// fetch('https://dummyjson.com/products')
// .then((reolve)=> reolve.json).then((response)=>{
//     console.log(response)
// })
