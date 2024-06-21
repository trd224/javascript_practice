const arr = [1,1,1,2,2,3,3,3,3,3,4,4,4,5]

const result = {};
arr.forEach(item => {
  if(!result[item]){
    result[item] = 0
  }
  result[item] += 1;
})

console.log(result);  //output: {1: 3, 2: 2, 3: 5, 4: 3, 5: 1}