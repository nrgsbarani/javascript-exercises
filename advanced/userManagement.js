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
let list = []
addUser = (user) => {
    if (!list.includes(user)) {
        list.push(user)
    }
}

showUsers = () => {
    return list
}

removeUser = (user) => {
    let index = list.indexOf(user)
    if (index !== -1) {
        list.splice(index, 1)
    } 
}

module.exports = { addUser, removeUser, showUsers };
