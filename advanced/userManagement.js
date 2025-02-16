/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */
let users = [];

function addUser(user) {
    if (!users.includes(user)) { // جلوگیری از اضافه شدن نام تکراری
        users.push(user);
    }
    return users;
}

function removeUser(user) {
    for (i = 0; i < users.length; i++) {
        if (users[i] === user) { 
            users.splice(i, 1); 
            break; 
        }
    }
    return users; 
}
function showUsers() {
    return users;
}

module.exports = { addUser, removeUser, showUsers };
