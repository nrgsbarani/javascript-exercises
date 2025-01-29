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


const generateCombinations = (input) => {
    const result = [];
    // Generate combinations recursively
    generateCombinationRecursively(input, 0, [], result);

    // Sort combinations first by length, then by sum
    return result.sort((a, b) => a.length - b.length || sumArrays(a) - sumArrays(b) );
}


const generateCombinationRecursively = (input ,  index , currentCombination, result) => {
    if (index === input.length) {
        if (currentCombination.length > 0) {
            result.push([...currentCombination]);
        }
        return;
    }

    // Include Current
    currentCombination.push(input[index])
    generateCombinationRecursively(input , index + 1 , currentCombination, result);

    // Exclue Current
    currentCombination.pop();
    generateCombinationRecursively(input , index + 1 , currentCombination, result);
}

function sumArrays(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//console.log(generateCombinations([1, 2, 3 , 4]));

module.exports = generateCombinations;
