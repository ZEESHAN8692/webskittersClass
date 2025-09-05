
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
const mergeArray=(arr1, arr2) =>{
    let mergedArray = [];
    let i = 0, j = 0;

    for (let k = 0; k < arr1.length + arr2.length; k++) {
        if (i < arr1.length && (j === arr2.length || arr1[i] <= arr2[j])) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray;
}


console.log(mergeArray(arr1 , arr2 ))