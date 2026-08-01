// Login Validation ⭐⭐⭐⭐⭐
import promptSync from "prompt-sync";
let prompt = promptSync();
let name = "admin";
let pass = "12345";
let input_name = prompt("Enter your name:");
let input_pass = prompt("Enter your password:");
if (input_name.trim() != name.trim() || input_pass.trim() != pass.trim()) {
    console.log("Invalid credetials");
}
else {
    console.log("Login Successfull");
}
