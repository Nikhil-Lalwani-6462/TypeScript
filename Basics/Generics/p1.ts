// 🟢 Level 1 — Basic Generics
// Program 1 — Identity

// Create a generic function:

function Identity<T>(name : T) : T
{
    return name;
}
console.log(Identity<string>("Nikhil"))

// Program 2 — First Element

// Create:

function getfirst<T>(items : T[]) : T
{
    return items[0];
}
let first = getfirst<number>([10,20,30]);
console.log(first)

// Program 3 — Last Element

// Create:

function lastElement<T>(items : T[]):T
{
    return items[items.length-1]
}
let last = lastElement<string>(["C#","TypeScript","Vue"]);
console.log(last)


// Expected:

// 30
// Vue