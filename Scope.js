// SCOPE 2 TYPES.

// #1 Local Scope.
// #2 Global Scope.

// ----------------------------------------------------------------------

// #1 LOCAL SCOPE. Note: localScope mean if you declear variable on function. just you access in function not out side.
function localScop (){
    var localSvar = "this is local something";
    console.log(localSvar);
}
localScop()

// #2 GLOBAL SCOPE. Note: globalScope mean if you  declear variable out of function. You access any where.
var globalVar = 'This is global scope'
function globalScope (){
    console.log("inside", globalVar)
}
globalScope()
console.log("out side", globalVar)
