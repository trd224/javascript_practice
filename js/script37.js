Question:
Write a function transformAndFlatten that takes an array of nested objects and transforms each object by picking certain properties, then flattens the result into a single array.
const data = [
  { id: 1, name: 'Alice', roles: ['developer', 'admin'] },
  { id: 2, name: 'Bob', roles: ['designer'] },
  { id: 3, name: 'Charlie', roles: ['developer', 'designer'] }
];

const result = transformAndFlatten(data, 'roles', 'name');
console.log(result);
// Output:
// [
//   { role: 'developer', name: 'Alice' },
//   { role: 'admin', name: 'Alice' },
//   { role: 'designer', name: 'Bob' },
//   { role: 'developer', name: 'Charlie' },
//   { role: 'designer', name: 'Charlie' }
// ]
