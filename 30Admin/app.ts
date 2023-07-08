let user : string[]=["Ajmal","Abdul Raqeeb","Hamza","admin","Hamdan"]
for(let i=0; i< user.length;i++){
    if (user[i] == "admin"){
        console.log(" Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user[i]}, thank you for logging in again`)
    }
}