let LoggedIn = false;
let username ;
let password;

while (!LoggedIn) {
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");
    
    if (username === "oswxld" && password === "4005Estheriris") {
        LoggedIn = true;
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials, please try again.");
    }


}