// VARIABLE

// VAR -- declear variable value change any type.
var myAge = 23;
console.log(myAge = 44)

// LET -- declear variable value change any type.
let myName = 'sujon';
myName = 'sujon sheikh'
console.log(myName)

// CONST -- declear variable never redeclear variable and never change value.
const mySchool = 'academy';
mySchool = 55;
console.log(mySchool)

// -----------------------------------------------------------------------------------
// VARIABLE IN FUNCTION SCOPE. Note: this is global scope variable becouse out of if statement.

// VAR --------------------------------------
function varScope(){
    if(true){
        var a = 100;
    }
    console.log('value is',a)
}
varScope()


// CONST -------------------------------------
function constScope(){
    if(true){
        const b = 100;
        console.log('value is',b)
    }
    // console.log('value is',b) Note: const and let are block scope variable becouse they are never access out of if statement.
}
constScope()