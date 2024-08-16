Question:
Write a function sortByProperty that sorts an array of objects based on a specific property. If two objects have the same value for that property, use a secondary property to break the tie.
const data = [
  { name: 'Alice', age: 30, score: 85 },
  { name: 'Bob', age: 25, score: 85 },
  { name: 'Charlie', age: 35, score: 90 },
  { name: 'David', age: 25, score: 95 }
];

const result = sortByProperty(data, 'score', 'age');
console.log(result);
// Output:
// [
//   { name: 'David', age: 25, score: 95 },
//   { name: 'Charlie', age: 35, score: 90 },
//   { name: 'Bob', age: 25, score: 85 },
//   { name: 'Alice', age: 30, score: 85 }
// ]
