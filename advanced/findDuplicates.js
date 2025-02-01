/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here

module.exports = findDuplicates;

function findDuplicates(array) {
    const duplicates = [];
    const seen = new Set();
    for (let i = 0; i < array.length; i++) {
        if (seen.has(array[i])) {
            if (!duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        } else {
            seen.add(array[i]);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4]));
console.log(findDuplicates([1, 1, 1, 2, 3]));
console.log(findDuplicates([1, 2, 3]));