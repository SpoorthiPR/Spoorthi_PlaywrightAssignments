//Consider and example and write javascript program for 
// 1. Remove spaces and convert all letters to the same case 
// 2. Sort the Characters 
// 3. Compare Sorted Strings 
// 4. Return the Result

// JavaScript Program to Check Whether Two Strings are Anagrams

function checkAnagram(str1, str2) 
{ 
    function formatString(str)          // Function to process the string
    {
            return str                          // 1. Remove spaces and convert all letters to the same case
            .replace(/\s+/g, "") // Remove spaces
            .toLowerCase()       // Convert to lowercase

            // 2. Sort the Characters
            .split("")           
            .sort()
            .join("");
    }

    // 3. Compare Sorted Strings
    let sortedStr1 = formatString(str1);
    let sortedStr2 = formatString(str2);

    // 4. Return the Result
    return sortedStr1 === sortedStr2;
}

// Example
let word1 = "Listen";
let word2 = "Silent";

console.log("Are the strings anagrams?", checkAnagram(word1, word2));

