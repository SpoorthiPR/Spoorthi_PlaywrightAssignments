// / Assignment: Create a function to check if a number is Odd or Even

function isOddOrEven(number)        // Create a function named isOddOrEven that takes a number as a parameter
{
    let result;                     // Declare and initialize the variable
  
    if (number % 2 === 0)           // Use a conditional statement to check if the number is divisible by 2
        {                           
        result = "Even";
        } 
    else 
        {
        result = "Odd";
        }
    return result;
}

// Call the function and print the result
console.log("Number 10 is:", isOddOrEven(10));
console.log("Number 7 is:", isOddOrEven(7));
console.log("Number 0 is:", isOddOrEven(0));
console.log("Number -3 is:", isOddOrEven(-3));


