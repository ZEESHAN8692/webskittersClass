// const a= new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("Complete")
//         resolve()
//         // reject()

//     },1000)
// })
// a.then(()=>{
//     console.log("promise consumed")
// }).catch(()=>{
//     console.log("eror");
    
// })

// new Promise((resolve ,reject )=>{
//     setTimeout(() => {
//         console.log("Complete ")
//         // resolve()
//         reject()
//     }, 1000);
// }).then(()=>{
//     console.log("promise Consumed")
// }).catch(()=>{
//     console.log("error")
// })

// const PromiseThree= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Zeeshan", age:23, gender:'Male'})
//     },1000)

// })

// PromiseThree.then((user)=>{
//     console.log(user)
// })


// const PromiseFour= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if (!error) {
//             resolve({name:"Zeeshan", age:23})
            
//         }else{
//             reject({
//                 error:"Something went wrong"
//             })
//         }

//     },1000)
// })

// PromiseFour
// .then((user)=>{
//     console.log(user)
//     return user.name
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((Err)=>{
//     console.log(Err)
// })
// .finally(()=>{
//     console.log("Promise resolved and rejected")
// })


// const PromiseFive= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if (!error) {
//             resolve({name:'Zahid', age:30})
            
//         }else{
//             reject({error:"Somthin went wrong "})
//         }

//     },1000)
// })

// async function consumedPromis() {
//    try {
//      const response = await PromiseFive
//     console.log(response)
//    } catch (error) {
//     console.log(error)
//    }
    
// }
// consumedPromis()

// ============================================

// async function API() {
//    try {
//     const response = await fetch('https://dummyjson.com/products/3')
//     const data = await response.json()
//     console.log(data)
    
//    } catch (error) {
//     console.log(error)
//    }
// }
// API()

const PromiseSix= new Promise((resolve , reject)=>{
    setTimeout(()=>{
        fetch('https://dummyjson.com/products/1')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((error)=>{
            reject(error)
        })
    })

}).then((ProductData)=>{
    console.log(ProductData)
})
.catch((error)=>{
    console.log(error)
})


// const response = await fetch('https://dummyjson.com/products/1')
// .then((respon)=>{
//     return respon.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>console.log(error))
