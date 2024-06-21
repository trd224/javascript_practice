// You are given a string containing words separated by spaces. Write a function reverseWords(str) that reverses 
// the order of the words in the string while maintaining the order of characters within each word.

// const str = "hello world from JavaScript";

// output: "JavaScript from world hello"

//-------------------------------------------------------------

const str = "hello world from JavaScript";

const result = str.split(" ").reverse().join(" ");
console.log(result);

