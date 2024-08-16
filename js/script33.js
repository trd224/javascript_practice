// decodeMessage problem using basic string manipulation techniques without regular expressions:

function decodeMessage(encoded) {
  let decoded = '';
  for (let i = 0; i < encoded.length; i++) {
      let char = encoded[i];
      let count = Number(encoded[i + 1]);
      decoded += char.repeat(count);
  }
  return decoded;
}

// Test cases
console.log(decodeMessage("a2b10c1")); // "aabbbcc"
console.log(decodeMessage("x5y2z3")); // "xxxxxyyzzz"
console.log(decodeMessage("p1q4r2")); // "pqqqqrr"
