var current_users = ['zia', 'Ajmal', 'hamdan', 'abdul raqeeb', 'Imran'];
var new_users = ['Irfan', 'AJMAL', 'ZIA', 'hisham', 'sheraz'];
// the logic i used is that i am just checking new user name one by one through nasted loop
// to solve the problem of case sensivity i used lowercase method to change user name into lower case
for (var i = 0; i < new_users.length; i++) {
    var flag = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            flag = true;
        }
    }
    if (flag) {
        console.log("The username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_users[i], "' is available."));
    }
}
