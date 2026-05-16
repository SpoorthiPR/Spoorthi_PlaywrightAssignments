// Example 1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

function lengthOfLastWord(str) 
{
    let words = str.split(" ");
    let lastWord = words[words.length - 1];
    return lastWord.length;
}
// Test
console.log(lengthOfLastWord("javascript is powerful"));       // Output: 5

