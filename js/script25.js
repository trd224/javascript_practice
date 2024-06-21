// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and 
// backward (ignoring spaces, punctuation, and capitalization). For example, "racecar" and "level" are 
// palindromes.

function isPalindrome(str) {
  // Reverse the input string
  const reversedStr = str.split('').reverse().join('');
  // Check if the input string is equal to its reverse
  return str === reversedStr;
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello'));   // Output: false