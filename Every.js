// EVERY method.
const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const result = numbers.every(item => item == 1)
console.log(result);

// ---------------------------------
const anoNumbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
const anoResult = anoNumbers.every(item => item == 1)
console.log(anoResult);


// Check array type -----------------------------------------------------------
const moreNumbers = [8, 17, 108, 112, 19, 7, 10, 12, 11, 2];
const moreResult = moreNumbers.every(item => typeof item === 'string')
console.log(moreResult);
