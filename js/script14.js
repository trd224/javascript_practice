const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

// output:
// {
//   "apple": 2,
//   "banana": 3,
//   "orange": 2
// }

//-------------------------------------------------------------
//using foreach

const result = {};

fruits.forEach(fruit => {
  if(!result[fruit]){
    result[fruit] = 0;
  }

  result[fruit] += 1
})

console.log(result);

//---------------------------------------------------------------------
//using reduce

const fruitCount = fruits.reduce((acc, fruit) => {

  // acc[fruit] = (acc[fruit] || 0) + 1;

  if(!acc[fruit]){
    acc[fruit] = 0;
  }
  acc[fruit] += 1;

  return acc;
}, {});

console.log(fruitCount);
