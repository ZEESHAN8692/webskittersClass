// 35)Check if a string is a palindrome.
function isPalindrome(str) {
    let rev = str.split("").reverse("").join("")
    console.log(rev)

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

// 36)Write a function to deeply clone an object.

let student = {
    name :"Zeeshan",
    age :29
}
let student2={...student}
student.name = "Rahul"

console.log(`Student 1 Name = ${student.name}`)
console.log(`Student 2 Name = ${student2.name}`)

// 37)Merge two objects without overwriting existing keys.

// 38)Write a function that fetches data from an API using async/await.

// 39)Write a function that resolves multiple promises in parallel.

// 40)Write a function to check if two strings are anagrams.

// 41)Write a function to find the first non-repeating character in a string.