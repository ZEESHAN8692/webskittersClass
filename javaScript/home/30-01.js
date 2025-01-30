// 1)You are tasked with fetching data from a public API asynchronously. Write a function that fetches user data and logs the result or an error.


// 2)You need to simulate two asynchronous tasks, one that resolves after 1 second and another that resolves after 2 seconds. Log the result when both tasks complete.

// const tast1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },1000)
// })
// tast1.then(()=>{console.log("This tast print in 1 Second")})

// const tast2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },2000)
// })
// tast2.then(()=>{console.log("This tast print in 2 Second")})




// 3)You are asked to create a function that resolves if a number is even and rejects if it is odd. Then, handle the result of the promise.

function Hello (Number){
    const a= new Promise((resolve , reject )=>{
        setTimeout(()=>{
            if (Number % 2==0) {
                resolve("Even")
                
            }else{
                reject("Odd")
            }
        })
    }).then((even)=>{console.log(even)})
      .catch((odd)=>{console.log(odd)})

}

Hello(5)
