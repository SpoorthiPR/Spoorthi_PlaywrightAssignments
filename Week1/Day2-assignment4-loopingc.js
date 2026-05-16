// Write a program to print odd numbers from 1 to 25.

function printOddnumbers()
{
    for (let i = 1; i <= 20; i++) 
    {
        if (i % 2 !== 0) 
        {
            console.log(i);
        }
    }
}

printOddnumbers();