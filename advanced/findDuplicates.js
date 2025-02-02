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

function findDuplicates(array){

    let answer = []

    let x = array.sort((a,b) => a-b)
    for(let i=0 ; i < x.length ; i++){
        if (x[i] === x[i+1]){ 
            if(!answer.includes(x[i])){
              answer.push(x[i])
            }
        }
    }
    return answer
}

module.exports = findDuplicates;
