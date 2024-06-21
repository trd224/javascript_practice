// You are given an array nums containing n distinct numbers in the range [0, n]. Each number in the range appears 
// exactly once except for one number which is missing. Write a function findMissingNumber(nums) to find the 
// missing number.

const nums = [3, 0, 1];

function findMissingNumber(nums){
  const n = nums.length;
  const totalSum = (n*(n+1))/2;

  const sum = nums.reduce((acc, num) => acc + num, 0);

  const missingNum = totalSum - sum;
  return missingNum;
}

console.log(findMissingNumber(nums)); // Output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8