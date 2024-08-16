Question:
Given an array of objects, write a function removeDuplicates that removes duplicates based on a specific key.

const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' }
];

const result = removeDuplicates(arr, 'id');
console.log(result);
// Output:
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]
