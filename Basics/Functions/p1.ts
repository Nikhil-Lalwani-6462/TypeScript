// 1. Basic Function

// Create a function called welcome() that prints:

function printWelcome()
{
    console.log("Welcome")
}
printWelcome();

// 2. Function with Parameters

// Create a function:

function greet(name : string)
{
    console.log(name)
}
greet("Nikhil");

// 3. Function with Multiple Parameters

// Create a function:

function calculateSalary(bonus: number, salary: number){
    let total:number = bonus + salary;
    console.log(total)

}
calculateSalary(9000, 20000)

// 4. Return Value + Return Type

// Create:
function calculateAge(birthyear : number):number
{
    let age = new Date().getUTCFullYear() - birthyear;
    return age;
}
let Age = calculateAge(1999)
console.log("Age :", Age)

// 5. Optional Parameter

// Create:
function greetUser(name: string, city? : string)
{
    console.log("Name : ", name , city != "null" ? ", City:" + city : "")
}
greetUser("Nikhil")
greetUser("Rachana","Ahmedabad")

// 6. Default Parameter

// Create:

function calculateDiscount(price: number, discount : number = 10)
{
    console.log("After Discount:", price - (price * discount/100))

}
calculateDiscount(54000);
calculateDiscount(54000,20);

interface Employee
{
 id:number,
 name:string,
 designation:string,
 dept:string   
}

function displayEmployee(employee:Employee)
{
    
    console.log("Employee:")
    console.log(employee)

}
let emp : Employee = {
    id:1,
    name :"Nikhil",
    designation : "Software Developer",
    dept : "IT"
    
};
displayEmployee(emp);

// 9. Function with Array

// Given:

let numbers = [10, 20, 30, 40, 50];

function displayNumbers(numbers : number[], index:number):number
{
    return numbers[index];
}
for(let index:number = 0; index<numbers.length;index ++)
    {
        let num = displayNumbers(numbers,index)
        console.log(num)
    }



