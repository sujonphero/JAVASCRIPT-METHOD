// DESTRUCTURING.

// Now at first introduce ES5 destructuring.

// ----------------------------------------------------
// ES5 -- array method.
const person = ['sujon', 'sheikh', 'rifat', 'forhad'];

const first = person[0];
const second = person[1];
const third = person[2];
const fourth = person[3];
console.log(first,second,third,fourth);

// -------------------------------------------
// ES5 -- objct method.
const some = {
    name: 'sujon',
    age: 23,
    occuption: 'student',
    hobby: 'good programmer',
    religion: 'islam'
}

const obFirst = some.name;
const obSecond = some.age;
const obThird = some.occuption;
const obFourth = some.hobby;
const obFive = some.religion;
console.log(obFirst,obSecond,obThird,obFourth,obFive)

// ---------------------------------------------------------------------

// Now Explore ES6 DESTRUCTURING.

// ES6 -- array method.
const man = ['forhhad', 'hasib', 'sahenur', 'alomgir'];

const [forhad, hasib, sahenur, alomgir] = man;
console.log(man)

// -----------------------------------------------------------------------------
// ES6 -- Object method.
const oneManArmy = {
    name: 'sujon',
    age: 23,
    contact: '01999986919',
    occuption: 'student',
    hobby: 'good programmer',
    religion: 'islam'
}
 const {name, age, contact, occuption, hobby, religion} = oneManArmy;
 console.log(oneManArmy);
