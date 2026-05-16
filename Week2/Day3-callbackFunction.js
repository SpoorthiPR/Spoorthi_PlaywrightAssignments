// Write a javascript code to Create a 
// function named getUserData that takes a callback function as a parameter. 
// Inside getUserData, simulate fetching data with setTimeout and
// then call the callback function with that 
// should print “Call Back Function” after 3 seconds. 
// Call the getUserData function and log message using the callback function.


// Function with Callback

function getUserData(callback) 
{
    setTimeout(function ()                           // Simulate fetching data with 3 seconds delay
    {                   
         callback("Delayed by 3 seconds");              // Call the callback function
    }, 3000);
}

// Calling the function with a callback
getUserData(function (message) 
{
    console.log(message);
});