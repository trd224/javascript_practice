// Question:
// Given an array of intervals, write a function mergeIntervals that merges overlapping intervals.

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];

function mergeIntervals(intervals){
    intervals.sort((a,b) => a[0] - b[0]);

    for(let i = 0; i < intervals.length - 1; i++){
      const ar = [];
      if(intervals[i][1] > intervals[i+1][0]){
        ar.push(intervals[i][0]);
        ar.push(intervals[i+1][1]);
        
      }
      r.push(intervals[i + 1]);
    }
    
    return r;
}

const result = mergeIntervals(intervals);
console.log(result);
// Output: [[1, 6], [8, 10], [15, 18]]
