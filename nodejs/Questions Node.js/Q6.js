// create second largast number and romeve all duplicate without any build in method 

let arr = [5,6,7,7,8,9,10,11 , 11 , ]

const Hello =(arr)=>{
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i])
        }
    }
    console.log("Remove Duplicate Number", uniqueArr)
    
    let max = 0;
    let secondMax = 0;
    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] > max) {
            secondMax = max;
            max = uniqueArr[i];
        }
    }   


    return secondMax

}

console.log(Hello(arr))

