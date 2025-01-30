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


const PromiseFour= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({name:"Zeeshan", age:23})
            
        }else{
            reject({
                error:"Something went wrong"
            })
        }

    },1000)
})

PromiseFour
.then((user)=>{
    console.log(user)
    return user.name
})
.then((username)=>{
    console.log(username)
})
.catch((Err)=>{
    console.log(Err)
})