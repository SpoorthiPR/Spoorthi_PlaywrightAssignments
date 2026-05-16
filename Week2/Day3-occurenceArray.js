//write javascript code to Find the number of occurrences for Given the array, 
// const nums = [2,4,5,2,1,2]; if const k = 2, then output >> 3 
// Assignment Requirements: 1. Initialize count to 0. 
// 2. Loop through the array nums. 
// 3. If the element equals k, increment count. 
// 4. Return the count of k in nums.


function countOccurrences(nums, k) {
  // 1. Initialize count to 0
  let count = 0;

  // 2. Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // 3. If element equals k, increment count
    if (nums[i] === k) {
      count++;
    }
  }

  // 4. Return the count
  return count;
}

// Example usage:
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

console.log(countOccurrences(nums, k));
// Output: 3