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

