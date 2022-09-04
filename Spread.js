// SPREAD OPERATOR.
// Indroduce spread operator (...)


// ES5 -- with out spread operator work.
const numbers = [11, 22, 33,];

function sum(a, b, c, d) {
    const result = (a + b + c + d);
    // console.log('wow',result) // output three time undefined full array receive one parametter
    return result;
}
sum(numbers);

// -----------------------------------------------------------------------------

// ES6 -- pread operator work.
const rolls = [21, 32, 12, 43];
function spreadMethod(a,b,c,d){
    const total = (a + b + c + d);
    // console.log(total)
    return total
}
spreadMethod(...rolls); // Output explain: ... means copy from array.

// -------------------------------------------------------------------

// ES5 - array element push.
const friends = ['sujon', 'sheikh', 'sahenur', 'rakibul'];
friends.push('salman khan')
console.log(friends);

// ------------------------------------------------------
// ES6 - array element push on SPREAD.
const money = [12, 34, 56, 76, 87];
const pushWithSpread = [999, ...money, 1000]; // Output explain: justselect your position. 
console.log(pushWithSpread)

// -------------------------------------------------------------------------
// ES5 -- added array to another array.

const bow = ['sokina', 'monira', 'tuli', 'nosimon'];
const gf = ['jjj', 'rrr', 'hhh', 'ccc'];
const useConcate = bow.concat(gf); // Output explain: when added array to another array use concat.
console.log(useConcate)

// -------------------------------------------------------------------------------

// ES6 -- added array to another array use SPREAD.
const wife = ['sakira', 'monpura', 'ariana grande', 'nosimon'];
const babu = ['jjj', 'rrr', 'hhh', 'ccc'];
const useSpread = [...wife,...babu]; // Output explain: when added array to another array easyest method use concat.
console.log(useSpread)
