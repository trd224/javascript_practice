// Question:
// Write a function deepClone that creates a deep copy of an object. The copy should not reference any 
// of the nested objects in the original object.
const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } }
};

const clonedObj = deepClone(obj);
clonedObj.b.d.e = 10;

console.log(obj.b.d.e); // Output: 3 (original object remains unchanged)
