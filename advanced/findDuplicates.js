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

function findDuplicates(input) {
    let output = [];
    let lastestelement = NaN;
    let exists = false;
    //console.log(input)
    for(let item of input) {
        //console.log(item);
        if (item === lastestelement) {
            if (exists === true) {
                // do nothing
            } else {
                output.push(item);
                exists = true;
            }
        } else {
            exists = false;
        }
        lastestelement = item
    }

    return output;
}

module.exports = findDuplicates;
