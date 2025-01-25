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
generateCombinations = (arr) => {
    let result = [];
    
    // Helper function to create Combination
    function backtrack(start, current) {
        // add current combination 
        if (current.length > 0) {
            result.push([...current]);  // Add current combination to result
        }

        // add new element to combination
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);          // add new element to current list (combination list)
            backtrack(i + 1, current);     // callback function
            current.pop();                 // remove last element
        }
    }

    // callback function from the beginning
    backtrack(0, []);
    return result.sort((a, b) => a.length - b.length || a[0] - b[0]);
}

module.exports = generateCombinations;
