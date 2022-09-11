// MATH -- math is javascript build in object for mathmatic operation.

// MATH.POW -- math.pow receive two arguments result makes power 1st argumennts define number and 2nd arguments define how many.
console.log(Math.pow(10, 2))

// ---------------------------------------

// MATH.MAX -- math.max find an array on highest number of element.
console.log(Math.max(11, 23, 22, 12, 45, 65, 54, 77, 88)) // Output 88

const maxMthd = [11, 23, 22, 12, 45, 65, 54, 77, 88]
console.log(Math.max(maxMthd)) // outPut NaN means not a number math.max receive number argumennts but full array type number but variable not number.

// Now solution using spread operator.
const anoMaxMthd = [11, 23, 22, 12, 45, 65, 54, 77, 100]
console.log(Math.max(...anoMaxMthd))

// -----------------------------------------------------------------------

// MATH.MIN -- math.min find an array on lowest number of element.
console.log(Math.min(11, 23, 22, 12, 45, 65, 54, 77, 88)) // Output 11

const minMthd = [11, 23, 22, 12, 45, 65, 54, 77, 88]
console.log(Math.min(minMthd)) // outPut NaN means not a number math.max receive number argumennts but full array type number but variable not number.

// Now solution using spread operator.
const anoMinMthd = [11, 23, 22, 12, 45, 65, 54, 77, 100]
console.log(Math.min(...anoMinMthd))

// ------------------------------------------------------------------------

// MATH.RANDOM -- math.random mean generate random start from 0.
console.log(Math.random()); // if u want specific random from your choice.

const random = (Math.random() * 7)
console.log(Math.floor(random))

// ------------------------------------------------------------------

// MATH.CEIL -- math.ceil works convert integer to flot number on upsite.
console.log(Math.ceil(20.99))

// ---------------------------------------------------------------------

// MATH.FLOOR -- math.floor works convert integer to flot number on under site.
console.log(Math.floor(10.99))

// ------------------------------------------------------------------

// MATH.ROUND -- math.round fixed flot number greater and less number.
console.log(Math.round(10.90)) // output 11
console.log(Math.round(10.49)) // output 10