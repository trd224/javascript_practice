// Question:
// Write a function chunkArray that takes an array and a number size, and returns an array 
// of sub-arrays, where each sub-array has at most size elements.

const arr = [1, 2, 3, 4, 5, 6, 7];

function chunkArray(array, size) {
    const output = [];
    for(let i = 0; i < array.length; i += size){
        let arrSlice = array.slice(i, i + size);
        output.push(arrSlice)
    }
    return output;
}

const result = chunkArray(arr, 3);
console.log(result);
// Output: [[1, 2, 3], [4, 5, 6], [7]]
