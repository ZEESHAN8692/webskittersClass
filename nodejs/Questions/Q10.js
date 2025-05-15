// 10.	  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Class'
// Expected Output : 'Development'

const longest = (str) => {
  let arr = str.split(" ");
  let longestVal = "";
  for (const i of arr) {
    if (i.length > longestVal.length) {
      longestVal = i;
    }
  }
  console.log(longestVal);
};
longest("Web Development Class");
