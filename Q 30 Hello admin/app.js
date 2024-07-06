var userName = ["admin", "Bushra", "Hareem", "Faiza", "Maria"];
userName.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello", username, " would you like to see a status report?");
    }
    else {
        console.log("Hello", username, "thank you for logging in again");
    }
});
