// Consider you have an array of integers, some of which are duplicates. Write a function in JavaScript that takes an array as input and returns a new array containing only the unique elements, removing any duplicates. For example:

// Input: [1, 2, 3, 3, 4, 5, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

// How would you approach solving this problem? Feel free to write code or describe the steps.

//--------------------------------------------------------

const arr = [1, 2, 3, 3, 4, 5, 5, 6];

function removeDuplicates(arr){
  return Array.from(new Set(arr));
}

const result = removeDuplicates(arr);
console.log(result);

//--------------------------------------------------------
// other solution

const arr2 = [1, 2, 3, 3, 4, 5, 5, 6];

const result2 = [];
const uniqueObj = {}
arr2.forEach(obj => {
  if(!uniqueObj[obj]){
    result2.push(obj);
  }
  uniqueObj[obj] = true;
})
console.log(uniqueObj)

console.log(result2);

//-----------------------------------------------
//other solution

const arr3 = [1, 2, 3, 3, 4, 5, 5, 5, 6];

const newArray = arr3.filter((item, index) => {
    return arr3.indexOf(item) == index
})

console.log(newArray);
