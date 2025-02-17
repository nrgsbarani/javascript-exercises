/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */

const generateCombinations = arr => {
    const result = [];
    
    const backtrack = (start, current) => {
        if (current.length) result.push([...current]);
        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, [...current, arr[i]]);
        }
    };

    backtrack(0, []);
    return result.sort((a, b) => a.length - b.length || a[0] - b[0]);
};

module.exports = generateCombinations;
