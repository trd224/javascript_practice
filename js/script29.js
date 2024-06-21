Question:

// You are given an array of meeting time intervals where each interval consists of start and end times. Write a 
// function canAttendMeetings(intervals) that determines if a person could attend all meetings.

// canAttendMeetings([[0, 30], [5, 10], [15, 20]]); // Output: false (There is an overlap between [0, 30] and [5, 10])
// canAttendMeetings([[7, 10], [2, 4]]); // Output: true (No overlap between intervals)

//----------------------------------------------

function canAttendMeetings(intervals) {
  if (intervals.length <= 1) {
      return true; // If there's only one or zero intervals, no overlap can occur
  }

  // Sort the intervals based on their start times
  intervals.sort((a, b) => a[0] - b[0]);

  // Check for overlaps between adjacent intervals
  for (let i = 0; i < intervals.length - 1; i++) { // here - 1 is given because i + 1 not present for last index
      // If the end time of the current interval is greater than or equal to the start time of the next interval, there's an overlap
      if (intervals[i][1] > intervals[i + 1][0]) {
          return false; // Overlap found, cannot attend all meetings
      }
  }

  return true; // No overlaps found, can attend all meetings
}

// Test cases
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // Output: false
console.log(canAttendMeetings([[7, 10], [2, 4]])); // Output: true

