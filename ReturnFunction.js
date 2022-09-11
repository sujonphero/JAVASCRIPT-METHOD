// RETURN FUNCTION

// why use return function and with out using return function.
function aboutReturn(p1, p2){
    const sum = p1 + p2;

    // return sum -- Note: if here do not declear return statement. result undefined, why result UNDEFINED becouse out of the function. you have call argument value. and store on variable so result undefined.
}
const result = aboutReturn(12,20);
console.log(result);

// using return function benifit.
function returnResult(first, second){
    const addition = first + second;
    return addition;
}
const output = returnResult(50, 60)
console.log(output)

