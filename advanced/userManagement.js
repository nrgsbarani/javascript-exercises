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
let list = new Set([]);

addUser = (user) => list.has(user) ? false : list.add(user);
removeUser = (user) => list.has(user) ? list.delete(user) : false;
showUsers = () => [...list];

module.exports = { addUser, removeUser, showUsers };