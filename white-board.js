/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseString1(str) {
    return [...str].reverse().join('');
}

function reverseStr(inputString) {
    let arr = inputString.split('');
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i];
    }
    return output;
}

console.log(reverseString1("hello World"));
console.log(reverseStr("hello World"));
*/
/*

isEvenOrOdd = (number) => number%2 === 0 ? "Even"  : "Odd"

console.log(isEvenOrOdd(5))
*/
/*

celsiusToFahrenheit = (degree) => (degree * (9 / 5)) + 32;

console.log(celsiusToFahrenheit(100));*/


/*
function isPrime(number ) {
    if (number < 2 ) { return false }
    let max = Math.floor(number ** 0.5) + 1 ;
    for (let i = 2; i <= max; i++) {
        if (number % i === 0  ) {return false;}
    }
    return true;
}

console.log(isPrime(51));*/


/*
function factorialRecursive(number) {
    if (number < 0) return NaN;
    if (number === 0) return 1;
    if (number === 1) return 1;
    else return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5));*/

/*function charCount(string , char) {
    //let arr = ;
    //return string.split('').reduce((accumulator, currentValue) => (currentValue === char) ? accumulator ++ : accumulator , 0);
    let arr = string.split('');
    let count = 0;
    for (item of arr) {
        if (item === char) {
            count++;
        }
    }
    return count;
}*/


/*
console.log(charCount("hello World" , "l"));
*/
/*

// array = [3, 1, 4, 1, 5, 9]
let array = [3, 1, 4, 1, 5]

array2 = [10, -1, 2, 0, 3]
sortArray = (array) => array.sort();

function mergeSort(array) {
    //console.log(array)
    if (array.length === 0 || array.length === 1) return array;
    else return merge(mergeSort(array.slice(0 ,array.length/2 )), mergeSort(array.slice(array.length/2,)));
}

function merge(left , right ) {

    let output = new Array(left.length + right.length);
    //let output_index = 0;
    let left_index = 0;
    let right_index = 0;
    for (let i = 0; i < output.length; i++) {
        if (left_index === left.length ) {
            output[i] = right[right_index];
            right_index ++
        }else if (right_index === right.length ) {
            output[i] = left[left_index];
            left_index ++
        }else {
            if( left[left_index] < right[right_index] ) {
                output[i] = left[left_index];
                left_index ++
            }else {
                output[i] = right[right_index];
                right_index ++
            }
        }
    }
    //console.log(output);
    return output;
}
//(5/2)
//console.log(array.slice(0,2));
//console.log(array.slice(2,));
//mergeSort(array)

merge([1,3,5] , [1,2,6])
console.log(mergeSort(array2));
*/

/*
sumOfDigits(12335)

function sumOfDigits(n) {
    let array = new String(n + "").split("").map(Number);
    console.log(array);
}*/

/*

let userList = new Set([]);

addUser = (user) => userList.has(user) ? false : userList.add(user) ;
showUsers = () => Array.from(userList);
removeUser = (user) => userList.delete(user);

addUser("Amir")
addUser("hesam")
removeUser("forghan")
removeUser("Amir")

console.log( showUsers() );
*/

isPalindrome = (number) => number < 0 ? false : prepare2palindrome( number );

function prepare2palindrome(number) {
    let array = new String( number + "").split("").map(Number);
    return palindromeRecursive(array , 0 ,array.length - 1);
}

function palindromeRecursive(array , start , end) {
    console.log(array,start , end);
    if(start >= end ) return true;
    else if(array[start] === array[end]) return palindromeRecursive(array, start+1 ,end-1) ;
    else return false;
}

console.log(isPalindrome(12321));