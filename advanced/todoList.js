/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here
let list = []
addTask = (to_do) => {
    if(!list.includes(to_do)) {
        list.push(to_do)
    }
}

showTasks = () => {
    return list
}

removeTask = (to_do) => {
    let index = list.indexOf(to_do)
    if (index !== -1) {
        list.splice(index, 1)
    } 
}
module.exports = { addTask, removeTask, showTasks };
