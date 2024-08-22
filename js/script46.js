// Question:
// Write a function partitionArray that takes an array and a callback function, and returns two 
// arrays: one with elements that satisfy the callback function and one with elements that don't.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = num => num % 2 === 0;






function partitionArray(arr, condition){
    const trueArray = [];
    const falseArray = [];
    arr.forEach(item => {
        if(isEven(item)){
            trueArray.push(item);
        }
        else{
            falseArray.push(item);
        }
    })

    return [trueArray, falseArray];
}

const [evens, odds] = partitionArray(arr, isEven);
console.log(evens); // Output: [2, 4, 6, 8]
console.log(odds);  // Output: [1, 3, 5, 7, 9]

