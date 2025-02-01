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

function addUser(name){
        myList.push(name)
    }

function removeUser(name){
        myList = myList.filter(user => user !== name);
    }

function showUser(){
        return myList
    }

module.exports = { addUser, removeUser, showUsers };
