"use strict";
// Challenge 1: Employee Interface
let emp = {
    id: 1,
    name: "Nikhil",
    salary: 50000,
    department: "IT",
    isActive: true
};
let assignedEmployee = emp;
console.log(assignedEmployee);
let product1 = {
    id: 1,
    name: "CRM",
    price: 1000,
    category: "Software",
    inStock: true
};
let product2 = {
    id: 2,
    name: "ERP",
    price: 300,
    category: "Software",
    inStock: true
};
let obj1 = product1;
let obj2 = product2;
console.log("Product 1:", obj1);
console.log("Product 2:", obj2);
let empobj1 = {
    id: 1,
    name: "Nikhil Lalwani",
    salary: 30000,
};
let empobj2 = {
    id: 2,
    name: "Rachana Parmar",
    salary: 25000,
    experience: 1
};
let empobj1result = empobj1;
let empobj2result = empobj2;
console.log("Employee 1:", empobj1result);
console.log("Employee 2:", empobj2result);
;
let objem = {
    id: 1,
    name: "Nikhil"
};
let empobj = objem;
