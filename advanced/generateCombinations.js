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

module.exports = generateCombinations;

function generateCombinations (array) {
    const arr = [];

    for (let i = 0; i < array.length; i++) {
        arr.push([array[i]]);
    }


    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            arr.push([array[i], array[j]]);
        }
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                arr.push([array[i], array[j], array[k]]);
            }
        }
    }
   return arr;
}

console.log(generateCombinations([1, 2, 3])); 