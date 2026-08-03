// Challenge 1: Employee Interface

// Create an interface named Employee with:

// id
// name
// salary
// department
// isActive

// Then create an object that implements it.

interface Employee 
{
    id : number;
    name :string;
    salary : number;
    department : string;
    isActive : boolean;
}

let emp = 
{
    id : 1,
    name: "Nikhil",
    salary : 50000,
    department : "IT",
    isActive : true

};

let assignedEmployee : Employee = emp;
console.log(assignedEmployee);

// Challenge 2: Product Interface

// Create an interface named Product.

// Properties:

// id
// name
// price
// category
// inStock

// Then create two product objects.

interface Product
{
    id : number,
    name: string,
    price: number,
    category: string,
    inStock : boolean
}
let product1 = 
{
    id : 1,
    name : "CRM",
    price : 1000,
    category : "Software",
    inStock : true

}
let product2 = 
{
    id : 2,
    name : "ERP",
    price : 300,
    category : "Software",
    inStock : true
}

let obj1 : Product = product1;
let obj2 : Product = product2;
console.log("Product 1:", obj1);
console.log("Product 2:", obj2);

// Challenge 4 (Optional Property)

// Learn optional properties.
interface Empl
{
    id: number,
    name : string,
    salary : number,
    experience?: number
}
let empobj1 = 
{
    id:1,
    name : "Nikhil Lalwani",
    salary : 30000,
}
let empobj2 = 
{
    id : 2,
    name : "Rachana Parmar",
    salary : 25000,
    experience : 1
}
let empobj1result : Empl = empobj1;
let empobj2result : Empl = empobj2;
console.log("Employee 1:",empobj1result);
console.log("Employee 2:",empobj2result);

// Challenge 5 (Readonly Property)
// Observe the compiler error and understand why it happens.
//Error : Cannot assign to 'id' because it is a read-only property.

interface Emp {
    readonly id : number;
    name: string;
};
let objem ={
    id : 1,
    name : "Nikhil"
} ;
let empobj : Emp = objem
