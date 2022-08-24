// CONDITION STATEMENT.
// Javascript Condition Statement In 4 Types.
/*
    #1 if (statement)
    #2 if...else(statement)
    #3 if...else if(statement)
    #4 switch (statement)
*/
// -----------------------------------------------------------------------------------

//  #1 IF statement.  Note: only if statement execute one value.
const myName = "sujon";
if(myName == "sojeeb"){
    console.log('wow you are right!')
} // one

if(myName == "sheikh"){
    console.log('wow you are find out!')
} // two

if(myName == "sujon"){
    console.log('ok you r cought!')
} // three

// -----------------------------------------------------------------------------------

// #2 IF...ELSE statement. Note: if...else statement always execute two value one or two or nothing it,s depend on your statement.
if(100 > 99){
    console.log('Right answer')
} else {
    console.log('Wrong answer')
}

// -----------------------------------------------------------------------------------

// #3 IF...ELSE IF statement
const isRaining = true;

if(isRaining === true){
    console.log('Do not out your home. Becouse you are ill!')
} else if (isRaining == false) {
    console.log('Now i am going to party')
} else {
    console.log('i go to school')
}

// -----------------------------------------------------------------------------------

// #4 SWITCH statement.
const myTown = "magura";

switch (myTown) {
    case `khulna`:
        console.log('No brother you are wrong')
        break;
    case `jessor`:
        console.log('No year pabna is mental hospital')
        break;
    case `magura`:
        console.log('Donnobad year tmi fatai disso')
        break;
    default:
        console.log('Ami rohinga')
}