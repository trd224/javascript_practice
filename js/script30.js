// Question:

// You are given an array of objects representing students and their scores in different subjects. Each student object 
// has the following structure:
// Write a function processStudents that returns an array of student names who have an average score of 80 or above.
//  You should use map, filter, and reduce array methods to solve this problem.

//  Requirements:

// Use map to create an array of student objects that include their name and average score.
// Use filter to extract only the students with an average score of 80 or above.
// Use reduce to calculate the average score for each student.

//--------------------------------------------------

const students = [
    {
      name: 'Alice',
      scores: { math: 90, english: 80, science: 85 }
    },
    {
      name: 'Bob',
      scores: { math: 70, english: 85, science: 80 }
    },
    {
      name: 'Charlie',
      scores: { math: 85, english: 90, science: 95 }
    },
    {
      name: 'David',
      scores: { math: 60, english: 75, science: 70 }
    }
  ];

  
  function processStudents(students){
    return students.map(student => {
        const scores = Object.values(student.scores);
        const avg = scores.reduce((acc, score) => acc + score, 0) / scores.length;
        return {name: student.name, average: avg}
    })
    .filter(student => student.average >= 80)
    .map(n => n.name)
    
  }

  const result = processStudents(students);
  console.log(result);