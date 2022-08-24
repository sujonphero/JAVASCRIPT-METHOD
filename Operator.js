// OPERATOR

// Short summery in operator. 2 + 2, Now + is operator & 2 is operand.

// 4 Types operator in javascript.

/*
    #1 Arithmentic Operator.
    #2 Comparison Operator.
    #3 Logical / Relational Operator.
    #4 Conditional / Ternary Operator.
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
    #1 Double Equal (==)
    #2 Not Equal (!=)
    #3 Tripple Equal (===)
    #4 Tripple Not Equal (!==)
    #5 Greater Then (>)
    #6 Less then (<)
    #7 Big Or Equal (>=)
    #8 Small Or Equal (<=)
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


// #3 LOGICAL / RELATIONAL OPERATOR IN 3 TYPES. (&&, ||, !)
/*
    #1 And (&&)
    #2 Or (||)
    #3 Not (!)
*/

// #1 AND (&&)  Note: (&&) operator use one more or more expression.If any one has false she return false, and if true all expression return true.
const firstL = true;
const secondL = true;
const thirdL = false;

// #2 OR (||)   Note: (||) operator use one more or more expression.If any one has true she return true, and if false all expression return false.
const firstOr = true;
const secondOr = false;
const thirdOr = false;

// #3 NOT (!)   Note: (!) operator mean positive value made negetive.
const notResult = !true;

// ----------------------------------------------------------------------------------

// #4 CONDITION / TERNARY OPERATOR IN 1 TYPE. (? :)
/*
    # Question Symbol and Colon. (? :)
*/
const wow = true;
const wow1 = false;
console.log(true ? wow1:wow)