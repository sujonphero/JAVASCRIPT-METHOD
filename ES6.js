// ES5 for loop.

// where i should use for of and for in.

// For of use an array.
// For in use an object.


// FOR OF USE AN ARRAY..
const arrays = [11, 22, 32, 44, 12, 43, 90];
for (const array of arrays){
    console.log(array)
}

// FOR IN USE AN OBJECT.
const person = {
    name: 'sujon',
    occuption: 'student',
    roll: '01',
    age: '23',
    hobby: 'programming'
}

for(const per in person){
    console.log(person[per])
}