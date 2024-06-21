// To find the single value (the element that appears only once) in an array where every other element appears twice, 
// you can use the XOR operator because of its unique properties. However, since you requested not to use the XOR 
// operator, we can use other methods such as using an object or a Map to count occurrences. Here’s how you can do it:

const nums = [2, 2, 3, 3, 4, 1];

function findSingle(nums) {

  uniqueObj = {};
  nums.forEach(obj => {
    if(!uniqueObj[obj]){
      uniqueObj[obj] = 1
    }
    else{
      uniqueObj[obj] += 1;
    }
  })

  for(let key in uniqueObj){
    if(uniqueObj[key] === 1){
      //console.log(key)
      return key;
    }
  }
  
}

const result = findSingle(nums);

console.log(result);
