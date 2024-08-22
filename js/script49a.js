
// remove duplicate
const arr = [1,2,3,3,4,5,5,6,6,6,6,7];

const result = arr.filter((item, index, self) => self.indexOf(item) == index);
console.log(result);
