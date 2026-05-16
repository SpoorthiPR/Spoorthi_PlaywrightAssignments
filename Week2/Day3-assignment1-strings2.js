//Example2
//1. Trim the String 
// 2. Split the String into Words 
// 3. Identify the Last Word 
// 4. Calculate the Length of the Last Word 5. Return the length.
// JavaScript Program to Find the Length of the Last Word

function getLastWordLength(str) 
{
    let trimmedString = str.trim();                     // 1. Trim the String

    let words = trimmedString.split(/\s+/);             // 2. Split the String into Words

    let lastWord = words[words.length - 1];             // 3. Identify the Last Word

    let length = lastWord.length;                       // 4. Calculate the Length of the Last Word

    return length;                                      // 5. Return the length
}
// Example

let text = "   Learn JavaScript Easily   ";

console.log("Length of Last Word:", getLastWordLength(text));