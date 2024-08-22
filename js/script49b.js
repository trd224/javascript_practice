const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' }
];

function removeDuplicates(arr, key) {
  return arr.filter((item, index, self) => 
    self.map(obj => obj[key]).indexOf(item[key]) === index
  );
}

const result = removeDuplicates(arr, 'id');
console.log(result);
// Output:
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]
