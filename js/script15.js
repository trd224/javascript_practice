// Question:
// Given an array of arrays, write a function to flatten it into a single array using the reduce method.
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

//----------------------------------------------------

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]



