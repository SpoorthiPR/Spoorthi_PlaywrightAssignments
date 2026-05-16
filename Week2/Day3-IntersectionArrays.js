//Write a javascript function named intersection that accepts two arguments, arr1 and arr2, 
//which are arrays of numbers, and returns an array of their intersection. 
//2. Ensure no duplicate elements in the resulting array. 
//If an element appears in both arr1 and arr2, it should appear only once in the result. 
//3. Use a loop to find common elements. Iterate through each element of arr1 and check if it is 
// present in arr2 and not already included in the result array. 
// 4. Include example calls to the intersection function with different arrays to demonstrate the function’s functionality. 
//Include examples with no common elements, all elements common, and typical cases.

function intersection(arr1, arr2) 
{
  const result = [];

  // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) 
    {
    const current = arr1[i];

    if (arr2.includes(current) && !result.includes(current))    // Check if current exists in arr2 and is not 
                                                                //already in result
        {
      result.push(current);
        }
    }

  return result;
}

// Example 1: Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Output: [3, 4]

// Example 2: No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));
// Output: []

// Example 3: All elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));
// Output: [1, 2, 3]

// Example 4: Duplicate values in arrays
console.log(intersection([1, 2, 2, 3, 4], [2, 2, 4, 4, 5]));
// Output: [2, 4]

// Example 5: Another typical case
console.log(intersection([10, 20, 30, 40], [20, 40, 60]));
// Output: [20, 40]