// Function to check number type
function checkNumberType(number) 
{
    if (number > 0)                     // Conditional statements
    {
        return "Positive Number";
    } 
    else if (number < 0) 
    {
        return "Negative Number";
    } 
    else 
    {
        return "Zero";
    }
}

let num = 22;                                // Declare and initialize the variable

console.log(checkNumberType(num));          // Call the function and print the result
