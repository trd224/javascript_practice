// Question:
// You are given an array of objects representing employees in a company. Each employee object has the following properties:

// id (number): A unique identifier for the employee.
// name (string): The name of the employee.
// department (string): The department where the employee works.
// salary (number): The salary of the employee.
// managerId (number or null): The ID of the employee's manager (null if they have no manager).
// Write a function analyzeEmployees that takes this array as input and returns an object with the following properties:

// totalEmployees: The total number of employees.
// averageSalary: The average salary of all employees.
// employeesByDepartment: An object where the keys are department names and the values are arrays of employee names in that department.
// employeesUnderManager: An object where the keys are manager names and the values are arrays of employee names managed by that manager.
// highestSalaryEmployee: The employee object with the highest salary. If there are multiple employees with the same highest salary, return the one that appears first in the array.

// const employees = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     department: "Engineering",
//     salary: 120000,
//     managerId: null
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     department: "Engineering",
//     salary: 90000,
//     managerId: 1
//   },
//   {
//     id: 3,
//     name: "Charlie Davis",
//     department: "HR",
//     salary: 60000,
//     managerId: null
//   },
//   {
//     id: 4,
//     name: "Dana Wilson",
//     department: "HR",
//     salary: 55000,
//     managerId: 3
//   },
//   {
//     id: 5,
//     name: "Eve Clark",
//     department: "Engineering",
//     salary: 95000,
//     managerId: 1
//   }
// ];


// output:
// {
//   totalEmployees: 5,
//   averageSalary: 84000,
//   employeesByDepartment: {
//     Engineering: ["Alice Johnson", "Bob Smith", "Eve Clark"],
//     HR: ["Charlie Davis", "Dana Wilson"]
//   },
//   employeesUnderManager: {
//     "Alice Johnson": ["Bob Smith", "Eve Clark"],
//     "Charlie Davis": ["Dana Wilson"]
//   },
//   highestSalaryEmployee: {
//     id: 1,
//     name: "Alice Johnson",
//     department: "Engineering",
//     salary: 120000,
//     managerId: null
//   }
// }

//-------------------------------------------------------------------------------------

const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Engineering",
    salary: 120000,
    managerId: null
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Engineering",
    salary: 90000,
    managerId: 1
  },
  {
    id: 3,
    name: "Charlie Davis",
    department: "HR",
    salary: 60000,
    managerId: null
  },
  {
    id: 4,
    name: "Dana Wilson",
    department: "HR",
    salary: 55000,
    managerId: 3
  },
  {
    id: 5,
    name: "Eve Clark",
    department: "Engineering",
    salary: 95000,
    managerId: 1
  }
];


//first solution

// const result = {
//   totalEmployees: 0,
//   averageSalary: 0,
//   employeesByDepartment: {},
//   employeesUnderManager: {},
//   highestSalaryEmployee: {}
// }

// result.totalEmployees = employees.length;
// result.averageSalary = employees.reduce((acc,initValue) => acc + initValue.salary, 0) / employees.length;
// result.highestSalaryEmployee = employees.reduce((acc, initValue) => Math.max(acc, initValue.salary), -Infinity);

// employees.forEach(emp => {
//   if(!result.employeesByDepartment[emp.department]){
//     result.employeesByDepartment[emp.department] = [];
//   }
//   result.employeesByDepartment[emp.department] = employees.filter(item => item.department == emp.department).map(e => e.name)

  
// })

// if(managerObj){
//   if(!result.employeesUnderManager[managerObj.name]){
//     result.employeesUnderManager[managerObj.name] = [];
//   }
//   result.employeesUnderManager[managerObj.name].push(employ.name)
// }

// result.employeesUnderManager = employees.reduce((acc, emp) => {
//   //console.log(acc)
//   if (emp.managerId !== null) {
//     const manager = employees.find(manager => manager.id === emp.managerId);
//     console.log(manager)
//     if (manager) {
//       if (!acc[manager.name]) {
//         acc[manager.name] = [];
//       }
//       acc[manager.name].push(emp.name);
//     }
//   }
//   return acc;
// }, {});

// console.log(result);


//-------------------------------------------------------------------------------------------
//second solution

const result = {
  totalEmployees: 0,
  averageSalary: 0,
  employeesByDepartment: {},
  employeesUnderManager: {},
  highestSalaryEmployee: {}
};

let highestSalary = 0;
result.totalEmployees = employees.length;

employees.forEach(employ => {
  result.averageSalary += employ.salary / employees.length;
  if(!result.employeesByDepartment[employ.department]){
    result.employeesByDepartment[employ.department] = [];
  }
  result.employeesByDepartment[employ.department].push(employ.name)

  const managerObj = employees.find(manager => {
    return manager.id == employ.managerId
  })
  console.log(managerObj);
  if(managerObj){
    if(!result.employeesUnderManager[managerObj.name]){
      result.employeesUnderManager[managerObj.name] = [];
    }
    result.employeesUnderManager[managerObj.name].push(employ.name)
  }

  if(employ.salary > highestSalary){
    highestSalary = employ.salary;
    result.highestSalaryEmployee = employ
  }
 
  
})

console.log(result);


