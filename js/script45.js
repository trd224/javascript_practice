// Question:
// Given an array of integers from 1 to n with some numbers missing, write a function 
// findMissingNumbers that returns the missing numbers in the sequence.

const arr = [1, 2, 4, 6, 7, 9];

function findMissingNumbers(arr, max){
  const missingNumber = [];
  for(let i = 1; i<=max; i++){
    if(!arr.includes(i)){
      missingNumber.push(i)
    }
  }
  return missingNumber;
}

const result = findMissingNumbers(arr, 9);
console.log(result);
// Output: [3, 5, 8]