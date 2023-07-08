var user = ["Ajmal", "Abdul Raqeeb", "Hamza", "admin", "Hamdan"];
for (var i = 0; i < user.length; i++) {
    if (user[i] == "admin") {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user[i], ", thank you for logging in again"));
    }
}
