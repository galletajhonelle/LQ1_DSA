//1. Using conditional statement ,alert(),and prompt()
//using a correct username and password
var correct_user_name = "admin_user";
var correct_user_password = "09262020";
//ask the user
let user_name = prompt("Enter your user_name:");
let user_password = prompt("Please enter your password:");

// check if the username and userpassword is match
if ("user_name === correct_user_name && user_password === correct_user_password"){
    alert('Welcome ${user_name}')
} else {
    alert('Maybe user_name or user_password is Invalid or Does not Match')
}
