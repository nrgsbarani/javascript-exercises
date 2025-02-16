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

let myList = []

addUser = (name) => myList.includes(name) ? false : myList.push(name)

removeUser = (name) => myList.includes(!name) ? false  : myList.splice(myList.indexOf(name),1)

showUsers = () => myList

module.exports = { addUser, removeUser, showUsers };
