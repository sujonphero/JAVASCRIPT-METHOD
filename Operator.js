// OPERATOR

// Short summery in operator. 2 + 2, Now + is operator & 2 is operand.

// 6 Types operator in javascript.

/*
    #1 Arithmentic Operator.
    #2 Comparison Operator.
    #3 Logical / Relational Operator.
    #4 Assignment Operator.
    #5 Conditional / Ternary Operator.
*/

// ----------------------------------------------------------------------------------

// #1 ARITHMENTIC OPERATOR IN 7 TYPES. (+, -, *, /, %, ++, --)
/*
    #1 Plus     (+)
    #2 Minus    (-)
    #3 Multiple (*) 
    #4 Divide    (/)
    #5 Modulus  (%)
    #6 Increment  (++)
    #7 Decreent  (--)
*/

// #1 PLUS (+)
const plusResult = 50 + 50;

// #2 MINUS (-)
const minusResult = 50 - 45;

// #3 MULTIPLE (*)
const multipleResult = 20 * 20;

// #4 DIVIDE (/)
const divideResult = 40 / 10;

// #5 MODULUS (%)
const modulusResult = 100 % 9;

// #6 INCREMENT (++) Note: increment, decrement after operator before operator result same;
let incrementResult = 10;
++incrementResult;

// #7 DECREMENT (--) Note: increment, decrement after operator before operator result same;
let decrementResult = 20;
decrementResult--;

// ----------------------------------------------------------------------------------


// #2 COMPARISON OPERATOR IN 8 TYPES. (==, !=, ===,!== >, <, >=, <=) Note: comparison operator always return result TRUE or FALSE.
/*
    #1 DOUBLE EQUAL (==)
    #2 NOT EQUAL (!=)
    #3 TRIPPLE EQUAL (===)
    #4 TRIPPLE NOT EQUAL (!==)
    #5 GREATER THEN (>)
    #6 LESS THEN (<)
    #7 BIG OR EQUAL (>=)
    #8 SMALL OR EQUAL (<=)
*/

// #1 DOUBLE EQUAL (==) Note: Double equal alawys check only value.
const firstEqual = 21;
const secondEqual = 20;

// #2 NOT EQUAL (!=) Note: Not equal alawys return negetive result.
const notEqual1 = 20;
const notEqual2 = 30;

// #3 TRIPPLE EQUAL (===) Note: Third equal alawys check data type & value type.
const thirdEqual = 100;
const thirdEqualResult = thirdEqual === '100';

// #4 TRIPPLE NOT EQUAL (!==) Note: Third equal alawys return negetive result.
const thirdNotEqual = 100;
const thirdNotEqualResult = thirdEqual !== '100';

// #5 GREATER THEN (>) Note: Greater then alawys check variable value big or small.
const big = 100;
const bigResult = big > 10;

// #6 LESS THEN (<) Note: Less then alawys check variable value small or big.
const small = 100;
const smallResult = big < 10;

// #7 BIG OR EQUAL (>=) Note: Greater then or equal alawys check variable value big or equal.
const bigEqual = 90;
const bigEqualResult = bigEqual >= 100;

// #8 SMALL OR EQUAL (>=) Note: Greater then or equal alawys check variable value small or equal.
const smallEqual = 1000;
const smallEqualResult = smallEqual <= 100;

// ----------------------------------------------------------------------------------


// #3 LOGICAL / RELATIONAL OPERATOR IN 3 TYPES.

