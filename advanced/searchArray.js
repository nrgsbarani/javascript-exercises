/**
 * Problem:
 * Write a function that takes an array of numbers and a target number.
 * It should return `true` if the target exists in the array, otherwise return `false`.
 *
 * Your task:
 * Implement the function `searchArray` that checks if the target is in the array.
 *
 * Example:
 * searchArray([1, 2, 3, 4], 3) should return true.
 * searchArray([1, 2, 3, 4], 5) should return false.
 */
function searchArray(number,set){
    
    len = number.length;
    var Flag = 0;
    for ( i = 0 ; i < len ; i++){
        if (number[i] == set){
            Flag = 1;
            break;
        } else {
            continue;
        }
    }
    if (Flag == 0){
        return false;
    } else if (Flag == 1){
        return true;
    }
}
console.log(searchArray([1,2,3,5],4))
module.exports = searchArray;
