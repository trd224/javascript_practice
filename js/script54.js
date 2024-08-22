const employees = [
  { id: 1, name: 'Alice', department: 'Engineering', salary: 90000 },
  { id: 2, name: 'Bob', department: 'HR', salary: 110000 },
  { id: 3, name: 'Charlie', department: 'Engineering', salary: 120000 },
  { id: 4, name: 'David', department: 'Design', salary: 70000 },
  { id: 5, name: 'Eve', department: 'HR', salary: 75000 },
  { id: 6, name: 'Frank', department: 'Engineering', salary: 110000 },
  { id: 7, name: 'Grace', department: 'Design', salary: 80000 },
  { id: 8, name: 'Hank', department: 'Engineering', salary: 95000 },
];


//Group Employees by Department: Create an object where each key is a department name and the value is an array of employee objects belonging to that department.


const groupedByDepartment = employees.reduce((acc, item) =>{
  if(!acc[item.department]){
    acc[item.department] = [];
  }
  acc[item.department].push(item);
  return acc;
} ,{})

//console.log(groupedByDepartment);
/////////////////////////////////////////////////////////////////////////////////

//Calculate Average Salary by Department: For each department, compute the average salary of its employees.

const avgSalaryByDept = employees.reduce((acc, item) => {
  if(!acc[item.department]){
    acc[item.department] = {totalSalary: 0, count: 0};
  }
  acc[item.department].totalSalary += item.salary;
  acc[item.department].count += 1;
  return acc;
},{})


for(let key in avgSalaryByDept){
  avgSalaryByDept[key] = avgSalaryByDept[key].totalSalary / avgSalaryByDept[key].count
}
//console.log(avgSalaryByDept)

/////////////////////////////////////////////////////////////////////////////////

//List Departments with Employees Above a Certain Salary: Return an array of department names where at least one employee has a salary above a given threshold.

const groupedByDepartment2 = employees.reduce((acc, item) =>{
  if(!acc[item.department]){
    acc[item.department] = [];
  }
  acc[item.department].push(item);
  return acc;
} ,{})

const arr = [];

for(let key in groupedByDepartment2){
 // console.log(groupedByDepartment2[key])
  const fl = groupedByDepartment2[key].filter(item => item.salary > 100000)
  //console.log(fl);
  if(fl.length > 0){
    arr.push(key);
  }
}

console.log(arr)

///////////////////////////////////////////////////////////////////////////////////////

//Identify Top N Salaries Across All Departments: Return the top N salaries across all employees, along with the employee name and department.


employees.sort((a,b) => b.salary - a.salary);
//console.log(employees);

const sliced = employees.slice(0,3);
console.log(sliced)

