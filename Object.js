// OBJECT

// Object access in 2 types (#1 .dot notation | #2 ['']bracket notation).
const sujon = {
    fullName: 'sujon sheikh',
    ocuption: 'freelancer',
    phone: '019999-86919',
    town: 'magura',
    age: 23
};

// -----------------------------------------------------------------------------------

// ADD -- add new property in object.
const man = {
    fullName: 'sujon sheikh',
    ocuption: 'freelancer',
    phone: '019999-86919',
    town: 'magura',
    age: 23
};
man.gf = 'sokina';
console.log(man)

// -----------------------------------------------------------------------------------

// REMOVE -- remove property from object
const person = {
    fullName: 'sujon sheikh',
    ocuption: 'freelancer',
    phone: '019999-86919',
    town: 'magura',
    age: 23
};
person.phone = '984379847598'
console.log(person)

// -----------------------------------------------------------------------------------

// FUNCTION -- function in object.
const somthing = {
    fullName: 'sujon sheikh',
    ocuption: 'freelancer',
    phone: '019999-86919',
    myFunction: function () {
        console.log('hello there')
    },
    town: 'magura',
    age: 23
};
somthing.myFunction()

// -----------------------------------------------------------------------------------
// LOOP AN OBJECT.

const men = {
    fullName: 'sujon sheikh',
    ocuption: 'freelancer',
    phone: '019999-86919',
    town: 'magura',
    age: 23
};

for(item in men){
    console.log(item)
}

// -----------------------------------------------------------------------------------

// ARRAY IN OBJECT.
const arrayObj = [
    name = 'sujon',
    {
        friends: 'sojeeb',
        age: 24,
        phone: '01829877487',
    },
    town = 'magura'
];
arrayObj[2]

// -----------------------------------------------------------------------------------

// OBJECT IN ARRAY.
const objArray = {
    name: ['sujon', 'sheikh', 'ratul'],
    occuption: 'student',
    roll: 10
}
objArray.name[1]