// 6.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const values = (str) => {
  let values = "aeiouAEIOU";
  let count = 0;
  for (const i of str) {
    if (values.includes(i)) {
      count++;
    }
  }
  console.log(count);
};
values("The quick brown fox");
