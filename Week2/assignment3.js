//write a javascriot function to reverse the string. 
//1. Convert the input into characters 
//2. Loop them in reverse direction 
//3. Concatenate the string 
//4. Print the new string Write a function to check the given string is a palindrome [If the given string and reverse string are the same, it is a palindrome] 1
//4(a) Check if the reverse string and original string are the same 
//4(b) Return true if same, else the false.

function reverseString(str) 
{
   let chars = str.split('');                    //Converts the input into characters
    let reversedStr = "";

    for (let i = chars.length - 1; i >= 0; i--)      //Loop them in reverse direction  
     
{
    reversedStr += chars[i];                //Concatenate the string
}
    console.log(reversedStr);               //Print the new string
    return reversedStr;
}

function isPalindrome(str) 
{
    const reversed = reverseString(str);

    return str === reversed;            //Check if the reverse string and original string are the same
                                        //Return true if same, else false
}

//Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false