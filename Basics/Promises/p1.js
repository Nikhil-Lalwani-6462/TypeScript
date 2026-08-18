"use strict";
// 🟢 Level 1 — Promise Basics
// Question 1 — Simple Promise
// Create a function:
// function getMessage(): Promise<string>
// It should return a Promise that resolves with:
// "Hello, Nikhil"
// Then use .then() to print the result.
function getMessage() {
    return new Promise((resolve, reject) => {
        resolve("Hello Nikhil");
    });
}
getMessage()
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
// Question 2 — Promise with Delay
// Create:
// function loadData(): Promise<string>
// Use setTimeout() to resolve the Promise after 2 seconds:
// "Data loaded successfully"
// Use .then() to print the result.
function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded Successfully");
        }, 2000);
    });
}
loadData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
// Question 3 — Resolve or Reject
// Create:
// function checkLogin(username: string, password: string): Promise<string>
// Rules:
// username = "admin"
// password = "1234"
// → resolve:
// "Login successful"
// Otherwise → reject:
// "Invalid username or password"
function checkLogin(username, pass) {
    return new Promise((resolve, reject) => {
        if (username == "admin" && pass == "12345") {
            resolve(true);
        }
        else {
            reject(false);
        }
    });
}
checkLogin("admin", "12345")
    .then((data) => {
    if (data == true) {
        console.log("Login Successfull");
    }
    else {
        console.log("Invalid username or password");
    }
})
    .catch((error) => {
    console.log(error);
});
