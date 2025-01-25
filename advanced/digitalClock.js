/**
 * Problem:
 * Write a program that displays a live digital clock in the browser.
 * The digital clock should show the current time in the format "HH:MM:SS" and update every second.
 *
 * Your task:
 * 1. Implement the function `digitalClock` that retrieves the current time.
 * 2. Format the time into the "HH:MM:SS" format (e.g., "14:05:09").
 * 3. Display the formatted time in a browser element (e.g., a `div` or `span`).
 * 4. Use `setInterval` to update the displayed time every second.
 *
 * Example:
 * - If the current time is 2:15:45 PM, the digital clock should display "14:15:45".
 * - The time display should automatically update every second without refreshing the browser.
 *
 * Note:
 * This exercise involves DOM manipulation. Ensure you have an HTML file with a container element
 * (e.g., `<div id="clock"></div>`) to display the clock.
 */

digitalClock = () => {
    // Get system time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // add zero for single digit
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // clock face : HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // adding the clock to the clock id in the HTML file
    document.getElementById('clock').textContent = timeString;
}

// Update the clock
setInterval(digitalClock, 1000);

module.exports = digitalClock;
