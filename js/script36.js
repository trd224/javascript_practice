// Question:
// Given an array of objects, write a function groupByKey that groups the objects by a 
// specific key and counts the number of objects in each group.

const data = [
  { name: 'Alice', role: 'developer' },
  { name: 'Bob', role: 'designer' },
  { name: 'Charlie', role: 'developer' },
  { name: 'David', role: 'developer' },
  { name: 'Eve', role: 'designer' }
];

function groupByKey(data, role){
  const r = {};
  data.forEach(item => {
    if(!r[item.role]){
      r[item.role] = 0;
    }
    r[item.role] += 1;
  })
  return r;
}

const result = groupByKey(data, 'role');
console.log(result);
// Output: 
// {
//   developer: 3,
//   designer: 2
// }
