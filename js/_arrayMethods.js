// Filtering Methods
// Array.prototype.filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// Array.prototype.find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
// Array.prototype.findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
// Array.prototype.findLast(): Returns the value of the last element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
// Array.prototype.findLastIndex(): Returns the index of the last element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
// Array.prototype.some(): Tests whether at least one element in the array passes the test implemented by the provided function. Returns true or false.
// Array.prototype.every(): Tests whether all elements in the array pass the test implemented by the provided function. Returns true or false.


// Transformation Methods
// Array.prototype.map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
// Array.prototype.flatMap(): First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.


// Iteration Methods
// Array.prototype.forEach(): Executes a provided function once for each array element.
// Array.prototype.reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Array.prototype.reduceRight(): Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.


// Searching and Sorting Methods
// Array.prototype.includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Array.prototype.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Array.prototype.lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// Array.prototype.sort(): Sorts the elements of an array in place and returns the sorted array.
// Array.prototype.reverse(): Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.


// Conversion Methods
// Array.prototype.join(): Joins all elements of an array into a string.
// Array.prototype.toString(): Returns a string representing the specified array and its elements.


// Array Creation and Manipulation
// Array.prototype.concat(): Merges two or more arrays and returns a new array.
// Array.prototype.slice(): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// Array.prototype.splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Array.prototype.push(): Adds one or more elements to the end of an array and returns the new length of the array.
// Array.prototype.pop(): Removes the last element from an array and returns that element.
// Array.prototype.shift(): Removes the first element from an array and returns that element.
// Array.prototype.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// Array.prototype.flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Array.prototype.copyWithin(): Shallow copies part of an array to another location in the same array and returns it without modifying its length.
// Array.prototype.fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length).
// Array.prototype.keys(): Returns a new array iterator object that contains the keys for each index in the array.
// Array.prototype.values(): Returns a new array iterator object that contains the values for each index in the array.
// Array.prototype.entries(): Returns a new array iterator object that contains the key/value pairs for each index in the array.


// Utility Methods
// Array.prototype.valueOf(): Returns the primitive value of the specified object.
// Array.prototype.toLocaleString(): Returns a string representing the elements of the array, where the array elements are converted to strings using their toLocaleString methods.

//-------------------------------------------------------------------
//1. Array Filtering
//question: Write a function that takes an array of numbers and returns a new array with only the even number

//solution
// const array = [1,2,3,4,5,6,7,8,9];

// const newArray = array.filter(num => num % 2 == 0)

// console.log(array);
// console.log(newArray);  // output: [2, 4, 6, 8]


//--------------------------------------------------
//2. Array Mapping
//question: Write a function that takes an array of strings and returns a new array with each string converted to uppercase

//solution
// const array = ['hello', 'world'];

// const newArray = array.map(string => string.toUpperCase());

// console.log(array);
// console.log(newArray);  //output: ['HELLO', 'WORLD']

//-----------------------------------------------------
// 3. Array Reducing
// Question: Write a function that takes an array of numbers and returns the sum of all the numbers.

//solution
// const array = [1,2,3,4,5,6,7,8,9,10];
// const newValue = array.reduce((acc, num) => acc + num, 0);

// console.log(array);
// console.log(newValue) //output: 55

//-----------------------------------------------------------
//4. Array Sorting
//Question: Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

// const array = [5,2,8,1,0,25,35,48,12,48,74,21];

// array.sort((a,b) => a - b);

// console.log(array); // output : [0, 1, 2, 5, 8, 12, 21, 25, 35, 48, 48, 74]

//--------------------------------------------------------------
// 5. Array Finding
// Question:
// Write a function that takes an array of numbers and a target number. Return the first number in the array that is 
// greater than the target number. If no such number exists, return null.

// const array = [1,2,3,4,5];
// const targetNum = 3;

// const result = array.find(num => {
//   if(num > targetNum){
//     return num; 
//   }
//   else{
//     return null;
//   }
// })

// console.log(result); // output: 4

//-------------------------------------------------
// 6. Array Flattening
// Question:
// Write a function that takes a nested array of numbers and returns a new array that is a flattened version of the
//  input array.

// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const flatten = (array) => {
//   return array.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       return acc.concat(flatten(value));
//     } 
//     else {
//       return acc.concat(value);
//     }
//   }, []);
// };

// const flattenedArray = flatten(nestedArray);

// console.log(flattenedArray);  //output : [1, 2, 3, 4, 5, 6]

//---------------------------------------------------

// Array.prototype.flat()
//Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const array = [1, 2, [3, 4, [5, 6]]];

// const flatArray = array.flat(2);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

//---------------------------------------------------

//Array.prototype.concat()
//Combines two or more arrays.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const result = array1.concat(array2);

// console.log(result); // output:  [1, 2, 3, 4, 5, 6]

//-----------------------------------------------------
//Array.prototype.every()
// Tests whether all elements in the array pass the test implemented by the provided function.
// check all number is even or not

// const array = [1, 2, 3, 4, 5];

// const result = array.every(num => num % 2 == 0);

// console.log(result); // output : false

//------------------------------------------------------
//Array.prototype.fill()
//Fills all the elements of an array from a start index to an end index with a static value.

// const array = [1, 2, 3, 4, 5];

// array.fill(0, 2, 4); // here=> 0: value, 2: starting index, 4: end index

// console.log(array); // Output: [1, 2, 0, 0, 5]

//------------------------------------------------------
// Array.prototype.filter()
//Creates a new array with all elements that pass the test implemented by the provided function.
// filter even number

// const array = [1, 2, 3, 4, 5];

// const newArray = array.filter(num => num % 2 == 0);

// console.log(newArray); // output: [2, 4]

//------------------------------------------------------
//Array.prototype.find()
//Returns the value of the first element in the array that satisfies the provided testing function.

// const array = [1, 2, 3, 4, 5];
// const value = array.find(num => num % 2 == 0);
// console.log(value)   // output: 2

//-------------------------------------------------------
// Array.prototype.findIndex()
// /Returns the index of the first element in the array that satisfies the provided testing function.

// const array = [1, 2, 3, 4, 5];
// const value = array.findIndex(num => num % 2 == 0);
// console.log(value)   // output: 1

//-------------------------------------------------------
//Array.prototype.forEach()
// Executes a provided function once for each array element.

// const array = [1, 2, 3, 4, 5];
// array.forEach(num => console.log(num * 2));  // Output: 2, 4, 6, 8, 10

//------------------------------------------------------
//Array.prototype.includes()
// /Determines whether an array includes a certain value among its entries

// const array = [1, 2, 3, 4, 5];
// const includesThree = array.includes(3);

// console.log(includesThree); // Output: true

//------------------------------------------------------
// /Array.prototype.indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const array = [1, 2, 3, 3, 4, 5];
// const indexOfThree = array.indexOf(3);
// console.log(indexOfThree); // Output: 2

//-------------------------------------------------------
//Array.prototype.join()
//Joins all elements of an array into a string and returns this string.

// const array = ['a', 'b', 'c'];
// const joined = array.join('-');

// console.log(joined); // Output: 'a-b-c'

//--------------------------------------------------
//Array.prototype.keys()
//Returns a new Array Iterator object that contains the keys for each index in the array.

// const array = ['a', 'b', 'c'];
// const iterator = array.keys();
// for (let key of iterator) {
//   console.log(key);
// }
// // Output: 0, 1, 2

// //--------------------------------------------------
// Array.prototype.lastIndexOf()
// Returns the last index at which a given element can be found in the array, or -1 if it is not present.

// const array = [1, 2, 3, 1, 2, 3];
// const lastIndexOfThree = array.lastIndexOf(3);
// console.log(lastIndexOfThree); // Output: 5

// //--------------------------------------------------
// Array.prototype.map()
// Creates a new array with the results of calling a provided function on every element in the calling array.

// const array = [1, 2, 3];
// const doubled = array.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6]

// //--------------------------------------------------
// Array.prototype.pop()
// Removes the last element from an array and returns that element.

// const array = [1, 2, 3];
// const lastElement = array.pop();
// console.log(lastElement); // Output: 3
// console.log(array); // Output: [1, 2]

// //--------------------------------------------------
// Array.prototype.push()
// Adds one or more elements to the end of an array and returns the new length of the array.

// const array = [1, 2, 3];
// const newLength = array.push(4, 5);
// console.log(newLength); // Output: 5
// console.log(array); // Output: [1, 2, 3, 4, 5]

// //--------------------------------------------------
// Array.prototype.reduce()
// Applies a function against an accumulator and each element in the array to reduce it to a single value.

// const array = [1, 2, 3, 4, 5];
// const sum = array.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// //--------------------------------------------------
// Array.prototype.reduceRight()
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// const array = [1, 2, 3, 4, 5];
// const sum = array.reduceRight((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// //--------------------------------------------------
// Array.prototype.reverse()
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// const array = [1, 2, 3];
// array.reverse();
// console.log(array); // Output: [3, 2, 1]

// //--------------------------------------------------
// Array.prototype.shift()
// Removes the first element from an array and returns that element.

// const array = [1, 2, 3];
// const firstElement = array.shift();
// console.log(firstElement); // Output: 1
// console.log(array); // Output: [2, 3]

// //--------------------------------------------------
// Array.prototype.slice()
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

// const array = [1, 2, 3, 4, 5];
// const sliced = array.slice(1, 3);
// console.log(sliced); // Output: [2, 3]

// //--------------------------------------------------
// Array.prototype.some()
// Tests whether at least one element in the array passes the test implemented by the provided function.

// const array = [1, 2, 3, 4, 5];
// const someEven = array.some(num => num % 2 === 0);
// console.log(someEven);

















