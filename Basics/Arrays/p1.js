"use strict";
// let employees = [
//     { id: 1, name: "Nikhil", salary: 30000, department: "IT", isActive: true },
//     { id: 2, name: "Rahul", salary: 45000, department: "HR", isActive: false },
//     { id: 3, name: "Priya", salary: 60000, department: "IT", isActive: true },
//     { id: 4, name: "Amit", salary: 25000, department: "Finance", isActive: true }
// ];
// map() Challenges
let employees = [
    { id: 1, name: "Nikhil", salary: 30000, department: "IT", isActive: true },
    { id: 2, name: "Rahul", salary: 45000, department: "HR", isActive: false },
    { id: 3, name: "Priya", salary: 60000, department: "IT", isActive: true },
    { id: 4, name: "Amit", salary: 25000, department: "Finance", isActive: true }
];
// Challenge 1
// Create an array containing only employee name
let names = employees.map(employee => employee.name);
console.log(names);
// Challenge 2
// Increase every employee's salary by ₹10,000.
let updated = employees.map(employee => ({
    id: employee.id,
    name: employee.name,
    salary: employee.salary + 10000,
    isActivev: employee.isActive
}));
console.log(updated);
// Challenge 3
// Create an array like this:
// [
//   "Nikhil - IT",
//   "Rahul - HR",
//   "Priya - IT",
//   "Amit - Finance"
//]
let newvar = employees.map(employee => employee.name + "-" + employee.department);
console.log(newvar);
