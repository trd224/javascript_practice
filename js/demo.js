// Question:
// Given an array of intervals, write a function mergeIntervals that merges overlapping intervals.

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];

function mergeIntervals(intervals){
   if(intervals.length < 1){
      return []; 
   }

   for(let i = 0; i < intervals.length - 1; i++){
    if(intervals[i][1] > intervals[i+1][0]){
      
    }
   }
}

const result = mergeIntervals(intervals);
console.log(result);
// Output: [[1, 6], [8, 10], [15, 18]]
