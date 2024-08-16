//Question:
// Write a function pipeline that takes an initial value and an array of functions, and returns the 
// result of applying each function in sequence to the value.

// const add = x => x + 1;
// const multiply = x => x * 2;

// const result = pipeline(5, [add, multiply, add]);
// console.log(result); // Output: 13 (5 + 1 = 6, 6 * 2 = 12, 12 + 1 = 13)



const pipeline = (initialValue, functions) => {
    console.log(initialValue);
    console.log(functions);
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };
  
  const add = x => x + 1;
  const multiply = x => x * 2;
  
  const result = pipeline(5, [add, multiply, add]);
  console.log(result); // Output: 13
  
