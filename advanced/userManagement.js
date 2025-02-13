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

let userList = new Set([]);

const addUser = (user) => userList.has(user) ? false : userList.add(user) ;
const showUsers = () => Array.from(userList);
const removeUser = (user) => userList.delete(user);


module.exports = { addUser, removeUser, showUsers };
