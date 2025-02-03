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

module.exports = { addTask, removeTask, showTasks };

let tasks = [];
beforeEach(() => {
    tasks = []; 
});
function addTask(task) {
tasks.push(task)
return `Task added: ${task}`
}

function removeTask(task) {
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        return `Task removed: ${task}`;
    } else {
        return ` Task ${task} not found`;
    }
}

function showTasks() {
    return tasks.length > 0 ? tasks : "No tasks available!";
}

console.log(addTask("Buy groceries")); 
console.log(addTask("Study JavaScript")); 
console.log(showTasks()); 
console.log(removeTask("Buy groceries"));
console.log(showTasks()); 
console.log(removeTask("Exercise"));