// Q1
// const str = "Hello    World";
// const newStr = str.replace(/\s+/g, " ");
// console.log(newStr);

//---------------------------------------
// Q2

// const i = "apple,banana;cherry.date";
// const e = i.split(/[ ,;.]/);
// console.log(e);

//----------------------------------------------------------

// 1 Write a function that takes a string as input and returns the reverse of the string?

// const rString = (str) => {
//   let b = str.split("").reverse().join("")
//   console.log(b);
// };
// rString("ZEESHAN");

// ----------------------------------------------------
// 2.	Write a JavaScript program to remove specified elements from the right of a given array of elements.?

// function hello(arr, num) {
//   return arr.slice(0, arr.length - num);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 5;
// console.log(hello(arr, num));
//--------------------------------------

// 3.	Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// const rever = (x) => {
//   let b = x.toString().split("").reverse().join("");
//   return parseInt(b);
// };
// let arg = rever(32243);
// console.log(arg);

//-------------------------------------

// 4.	Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const checkpalindrome = (input) => {
//   let check = input.split("").reverse().join("");
//   if (input === check) {
//     console.log(`${input} is a Palindrome`);
//   } else {
//     console.log(`${input} is Not a Palindrome`);
//   }
// };
// checkpalindrome("nursesrun");

//------------------------------------------------------------------

// 5.	Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// const alphabeticalOrder = (str) => {
//   let b = str.split("").sort().join("");
//   return b;
// };
// let output = alphabeticalOrder("webmaster");
// console.log(output);

//-----------------------------------------------------------------

// 6.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// const vowel = (str) => {
//   let vowel = "aeiouAEIOU";
//   let count = 0;
//   for (const i of str) {
//     if (vowel.includes(i)) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// vowel("The quick brown fox");
//---------------------------------------------

// 7.	Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// const typeOf = (value) => {
//   console.log(`Value typeof = ${typeof value}`);
// };
// typeOf({ name: "zeeshan" });
// typeOf(true);
// typeOf(() => {});
// typeOf(12334);
// typeOf("zeeshan");
// typeOf();

// 8.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// const FindNumber = (are) => {
//   let b = arr.sort((a, b) => a - b);
//   console.log(`second lowest Number :- ${b[1]}`);
//   let c = arr.sort((a, b) => b - a);
//   console.log(`second greatest Number :- ${c[1]}`);
// };
// let arr = [1, 2, 3, 4, 5];
// FindNumber(arr);
//----------------------------------------

// 9.	Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} id even`);
//   } else {
//     console.log(`${i} id odd`);
//   }
// }

//-----------------------------------------------------
// 10.	  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Class'
// Expected Output : 'Development'

// const longestWord = (str) => {
//   let longestStr = "";
//   let b = str.split(" ");
//   for (const i of b) {
//     if (i.length > longestStr.length) {
//       longestStr = i;
//     }
//   }
//   console.log(longestStr);
// };
// longestWord("Web Development Class");

//--------------------------------------------------------

// 11.	Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?
// const Prime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// if (Prime(2) === true) {
//   console.log(`${Prime(22)} Prime Number`);
// } else {
//   console.log(`${Prime(22)} Not Prime Number`);
// }

//---------------------------------------------------------

// 12.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// const FindNumber = (arr) => {
//   let lowestNumber = arr.sort((a, b) => a - b);
//   console.log(` second lowest Number ${lowestNumber[1]}`);
//   let greatestNumber = arr.sort((a, b) => b - a);
//   console.log(` second greatest Number ${greatestNumber[1]}`);
// };
// let arr = [1, 2, 3, 4, 5];
// FindNumber(arr);

//----------------------------------------------
// 14.	Write a JavaScript conditional statement to find the largest of five numbers.

// function conditional(a, b, c, d, e) {
//   let largest = a;
//   if (b > largest) {
//     largest = b;
//   } else if (c > largest) {
//     largest = c;
//   } else if (d > largest) {
//     largest = d;
//   } else if (e > largest) {
//     largest = e;
//   }
//   return largest;
// }
// let num1 = 10,
//   num2 = 20,
//   num3 = 30,
//   num4 = 40,
//   num5 = 50;
// let largestNumber = conditional(num1, num2, num3, num4, num5);
// console.log(`largest of five numbers = ${largestNumber}`);

//--------------------------------------------

// 15.	Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// const marks = (marks) => {
//   let b = marks.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   let average = b / marks.length;
//   let grade = "";
//   if (average >= 90) {
//     grade = "A";
//   } else if (average >= 80) {
//     grade = "B";
//   } else if (average >= 70) {
//     grade = "C";
//   } else if (average >= 60) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return { average, grade };
// };
// let studentsMarks = [90, 90, 90, 90, 90];
// let result = marks(studentsMarks);
// console.log(`Grade = ${result.grade}`);
// console.log(`Average = ${result.grade}`);

//---------------------------------------------------------

// 17 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".Sample Output:

// const iterates = () => {
//   for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       console.log(`FizzBuzz ${i}`);
//     }
//     if (i % 3 === 0) {
//       console.log(`Fizz ${i}`);
//     }
//     if (i % 5 === 0) {
//       console.log(`Buzz ${i}`);
//     }
//     console.log(i);
//   }
// };
// iterates();

//------------------------------------------------

// 17.	Write a JavaScript program to find the Armstrong numbers of 3 digits

// 18.	Write a JavaScript function to check whether an `input` is an array or not.
// const hello = (input) => {
//   return Array.isArray(input);
// };
// let a = hello([]);
// console.log(a);
//--------------------------------------------

// 19.	Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// const Hello1 = () => {
//   let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
//   //   let b = arr1.sort((a, b) => a - b);
//   let b = arr1.sort();

//   console.log(b);
// };
// Hello1();

//--------------------------------------------

// 20.	Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// const hello5 = () => {
//   let count = 0;
//   let key;
//   let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

//   let b = arr.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, []);
//   let c = arr.filter((item) => {
//     if (b[item] > count) {
//       count = b[item];
//       key = item;
//     }
//   });
//   console.log(`${key} (${5} Times)`);
// };
// hello5();

//-------------------------------------------------------------

// 21.	Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const swaps = (srt) => {
//   let arr = srt.split(" ");
//   let b = arr.map((item) => {
//     return item.toLowerCase().charAt(0) + item.slice(1).toUpperCase();
//   });
//   console.log(b);
// };
// swaps("The Quick Brown Fox");

//-----------------------------------------------------

// 22.	Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

// let array = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];
// for (let i = 0; i < array.length; i++) {
//   console.log(`Row ${i}`);
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }

//------------------------------------------------------------------

// 23.	Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let arr = ["apple", "APPLE", "banana", "BANANA"];
// let b = arr.map((item) => item.toString().toLowerCase());
// let c = new Set(b);
// console.log(c);

//---------------------------------------------------------------------

// 24.	Write a JavaScript program to find the leap years in a given range of years.

// const leapYear = (startYear, endYear) => {
//   let LeapYear = [];
//   for (let i = startYear; i < endYear; i++) {
//     if (i % 4 === 0 && i % 100 !== 0 && i % 400 !== 0) LeapYear.push(i);
//   }
//   return LeapYear;
// };
// let startYear = 2000;
// let endYear = 2025;
// let a = leapYear(startYear, endYear);

// console.log(`Leap years between ${startYear} and ${endYear} :`, a);
//-------------------------------------------------------------------------------

// 25.	Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

// function binary_Search(items, value) {
//   return items.indexOf(value);
// }
// let items = [1, 2, 3, 4, 5, 7, 8, 9];

// console.log(binary_Search(items, 1));
// console.log(binary_Search(items, 5));

//---------------------------------------------------------------

// 26.	There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// function Hello2(array1, array2) {
//   let sum = [];
//   for (let i = 0; i < array2.length; i++) {
//     sum.push(array1[i]||0 + array2[i]||0);
//   }
//   return sum;
// }
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];
// let a = Hello2(array1, array2);
// console.log(a);

//----------------------------------------------------------------------

// 27.	Write a JavaScript program to find duplicate values in a JavaScript array

// const hello5 = () => {
//   let arr = [1, 2, 3, 4, 5];
//   let uniqueValue = new Set();
//   let duplicate = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueValue.has(arr[i])) {
//       duplicate.push(arr[i]);
//     } else {
//       uniqueValue.add(arr[i]);
//     }
//   }
//   console.log(duplicate);
// };
// hello5();

//-------------------------------------------------

// 28.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// let SampleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let b = SampleArray.filter(
//   (item) =>
//     item !== NaN &&
//     item !== 0 &&
//     item &&
//     item !== false &&
//     item !== "" &&
//     item !== undefined &&
//     item !== null &&
//     item
// );
// console.log(b);

//-----------------------------------------------------------

// 29.	 Write a JavaScript function to sort the following array of objects by title value.

// function sortByTitle(arr) {
//   return arr.sort((a, b) => {
//       if (a.title < b.title) {
//           return -1;
//       }
//       if (a.title > b.title) {
//           return 1;
//       }
//       return 0;
//   });
// }

// let books = [
//   { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { id: 2, title: "Moby Dick", author: "Herman Melville" },
//   { id: 3, title: "1984", author: "George Orwell" },
//   { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" }
// ];

// let sortedBooks = sortByTitle(books);
// console.log(sortedBooks);
//--------------------------------------------------------------

// 30.	Write a JavaScript function that merges two arrays and removes all duplicate elements.
// 31.	Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// const array = (array1, array2) => {
//   let newArr = [...array1, ...array2];

//   let b = newArr.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
//   return b;
// };
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// console.log(array(array1, array2));

//-----------------------------------------------------------

// 32.	Write a JavaScript program to reverse the order of characters in the string.
// const hello7 = (str) => {
//   let b = str.split("").reverse().join("");
//   // console.log(b);
//   return b;
// };
// let a = hello7("Hello Zeeshan");
// console.log(a);

//-----------------------------------------------------------------

// 33.	Write a JavaScript program to redirect to a specified URL
// question solved in html file --
//--------------------------------------------------

// 34.	Write a JavaScript program to convert an asynchronous function to return a promise.
// const asynchronous = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise Resolved");
//     }, 2000);
//   });
// };
// asynchronous().then((resolvePromise) => {
//   console.log(resolvePromise);
// });

//--------------------------------------------------------

// 35.	Write a JavaScript program that returns the singular or plural form of the word based on the input number.

// const helo = (number, word) => {
//   if (number === 1) {
//     return `${number} ${word} - singular`;
//   } else {
//     return `${number} ${word} - plural`;
//   }
// };
// console.log(helo(1, "apple"));

//---------------------------------------------

// 36.	 Write a JavaScript program to perform left-to-right function composition for asynchronous functions.

// function pluralize(word, count) {
//   if (count === 1) {
//     return `${count} ${word}`;
//   } else {
//     return` ${count} ${word}s`;
//   }
// }
// console.log(pluralize("apple", 1));
// console.log(pluralize("apple", 3));
// console.log(pluralize("car", 0));
// console.log(pluralize("dog", 5));

//---------------------------------------------

// 37.	 Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function
// const hello = (arr, func) => {
//   let a = arr.map(func);
//   return Math.min(...a);
// };
// const Square = (num) => num * num;
// let arr = [4, 2, 3, 1, 5, 6];
// let a = hello(arr, Square);
// console.log(a);

//-------------------------------------------------
// 38.	 Write a JavaScript program to create an object from the specified object, where all keys are in lowercase
// const hello = (obj) => {
//   let newObj = {};
//   for (const key in obj) {
//     newObj[key.toLowerCase()] = obj[key];
//   }
//   console.log(newObj);
// };
// let obj = {
//   NAME: "ZEESHAN",
//   GENDER: "MALE",
//   ADDRESS: "BAREILLY",
// };
// hello(obj);

//-------------------------------------------------

// 39.	Write a JavaScript program to check if the given argument is a string.
// const hello = (value) => {
//   if (typeof value === "string") {
//     console.log(`${value} typeof is String`);
//   } else {
//     console.log(`${value} typeof is not String`);
//   }
// };
// hello("zeeshan");

// 40.	Write a JavaScript program to check if the provided integer is a prime number or is not

// const hello = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(hello(8));

//---------------------------------------------------------------
// 1)Write a function that takes an array of numbers and returns a new array where each element is doubled.
// const double = (arr) => {
//   return arr.map((item) => item * 2);
// };
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// console.log(double(arr));

//-------------------------------------------
// 2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// const number = (arr) => {
//   let b = arr.filter((item) => item % 2 === 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

//---------------------------------------------------------

// 3)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// const sum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`sum = ${sum(arr)}`);

//--------------------------------------------------

// 4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// const maximum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     if (acc < cur) {
//       acc = cur;
//     }
//     return acc;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(`maximum Value = ${maximum(arr)}`);

//----------------------------------------------------------

// 5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// const prime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// function primeArray(arr) {
//   return arr.filter(prime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(primeArray(arr));

// const isprime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//     return true;
//   }
// };
// function filterArray(arr) {
//   return arr.filter(isprime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(filterArray(arr));

//---------------------------------------------------

// 6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// const arrObj = (obj) => {
//   return obj.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let obj = [
//   { title: "hello" },
//   { title: "zeeshan " },
//   { title: "byeee" },
//   { title: "namaste" },
// ];
// console.log(arrObj(obj));

//--------------------------------------------------------

// 7)Write a function that removes duplicate values from an array using the filter function.

// const rDuplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(rDuplicate(arr));

// const duplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(duplicate(arr));

//------------------------------------------------------------

// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
// const sum = (...num) => {
//   let Sum = 0;
//   for (const i of num) {
//     Sum += i;
//   }
//   console.log(Sum);
// };

// sum(1, 2, 3, 4, 5, 6, 7);

//-------------------------------------------------------------
// 9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// const average = (...num) => {
//   return num.reduce((acc, cur) => acc + cur, 0) / num.length;
// };
// console.log(average(1, 2, 3, 4, 5));

//---------------------------------------------------------------

// 10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// const largest = (...num) => {
//   let a = num.sort((a, b) => b - a);
//   return a[0];
// };
// console.log(`largest Number = ${largest(23, 45, 12, 500, 77)}`);

//---------------------------------------------------------------

// 11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

// const hello = (...arry) => {

//   let b = arry.flat()
//   console.log(b);
// };
// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [11, 10, 12];
// let arr3 = [2, 3, 4];
// let arr4 = [9, 3, 5, 2];
// hello(arr1, arr2, arr3, arr4);

//---------------------------------------------
// 12)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest

// const hello = (...arr) => {
//   let specifiedValue = 4;
//   let b = arr.filter((item) => item.length > specifiedValue);
//   console.log(b);
// };
// hello("apple", "banana", "mango", "orange", "date", "eno");

//---------------------------------------------------------------------

// 13)Edit in array of object  property without changing original array of object.

// let arrOfObj = [
//   {
//     id: 1,
//     name: "zeeshan",
//     age: 19,
//   },
//   {
//     id: 2,
//     name: "Anis",
//     age: 28,
//   },
//   {
//     id: 3,
//     name: "Ashfak",
//     age: 25,
//   },
// ];

// let b = arrOfObj.map((item) => {
//   if (item.id === 1) {
//     return { ...item, name: "Zeeshan Khan", age: 23 };
//   } else if (item.id === 2) {
//     return { ...item, name: "ANIS" };
//   }
//   return item;
// });
// console.log(b);

//-----------------------------------------------------------------------

////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [4, 2, 4, 6, 3, 7];
// let b = a.sort((a, b) => a - b);
// console.log(b);

// let d = [4, 2, 4, 6, 3, 7];
// let e = d.sort((a, b) => b - a);
// console.log(e);

// let str = ["d", "e", "a", "b", "c"];
// let com = str.sort((a, b) => a.localeCompare(b));
// console.log(com);

// let stri = ["d", "e", "a", "b", "c"];
// let comp = str.sort((a, b) => b.localeCompare(a));
// console.log(comp);

//------------------------------------
// [1, 2, 5, 78]; max value return korao without using math.max
// const hello = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     if (acc < cur) {
//       acc = cur;
//     }
//     return acc;
//   }, 0);
//   console.log(b);
// };

// hello([1, 2, 5, 78]);

//---------------------------------------------

// let a = ["a", "j", 1, 2];
// only return numbers

// const Hello = () => {
//   let a = ["a", "j", 1, 2];
//   let c = a.join("");
//   let d = [];

//   for (const i of c) {
//     let number = i.match(/\d+/);
//     if (number) {
//       d.push(number[0]);
//     }
//   }

//   return d;
// };
// console.log(Hello());

//---------------------------------------------------------------
// sum of negative number

// let a = [1, 2, 3, -9, 10, -5, -6];
// let b = a
//   .filter((item) => item < 0)
//   .reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);

// console.log(b);

//------------------------------

// let a = "abc#$%123";

// let string = [];
// let spacialChar = [];
// let number = [];
// for (const i of a) {
//   if (i.match(/\d+/)) {
//     number.push(i);
//   } else if (i.match(/[a-zA-Z]/)) {
//     string.push(i);
//   } else spacialChar.push(i);
// }
// console.log(string);
// console.log(spacialChar);
// console.log(number);
//--------------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

// 7. Flatten an Array
// Problem: Write a function to flatten a multidimensional array into a single array.

// javascript
// Copy
// function flattenArray(arr) {
//   return arr.reduce((flat, item) =>
//     flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

// 11. Remove Duplicates from an Array
// Problem: Write a function that removes duplicates from an array.

// javascript
// Copy
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

//----------------------------------------------------------

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

//----------------------------------------------------------

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

//----------------------------------------------------------

// 14. Convert a String to Title Case
// Problem: Write a function to convert a string to title case, i.e., capitalize the first letter of each word.

// javascript
// Copy
// function titleCase(str) {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
// }

// console.log(titleCase("hello world")); // Output: "Hello World"

//----------------------------------------------------------

// 15. Regular Expression to Validate an Email
// Problem: Write a regular expression to validate an email address.

// function validateEmail(email) {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return regex.test(email);
// }

// console.log(validateEmail("test@example.com")); // Output: true
// console.log(validateEmail("invalid-email")); // Output: false
