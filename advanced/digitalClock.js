/**
 * Problem:
 * Write a program that displays a live digital clock in the browser.
 *
 * Your task:
 * Implement the function `digitalClock` that updates and displays the current time every second.
 *
 * Example:
 * digitalClock() should display the current time and update every second.
 */

// Write your solution here
function digitalClock(){
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        console.clear()
        console.log(hour + ":" + minute + ":" + second);
        //process.stdout.write(hour + ":" + minute + ":" + second);
    }, 100);
}

module.exports = digitalClock;
