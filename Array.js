// ARRAY

// Array Non-primitive / Reference data type.

// old school type.
const myArray = new Array ('sujon', 'sheikh', 'sojeeb')
// console.log(myArray)


// Declearation Array.
const friends = ['sujon', 'sheikh', 'sojeeb', 'shamim'];
// console.log(friends)

// -----------------------------------------------------------------------------------

// Access spacific value in array on index number.
const friendsName = ['sujon', 'sheikh', 'sojeeb', 'shamim', 'khobir'];
const access = friendsName[3]
console.log(access)

// -----------------------------------------------------------------------------------

// Access spacific value in array on index number and change array value.
const friendsArray = ['sujon', 'sheikh', 'sojeeb', 'shamim', 'khobir'];
friendsArray[3] = 'james';
console.log(friendsArray)

// -----------------------------------------------------------------------------------

// LENGTH access on 2 types.
/*
    #1 (.) dot notation. 
    #2 (['']) bracket notation.
*/

// .DOT NOTATION. Access array all value Length with .DOT NOTATION.
const fruits = ['mango', 'jackfruit', 'lychee', 'coconut'];
const allFruits = fruits.length;
console.log(allFruits)

// [''] BRACKET NOTATION. Access array all value Length with [''] BRACKET NOTATION.
const animals = ['dog', 'cow', 'cat', 'tiger', 'lion'];
const allAnimals = animals['length'];
console.log(allAnimals)

// EXAMPLE with for loop on array.
const hero = ['sakib', 'alom', 'nirob', 'arfin'];
for(let i = 0; i < hero.length; i++){
    console.log('name ' + hero[i])
}

// -----------------------------------------------------------------------------------

// PUSH -- add element in array last position use PUSH.
const country = ['bangladesh', 'span', 'netherland', 'italy'];
country.push('jogdal');
console.log(country)

// -----------------------------------------------------------------------------------

// POP -- remove element in array last position use POP.
const village = ['sonpur', 'mogi', 'suitola', 'sekpara'];
village.pop();
console.log(village)

// -----------------------------------------------------------------------------------

// UNSHIFT -- add element in array first position use UNSHIFT. 
const player = ['messi', 'naymer', 'ronaldo', 'demaria'];
player.unshift('sujon sheikh')
console.log(player)

// -----------------------------------------------------------------------------------

// SHIFT -- remove element in array first position use SHIFT.
const peaple = ['sahenur', 'sujon', 'hasibul', 'jihade', 'forhad'];
peaple.shift();
console.log(peaple)

// -----------------------------------------------------------------------------------

// INDEX OF -- an array spacific element number show use INDEX OF.
const public = ['hasibul', 'sujon', 'jihde', 'reaj'];
const result = public.indexOf('sujon');
console.log(result)
// Note: if any element search an indexOf and this array element already numbers result -1 [-1 mean this element never stay an array].

// -----------------------------------------------------------------------------------

// SPLICE -- an array spacific remove some elememt use SPLICE.
const birds = ['tiya', 'moina', 'shalik', 'choroi'];
birds.splice(2,3)
console.log(birds)

const nature = ['tree', 'bee', 'sky', 'rain', 'mountain'];
nature.splice(3);
console.log(nature)

// -----------------------------------------------------------------------------------



// -----------------------------------------------------------------------------------

// 