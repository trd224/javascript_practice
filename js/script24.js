// You are given an array of objects, where each object represents a student with a name and a score. Write a 
// function topStudents(students, n) that returns the top n students based on their scores. If two students 
// have the same score, they should be ordered by their names alphabetically.

const students = [
  { name: 'John', score: 90 },
  { name: 'Bob', score: 85 },
  { name: 'Alice', score: 89 },
  { name: 'David', score: 80 },
  { name: 'Charlie', score: 90 },
];


students.sort((a,b) => {
  if(b.score === a.score){
    return a.name.localeCompare(b.name);
  }
  return b.score - a.score;
});


const newArray = students.slice(0, 3);

console.log(newArray);

