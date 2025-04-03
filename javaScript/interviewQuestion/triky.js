// 1. Reverse a String Without Using Built-in Functions
// Problem: Write a function to reverse a string without using the built-in reverse() method or any external library.

// javascript
// Copy
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello")); // Output: "olleh"

// 2. Check If a Number Is a Prime Number
// Problem: Write a function to check if a number is prime or not.

// javascript
// Copy
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(4)); // Output: false
// 3. Find the First Non-Repeated Character in a String
// Problem: Write a function that returns the first non-repeated character from a string.

// javascript
// Copy
// function firstNonRepeatedChar(str) {
//   const charCount = {};
//   for (let i = 0; i < str.length; i++) {
//     charCount[str[i]] = (charCount[str[i]] || 0) + 1;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] === 1) return str[i];
//   }
//   return null; // if no non-repeated character found
// }

// console.log(firstNonRepeatedChar("aabbccde")); // Output: "d"
// 4. Find the Missing Number in an Array
// Problem: You are given an array of n-1 numbers. These numbers are in the range from 1 to n. Find the missing number.

// javascript
// Copy
// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const totalSum = (n * (n + 1)) / 2;
//   const arrSum = arr.reduce((sum, num) => sum + num, 0);
//   return totalSum - arrSum;
// }

// console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); // Output: 5
// 5. Check for Palindrome Using Recursion
// Problem: Write a function to check if a given string is a palindrome using recursion.

// javascript
// Copy
// function isPalindrome(str) {
//   if (str.length <= 1) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   return isPalindrome(str.slice(1, str.length - 1));
// }

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// 6. Find the Largest Sum of Contiguous Subarray (Kadane’s Algorithm)
// Problem: Write a function to find the largest sum of a contiguous subarray in an array of integers.

// javascript
// Copy
// function maxSubArraySum(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// 7. Flatten an Array
// Problem: Write a function to flatten a multidimensional array into a single array.

// javascript
// Copy
// function flattenArray(arr) {
//   return arr.reduce((flat, item) =>
//     flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// 8. Check for Balanced Parentheses
// Problem: Write a function to check if the parentheses in a given string are balanced.

// javascript
// Copy
// function isBalanced(str) {
//   const stack = [];
//   const opening = "({[";
//   const closing = ")}]";

//   for (let char of str) {
//     if (opening.includes(char)) {
//       stack.push(char);
//     } else if (closing.includes(char)) {
//       const last = stack.pop();
//       if (opening.indexOf(last) !== closing.indexOf(char)) return false;
//     }
//   }
//   return stack.length === 0;
// }

// console.log(isBalanced("{[()]}")); // Output: true
// console.log(isBalanced("{[(])}")); // Output: false
// 9. Find the Longest Substring Without Repeating Characters
// Problem: Write a function to find the length of the longest substring without repeating characters.

// javascript
// Copy
// function longestSubstring(str) {
//   let maxLen = 0;
//   let start = 0;
//   const seen = new Map();

//   for (let end = 0; end < str.length; end++) {
//     if (seen.has(str[end])) {
//       start = Math.max(seen.get(str[end]) + 1, start);
//     }
//     seen.set(str[end], end);
//     maxLen = Math.max(maxLen, end - start + 1);
//   }

//   return maxLen;
// }

// console.log(longestSubstring("abcabcbb")); // Output: 3
// 10. Implement Regular Expression Matching
// Problem: Write a function that mimics the behavior of the RegExp test method.

// javascript
// Copy
// function regexMatch(pattern, str) {
//   const regExp = new RegExp(pattern);
//   return regExp.test(str);
// }

// console.log(regexMatch("^hello", "hello world"));  // Output: true
// console.log(regexMatch("world$", "hello world"));  // Output: true
// 11. Remove Duplicates from an Array
// Problem: Write a function that removes duplicates from an array.

// javascript
// Copy
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
// 12. Find the Most Frequent Element in an Array
// Problem: Write a function that returns the most frequent element in an array.

// javascript
// Copy
// function mostFrequent(arr) {
//   const count = {};
//   let maxCount = 0;
//   let mostFreqElement;

//   arr.forEach(element => {
//     count[element] = (count[element] || 0) + 1;
//     if (count[element] > maxCount) {
//       maxCount = count[element];
//       mostFreqElement = element;
//     }
//   });

//   return mostFreqElement;
// }

// console.log(mostFrequent([1, 2, 2, 3, 4, 2, 1])); // Output: 2
// 13. Find the Duplicate Character in a String Using Regex
// Problem: Write a regular expression to find the first duplicate character in a string.

// javascript
// Copy
// function findDuplicate(str) {
//   const regex = /(.).*\1/;
//   const result = str.match(regex);
//   return result ? result[1] : null;
// }

// console.log(findDuplicate("abcdde")); // Output: d
// 14. Convert a String to Title Case
// Problem: Write a function to convert a string to title case, i.e., capitalize the first letter of each word.

// javascript
// Copy
// function titleCase(str) {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }

// console.log(titleCase("hello world")); // Output: "Hello World"
// 15. Regular Expression to Validate an Email
// Problem: Write a regular expression to validate an email address.

// javascript
// Copy
// function validateEmail(email) {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return regex.test(email);
// }

// console.log(validateEmail("test@example.com")); // Output: true
// console.log(validateEmail("invalid-email")); // Output: false
