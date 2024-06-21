// Question
// You are given an array of objects representing employees. Each employee object contains the properties 
// id, name, department, and salary. Write a function that returns an object where the keys are department names 
// and the values are objects containing the total number of employees and the average salary for each department.

// const employees = [
//   { id: 1, name: 'Alice', department: 'Engineering', salary: 70000 },
//   { id: 2, name: 'Bob', department: 'Engineering', salary: 80000 },
//   { id: 3, name: 'Charlie', department: 'HR', salary: 50000 },
//   { id: 4, name: 'David', department: 'HR', salary: 60000 },
//   { id: 5, name: 'Eve', department: 'Sales', salary: 55000 },
//   { id: 6, name: 'Frank', department: 'Sales', salary: 65000 }
// ];


// output
// {
//   'Engineering': { totalEmployees: 2, averageSalary: 75000 },
//   'HR': { totalEmployees: 2, averageSalary: 55000 },
//   'Sales': { totalEmployees: 2, averageSalary: 60000 }
// }

//--------------------------------------------------------------------

const employees = [
  { id: 1, name: 'Alice', department: 'Engineering', salary: 70000 },
  { id: 2, name: 'Bob', department: 'Engineering', salary: 80000 },
  { id: 3, name: 'Charlie', department: 'HR', salary: 50000 },
  { id: 4, name: 'David', department: 'HR', salary: 60000 },
  { id: 5, name: 'Eve', department: 'Sales', salary: 55000 },
  { id: 6, name: 'Frank', department: 'Sales', salary: 65000 }
];



const result = {};

employees.forEach(emp => {
  const department = emp.department;
  console.log(department)
  
  if (!result[department]) {
    result[department] = { totalEmployees: 0, totalSalary: 0 };
  }

  result[department].totalEmployees += 1;
  result[department].totalSalary += emp.salary;
});

// Calculate the average salary for each department

for(let key in result){
  
  const d = result[key];
  console.log(d)
  d.averageSalary = d.totalSalary / d.totalEmployees;
  delete d.totalSalary;
}

console.log(result)
