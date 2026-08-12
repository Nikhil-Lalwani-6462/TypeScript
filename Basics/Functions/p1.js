"use strict";
// 1. Basic Function
// Create a function called welcome() that prints:
function printWelcome() {
    console.log("Welcome");
}
printWelcome();
// 2. Function with Parameters
// Create a function:
function greet(name) {
    console.log(name);
}
greet("Nikhil");
// 3. Function with Multiple Parameters
// Create a function:
function calculateSalary(bonus, salary) {
    let total = bonus + salary;
    console.log(total);
}
calculateSalary(9000, 20000);
// 4. Return Value + Return Type
// Create:
function calculateAge(birthyear) {
    let age = new Date().getUTCFullYear() - birthyear;
    return age;
}
let Age = calculateAge(1999);
console.log("Age :", Age);
// 5. Optional Parameter
// Create:
function greetUser(name, city) {
    console.log("Name : ", name, city != "null" ? ", City:" + city : "");
}
greetUser("Nikhil");
greetUser("Rachana", "Ahmedabad");
// 6. Default Parameter
// Create:
function calculateDiscount(price, discount = 10) {
    console.log("After Discount:", price - (price * discount / 100));
}
calculateDiscount(54000);
calculateDiscount(54000, 20);
function displayEmployee(employee) {
    console.log("Employee:");
    console.log(employee);
}
let emp = {
    id: 1,
    name: "Nikhil",
    designation: "Software Developer",
    dept: "IT"
};
displayEmployee(emp);
// 9. Function with Array
// Given:
let numbers = [10, 20, 30, 40, 50];
function displayNumbers(numbers, index) {
    return numbers[index];
}
for (let index = 0; index < numbers.length; index++) {
    let num = displayNumbers(numbers, index);
    console.log(num);
}
