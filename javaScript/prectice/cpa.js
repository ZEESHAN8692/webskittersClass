// Callback Hell

// function getData(data, getNextData) {
//     setTimeout(() => {
//         console.log("Data = ", data)
//         if (getNextData) {
//             getNextData()
//         }

//     }, 2000)
// }
// getData(10, () => {
//     console.log("geting 2 Data...")
//     getData(50, () => {
//         console.log("geting 3 Data...")
//         getData(100, () => {
//             console.log("geting 4 Data...")
//             getData(150, () => {
//                 console.log("geting 5 Data...")
//                 getData(200)
//             })
//         })
//     })
// })


// Promise 

// const promiseOne = ()=>{
//     return new Promise((resolve , reject )=>{
//         console.log("Data 1 Printed")
//         resolve("sucess")
//     },4000)
// }

// const promisetwo = ()=>{
//     return new Promise((resolve , reject )=>{
//         console.log("Data 2 Printed")
//         resolve("sucess")
//     },4000)
// }


// console.log("Getting Data 1");
// promiseOne().then((res)=>{
//     console.log("Getting Data 2" );
//     console.log(res)

//     promisetwo().then((res)=>{
//     console.log(res)

//     })
    
// })

// promise Chain


// function getData(data) {
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             console.log(`Geted Data is = ${data}`)
//             resolve("success")
//         }, 2000)

//     })
   
// }
// console.log("Geting Data 1 ")
// getData(1).then((res)=>{
// console.log("Geting Data 2 ")

//     return getData(2)
// }).then((res)=>{
// console.log("Geting Data 3 ")

//     return getData(3)
// })
// .then((res)=>{
// console.log("Geting Data 4 ")

//     return getData(4)
// })
// .then((res)=>{

//     console.log(res)
// })

// Async Await

// function api(getdata){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             console.log("Get Weather Data ",getdata)
//             resolve("success")
//         }, 1000)
//     })
// }

// async function result(){
//     console.log("getting data 1....")
//     await api(10) 
//     console.log("getting data 2....")
//     await api(20)  
//     console.log("getting data 3....")
//     await api(30)  
//     .then((res)=>console.log(res))

// }
// result()


// IIFI  (Immediately Invoked Function Expression)

// (async function (){
//     console.log("getting data 1....")
//     await api(10) 
//     console.log("getting data 2....")
//     await api(20)  
//     console.log("getting data 3....")
//     await api(30)  
//     .then((res)=>console.log(res))

// })()
