"use strict";
let emps = [
    { id: 1, name: "Nikhil", salary: 30000, department: "IT", isActive: true },
    { id: 2, name: "Rahul", salary: 45000, department: "HR", isActive: false },
    { id: 3, name: "Priya", salary: 60000, department: "IT", isActive: true },
    { id: 4, name: "Amit", salary: 25000, department: "Finance", isActive: true }
];
// Challenge 1
// Return only employees whose salary is greater than ₹40,000.
console.log("Employees salary greater than 40000 are as follows:");
let filtered = emps.filter(emp => emp.salary > 40000);
console.log(filtered);
console.log("Employees whose department is IT are as follows:");
let filteredIT = emps.filter(emp => emp.department = "IT");
console.log(filteredIT);
console.log("Active employees are as follows:");
let filteredActive = emps.filter(emp => emp.isActive = true);
console.log(filteredActive);
