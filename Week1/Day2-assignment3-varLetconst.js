// Global variable
var genderType = "female";

function printGender()                                    // Function declaration
{
    let color = "brown";                                 // Function-scoped variable using let

    if (genderType.startsWith("female"))                // If condition
         {      
        var age = 30;                                    // Variable declared with var
        let color = "pink";                             // Block-scoped variable
        console.log("Color inside block:", color);      // Prints block-scoped color
    }
 
    console.log("Age outside block:", age);             // Prints function-scoped age
    console.log("Color outside block:", color);         // Prints function-scoped color
}

printGender();                                          // Function call

console.log("Global genderType:", genderType);          // Print global variable


genderType = "male";                                    // Change global variable value   

console.log("\nAfter changing genderType to male:\n");


printGender();                            //Call function again to see the effect of changed global variable   
