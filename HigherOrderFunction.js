// Higher Order Function.

// javascript function is first class fuction becouse this function setup into another function arguents and return into another function.

// PASS THE ARGUMENT INTO ANOTHER FUNCTION.
const hOfunction = (name, callback) => {
    const myAge = '23';
    callback(myAge)
    console.log('hello my name is ' + name)
}
const anoFunction = (age) =>{
    console.log('I am ' + age + 'years old.')
}
hOfunction('sujon sheikh',anoFunction)

// -----------------------------------------------------------------------------------

// RETURN FROM FUNCTION INTO ANOTHER FUNCTION.
const firstFunction = (name) => {
    console.log('Hello my name is ' + name)
    return secondFunction = (teaBreak) => {
            console.log('Really I am eat ' + teaBreak)
    }
}
firstFunction('sujon sheikh') ('Black coffee');