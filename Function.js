// FUNCTION.
function hello(){
    console.log('hello world')
}
hello()

// -------------------------------------------------------
function something (num1, num2){
    const result = num1 + num2;
    console.log(result, 'awesome')
}
something(12, 50)

// -----------------------------------------------------------

// RETURN statement -- When if store value on variable sothe use return statement.
function explore (first, second){
    const addition = first + second;
    return addition
}
const result = explore(65, 35);
console.log(result) 

// -----------------------------------------------------------
// CALLBACK
function callMyname(name, callback){
    const myAge = 20;
    callback(myAge)
    console.log('its interesting ? yes it is mr',name)
}
function hello(age){
    console.log('i am pass throw argument an my age is', age)
}
callMyname('sujon sheikh', hello)


// CALLBACK
function awesome(name,callback){
    const gf = 'girlFriend';
    callback(gf)
    console.log('Hello my name is', name, 'and i have no', gf )
}
function unknown(she){
    console.log('hello i am never something', she)
}
awesome('sujon', unknown)