// SOME -- Note: some look like find method.

const anArray = [11, 43, 32, 55, 'sujon', 'sheikh'];
const result = anArray.some((item) => item === 'sujon' )
console.log(result)

// ---------------------------------------------------------------------------------

// some method apply on array - object.
const person = [
    {
        name: 'sujon',
        age: 45,
        roll: 22,
        occuption: 'student',
        gf: 'no'
    },
    {
        name: 'sheikh',
        age: 23,
        job: 'nothing',
        phone: '01999986919'
    },
    {
        name: 'minhaul islam',
        age: 25,
        roll: 34,
        wife: 'I have no wife'
    }
]

const folafol = person.some((item) => item.wife)
console.log(folafol)

const anotherResult = person.some((item) => item.age == 25)
console.log('Has my age',anotherResult)

