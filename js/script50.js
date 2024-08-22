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
   intervals.sort((a,b) => a[0] - b[0]);
   const rs = [];
   const r = [];
   for(let i = 0; i < intervals.length - 1; i++){
    if(intervals[i][1] > intervals[i+1][0]){
      r.push(intervals[i][0]);
      r.push(intervals[i+1][1])
      rs.push(r)
    }
    else{
      rs.push(intervals[i+1])
     }
   }
   
   
   console.log(rs);
   
}

const result = mergeIntervals(intervals);
console.log(result);
// Output: [[1, 6], [8, 10], [15, 18]]
