// Question:
// Write a function flattenObject that takes a deeply nested object and returns a flattened version 
// of it, with the keys indicating the path to each value.
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};

const result = flattenObject(obj);
console.log(result);
// Output:
// {
//   'a': 1,
//   'b.c': 2,
//   'b.d.e': 3,
//   'b.d.f': 4
// }
