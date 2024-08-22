// Question:
// Write a function deepMerge that takes two objects and merges them deeply. If both 
// objects have a property with the same key, and that property is an object, merge them 
// recursively. Otherwise, the second object's property should overwrite the first object's property.



// here lodash is using

function deepMerge(obj1, obj2) {
  return _.merge({}, obj1, obj2);
}

const obj1 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: { f: 4 }
};

const obj2 = {
  b: { c: 20, e: 5 },
  e: { g: 6 },
  h: 7
};

const result = deepMerge(obj1, obj2);
console.log(result);


// Output: 
// {
//   a: 1,
//   b: { c: 20, d: 3, e: 5 },
//   e: { f: 4, g: 6 },
//   h: 7
// }
