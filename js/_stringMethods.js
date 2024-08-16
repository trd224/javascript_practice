
//examples
var str = "Hello, my my dear!";


str.charAt()
str.charCodeAt()
str.concat()
str.includes()
str.startsWith()
str.endsWith()
str.indexOf()
str.lastIndexOf()
str.localeCompare()
str.match()
str.matchAll()
str.normalize()
str.padEnd();
str.padStart()
str.repeat()
str.replace()
str.replaceAll()
str.search()
str.slice()
str.split()
str.substring()
str.toLowerCase()
str.toUpperCase()
str.toString()
str.trim()
str.trimEnd()
str.trimStart()
str.valueOf()






// charAt(index): Returns the character at the specified index.
// charAt()
console.log("charAt():", str.charAt(0)); // Output: "H"

// charCodeAt(index): Returns the Unicode value of the character at the specified index.
// charCodeAt()
console.log("charCodeAt():", str.charCodeAt(7)); // Output: 109 (Unicode value of 'm')

// concat(str1, str2, ...): Combines one or more strings.
// concat()
console.log("concat():", str.concat(" How are you?")); // Output: "   Hello, my dear!    How are you?"

// includes(searchString, position): Determines whether a string contains the specified characters.
// includes()
console.log("includes():", str.includes("my")); // Output: true

// startsWith(searchString, position): Determines whether a string begins with the characters of a specified string.
// startsWith()
console.log("startsWith():", str.startsWith("   ")); // Output: true

// endsWith(searchString, length): Determines whether a string ends with the characters of a specified string.
// endsWith()
console.log("endsWith():", str.endsWith("dear!")); // Output: true

// indexOf(searchValue, fromIndex): Returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex.
// indexOf()
console.log("indexOf():", str.indexOf("my")); // Output: 9

// lastIndexOf(searchValue, fromIndex): Returns the index within the calling string object of the last occurrence of the specified value, searching backwards from fromIndex.
// lastIndexOf()
console.log("lastIndexOf():", str.lastIndexOf("my")); // Output: 9

// localeCompare(compareString): Compares two strings in the current locale.
// localeCompare()
console.log("localeCompare():", str.localeCompare("Hello")); // Output: 1

// match(regexp): Retrieves the matches when matching a string against a regular expression.
// match()
console.log("match():", str.match(/my/g)); // Output: ["my"]
console.log("match():", str.match(/my/)); // Output: ['my', index: 8, input: 'Hello , my  dear!', groups: undefined
console.log("match():", str.match(/my|dear/g)); //Output: ['my', 'dear']

// matchAll(regexp): Returns an iterator of all results matching a string against a regular expression, including capturing groups.
// matchAll()
console.log("matchAll():", [...str.matchAll(/my/g)]); // Output: Array with one element

const iterator =  str.matchAll(/my|dear/g);

for (const item of iterator) {
  console.log(item);
}

// normalize(form): Returns the Unicode Normalization Form of the string.
// normalize()
console.log("normalize():", str.normalize()); // Output: "   Hello, my dear!   "

// padEnd(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.
// padEnd()
console.log("padEnd():", str.padEnd(25, "-")); // Output: "   Hello, my dear!   ---"

// padStart(targetLength, padString): Pads the current string with another string until the resulting string reaches the given length.
// padStart()
console.log("padStart():", str.padStart(25, "-")); // Output: "---   Hello, my dear!   "

// repeat(count): Returns a new string with a specified number of copies of the string it was called on.
// repeat()
console.log("repeat():", str.repeat(2)); // Output: "   Hello, my dear!      Hello, my dear!   "

// replace(searchValue, replaceValue): Searches a string for a specified value or a regular expression, and returns a new string where the specified values are replaced.
// replace()
console.log("replace():", str.replace("my", "our")); // Output: "   Hello, our dear!   "

// replaceAll(searchValue, replaceValue): Returns a new string with all matches of a pattern replaced by a replacement.
// replaceAll()
console.log("replaceAll():", str.replaceAll("my", "our")); // Output: "   Hello, our dear!   "

// search(regexp): Executes a search for a match between a regular expression and this String object.
// search()
console.log("search():", str.search("my")); // Output: 9

// slice(beginIndex, endIndex): Extracts a section of a string and returns it as a new string.
// slice()
console.log("slice():", str.slice(3, 8)); // Output: "Hello"

// split(separator, limit): Splits a string into an array of substrings.
// split()
console.log("split():", str.split(",")); // Output: ["   Hello", " my dear!   "]

// substring(indexStart, indexEnd): Returns the part of the string between the start and end indexes, or to the end of the string.
// substring()
console.log("substring():", str.substring(3, 8)); // Output: "Hello"

// toLocaleLowerCase([locale, locales]): Returns a new string with all uppercase characters converted to lowercase, using the host's locale.
// toLocaleLowerCase()
console.log("toLocaleLowerCase():", str.toLocaleLowerCase()); // Output: "   hello, my dear!   "

// toLocaleUpperCase([locale, locales]): Returns a new string with all lowercase characters converted to uppercase, using the host's locale.
// toLocaleUpperCase()
console.log("toLocaleUpperCase():", str.toLocaleUpperCase()); // Output: "   HELLO, MY DEAR!   "

// toLowerCase(): Returns the calling string value converted to lowercase.
// toString(): Returns a string representing the specified object.
// toLowerCase()
console.log("toLowerCase():", str.toLowerCase()); // Output: "   hello, my dear!   "

// toUpperCase(): Returns the calling string value converted to uppercase.
// toUpperCase()
console.log("toUpperCase():", str.toUpperCase()); // Output: "   HELLO, MY DEAR!   "

// toString()
console.log("toString():", str.toString()); // Output: "   Hello, my dear!   "

// trim(): Removes whitespace from both ends of a string.
// trim()
console.log("trim():", str.trim()); // Output: "Hello, my dear!"

// trimEnd(): Removes whitespace from the end of a string.
// trimEnd()
console.log("trimEnd():", str.trimEnd()); // Output: "   Hello, my dear!"

// trimStart(): Removes whitespace from the beginning of a string.
// trimStart()
console.log("trimStart():", str.trimStart()); // Output: "Hello, my dear!   "

// valueOf(): Returns the primitive value of the specified object.
// valueOf()
console.log("valueOf():", str.valueOf()); // Output: "   Hello, my dear!   "




//question: differance between search() and indexOf() // search() is powerful
//question: differance between slice() and subString() // slice() is powerful
//question: differance between toLowerCase() and toLocalLowerCase() 



