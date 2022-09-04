// SPREAD OPERATOR.
// Indroduce spread operator (...)


// ES5 -- with out spread operator work.
const numbers = [11, 22, 33,];

function sum(a, b, c, d) {
    const result = (a + b + c + d);
    console.log('wow',result) // output three time undefined full array receive one parametter
    return result;
}
sum(numbers);

// ES6 -- pread operator work.
const rolls = [21, 32, 12, 43];
function spreadMethod(a,b,c,d){
    const total = (a + b + c + d);
    console.log(total)
    return total
}
spreadMethod(...rolls); // Output explain: ... means copy from array.