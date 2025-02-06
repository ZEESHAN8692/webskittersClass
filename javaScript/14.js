async function Hello (){
    console.log("Step 2");
    let url = 'https://dummyjson.com/products'
    console.log("Step 3")
    let response =await  fetch(url)
    console.log("Step 5");
    let result = await response.json()
    return result;
   
    
}

console.log("Step 1")

let a = Hello()
console.log("Step 4");
console.log(a)

a.then((item)=>{ console.log(item)})
a.catch((error)=>console.log(error))