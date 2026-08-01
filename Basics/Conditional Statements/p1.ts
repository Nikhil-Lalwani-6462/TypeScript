// Login Validation ⭐⭐⭐⭐⭐

import promptSync from "prompt-sync";
let prompt = promptSync();
let name : string = "admin"
let pass : string = "12345"

let input_name : string = prompt("Enter your name:");
let input_pass : string = prompt("Enter your password:");
if(input_name.trim() != name.trim() || input_pass.trim() != pass.trim() )
    {
        console.log("Invalid credetials")
    }
else
    {
        console.log("Login Successfull");
    }

