let employees = [
    { id: 1, name: "Nikhil", salary: 30000 },
    { id: 2, name: "Rahul", salary: 45000 },
    { id: 3, name: "Priya", salary: 50000 }
];
// Using for...of:

// Print:

// Nikhil
// Rahul
// Priya
console.log("Employees Names")
for(let emp of employees)
{
    console.log(emp.name);
}

// Using the same employees array:

// Print:

// Nikhil - 30000
// Rahul - 45000
// Priya - 50000
console.log("Employees with salary")
for(let emp of employees)
    {
        console.log(emp.name,"-",emp.salary);
    }
// Using the same array:

// Print only employees whose salary is greater than 40000.

// Expected Output

// Rahul
// Priya
console.log("Only employees whose salary is greater then 40000")
for(let i:number = 0; i<employees.length;i++)
    {
        if(employees[i].salary>40000)
            {
                console.log(employees[i].name);
            }

    }

let users = [
    { id: 1, username: "nikhil", isActive: true },
    { id: 2, username: "rahul", isActive: false },
    { id: 3, username: "priya", isActive: true }
];

// Using a loop:

// Print only active users.
// Count how many active users there are.
// Print the user whose id is 2.

console.log("Active Users:")
for(let user of users)
    {
        if(user.isActive == true)
            {
                console.log(user)
            }
    }
console.log("Count of Active Users:")
let count = 0 
for(let user of users)
    {
        if(user.isActive == true)
            {
                count += 1;
            }
    }
console.log("Count of Active Users:", count);
console.log("User whose id is 2:")
for(let user of users)
    {
        if(user.id == 2)
            {
                console.log(user)
            }
    }
