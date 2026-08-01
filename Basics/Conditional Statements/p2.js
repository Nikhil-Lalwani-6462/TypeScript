// User Role Authorization ⭐⭐⭐⭐⭐
import promptSync from "prompt-sync";
let prompt = promptSync();
console.log("Role(Admin/Manager/Employee/Guest) ");
let role = prompt("Enter Role:");
switch (role.toLowerCase()) {
    case "admin":
        console.log("Full Access");
        break;
    case "manager":
        console.log("Limited Access");
        break;
    case "employee":
        console.log("Basic Access");
        break;
    case "guest":
        console.log("No Access");
        break;
    default:
        console.log("Enter proper role mentioned on screen");
        break;
}
