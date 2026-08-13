"use strict";
// 🟢 Level 1 — Basic Generics
// Program 1 — Identity
// Create a generic function:
function Identity(name) {
    return name;
}
console.log(Identity("Nikhil"));
// Program 2 — First Element
// Create:
function getfirst(items) {
    return items[0];
}
let first = getfirst([10, 20, 30]);
console.log(first);
// Program 3 — Last Element
// Create:
function lastElement(items) {
    return items[items.length - 1];
}
let last = lastElement(["C#", "TypeScript", "Vue"]);
console.log(last);
// Expected:
// 30
// Vue
