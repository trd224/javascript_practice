// You are given an array of objects representing students. Each student object contains the properties id, 
//name, grades, and age. The grades property is an array of numbers representing the grades the student has 
//received. Write a function that processes this array and returns an object summarizing the following information:

// The average grade of all students.
// The highest grade achieved by any student.
// The student with the highest average grade.
// The average age of students.

// const students = [
//   { id: 1, name: 'Alice', grades: [85, 90, 92], age: 20 },
//   { id: 2, name: 'Bob', grades: [78, 82, 89], age: 21 },
//   { id: 3, name: 'Charlie', grades: [95, 88, 94], age: 22 },
//   { id: 4, name: 'David', grades: [70, 75, 80], age: 23 },
//   { id: 5, name: 'Eve', grades: [88, 92, 95], age: 20 }
// ];

// output
// {
//   averageGrade: 86.2,
//   highestGrade: 95,
//   studentWithHighestAverage: { id: 3, name: 'Charlie', grades: [95, 88, 94], age: 22, averageGrade: 92.33 },
//   averageAge: 21.2
// }

//---------------------------------------------

const students = [
    { id: 1, name: 'Alice', grades: [85, 90, 92], age: 20 },
    { id: 2, name: 'Bob', grades: [78, 82, 89], age: 21 },
    { id: 3, name: 'Charlie', grades: [95, 88, 94], age: 22 },
    { id: 4, name: 'David', grades: [70, 75, 80], age: 23 },
    { id: 5, name: 'Eve', grades: [88, 92, 95], age: 20 }
  ];
  
  // output
  // {
  //   averageGrade: 86.2,
  //   highestGrade: 95,
  //   studentWithHighestAverage: { id: 3, name: 'Charlie', grades: [95, 88, 94], age: 22, averageGrade: 92.33 },
  //   averageAge: 21.2
  // }
  
  const result = {
    averageGrade: 0,
    highestGrade: Infinity,
    studentWithHighestAverage: {},
    averageAge: 0
  }
  
  
  students.forEach(student => {
    student['avgGrade'] = 0;
    let highestGrade = 0;
    student.grades.forEach(grade => {
      student['avgGrade'] += grade / student.grades.length;
  
      if(grade > highestGrade){
        highestGrade = grade;
      }
    })
  
    result.averageGrade += student.avgGrade / students.length;
    result.highestGrade = highestGrade;
  
    result.studentWithHighestAverage = students.find(student => student.grades.includes(result.highestGrade))
    result.averageAge += student.age / students.length;
   
  })
  
  
  console.log(students)
  console.log(result);
  
  
