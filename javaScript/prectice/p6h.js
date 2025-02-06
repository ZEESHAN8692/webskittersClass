// Promise All

const P1 = new Promise((resolve , reject )=>{
    setTimeout(()=>{
        console.log("The First Promise Print ")
    },1000)
    resolve(1)
})
const P2 = new Promise((resolve , reject )=>{
    setTimeout(()=>{
        console.log("The Second Promise Print ")
    resolve(3)

    },2000)
})
const P3 = new Promise((resolve , reject )=>{
    setTimeout(()=>{
        console.log("The Third Promise Print ")
    resolve(3)

    },3000)
})


Promise.all([P1,P2,P3]).then((result)=>{
    console.log(`Result : ${result}`)
})
.catch((eror)=>{
    console.log(`Error: ${eror}`)

})

// Promise Any

// const P1 = new Promise((resolve , reject )=>{
//     resolve(1)
// })
// const P2 = new Promise((resolve , reject )=>{
//     resolve(2)
// })
// const P3 = new Promise((resolve , reject )=>{
//     resolve(3)
// })
// Promise.any([P1,P2,P3])
// .then((result)=>{
//     console.log(`Result : ${result}`)
// })




