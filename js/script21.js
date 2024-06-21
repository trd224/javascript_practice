// Question:
// You are given a string containing parentheses, brackets, and braces. Write a function isValid(s) to determine if the input string is valid according to the following rules:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// An empty string is also considered valid.
// The input string will only contain characters '(', ')', '[', ']', '{', and '}'.

// Write a function isValid(s) that takes a string s and returns true if the string is valid, and false otherwise.

// console.log(isValid("()"));              // Output: true
// console.log(isValid("()[]{}"));          // Output: true
// console.log(isValid("(]"));              // Output: false
// console.log(isValid("([)]"));            // Output: false
// console.log(isValid("{[]}"));            // Output: true
// console.log(isValid(""));                // Output: true

//-------------------------------------------------

function isValid(s) {
  if(s.length <= 1 || s.length % 2 !== 0){
    return false
  }


  const stack = [];

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } 
    else {
      const top = stack.pop();
      if ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{')) {
        return false;
      }
    }
  }

  
  return true;
}

// Example usage
console.log(isValid("()"));              // Output: true
console.log(isValid("()[]{}"));          // Output: true
console.log(isValid("(]"));              // Output: false
console.log(isValid("([)]"));            // Output: false
console.log(isValid("{[]}"));            // Output: true
console.log(isValid(""));                // Output: true

