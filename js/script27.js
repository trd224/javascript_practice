// To find duplicates in an array


function findDuplicates(nums) {
  const occurrences = {};
  const duplicates = [];

  
  for (const num of nums) {
     
      if (occurrences[num]) {
          duplicates.push(num);
      } 
    
         
       occurrences[num] = true;
      
  }

  return duplicates;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const duplicates = findDuplicates(nums);
console.log(duplicates); // Output: [2, 3]
