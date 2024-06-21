// Group Objects by Property
// Question:
// Given an array of objects, write a function to group the objects by a specific property using the reduce method.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dana', age: 30 }
  ];

//--------------------------------------------------------------------
//using foreach

const result = {};
  
people.forEach(item => {
  if(!result[item.age]){
    result[item.age] = []
  }
  result[item.age].push(item);
})

console.log(result)

//--------------------------------------------------------------------
// using reduce

const a = people.reduce((acc, initValue) => {
    if(!acc[initValue.age]){
        acc[initValue.age] = []
    }

    acc[initValue.age].push(initValue); 
    return acc
}, {})

console.log(a);

  
