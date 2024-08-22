// Question:
// Write a function findMostFrequent that takes an array and returns the element that 
// appears the most times. If there are multiple elements with the same highest 
// frequency, return any one of them.

const arr = [1, 3, 2, 3, 4, 1, 1, 3, 2];

function findMostFrequent(arr){
  const r = {};
  arr.forEach(num => {
    if(!r[num]){
      r[num] = 0
    }
    r[num] += 1
  })
  const maxVal = Math.max(...Object.values(r));
  return Object.keys(r).filter(key => r[key] === maxVal).map(Number);
}

const result = findMostFrequent(arr);
console.log(result);
// Output: 1 or 3 (since both appear 3 times)
