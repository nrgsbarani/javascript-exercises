/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

function numberToWords(input){
    const Numbers = new Map([
        [0 , "zero"],[1 , "one"], [2 , "two"],[3 , "three"],[4 , "four"],[5 , "five"],
        [6 ,"six"],[7 ,"seven"],[8 ,"eight"],[9 ,"nine"],[10 , "ten"],[11 , "eleven"],
        [12, "twelve"],[13, "thirteen"],[14, "fourteen"],[15, "fifteen"],[16, "sixteen"],
        [17, "seventeen"],[18, "eighteen"],[19, "nineteen"],[20, "twenty"],[30 ,"thirty"],
        [40 ,"forty"],[50 ,"fifty"],[60, "sixty"], [70, "seventy"],[80, "eighty"], [90, "ninety"],
    ])

    if (input === 0) return Numbers.get(input);

    let digits = new String( input + "").split("").map(Number);

    console.log(digits);
    let words = "";
    for (let i = 0; i < digits.length; i++) {
        let stage = digits.length - i;
        let digit = digits[i];
        let step = "";
        if ( stage === 4 ) {
            step += `${Numbers.get(digit) } thousand `;
        }else if ( stage === 3 ) {
            step += `${Numbers.get(digit) } hundred `;
        }else if ( stage === 2 ) {

            if (digit === 1) {
                digit = digit * 10 + digits[i + 1];
                digits[i + 1] = 0;
                step += `${ Numbers.get(digit) }` ;
            }else {
                digit = digit * 10;
                step += `${ Numbers.get(digit) }`;
            }

        }else if ( stage === 1 ) {
            if ( digit === 0 ) {
                continue;
            } else {
                step += ` ${ Numbers.get(digit) }`;
            }
        }

        words += step;
    }

    return words.trim();
}


module.exports = numberToWords;


