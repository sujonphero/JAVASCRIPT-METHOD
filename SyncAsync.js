// I a using colors from npm pakage manager..
const colors = require("colors")


// SYNCRONUS
setTimeout(()=> {
    console.log("I am very very exited to learning about Synchronus Asynchronus...I AM FROM FIRST LINE".red)
}, 5000)
// console.log("I am understanding asyncchronus")
console.log("I will try something")



// ASYNCRONUS
 function getVar (){
    var x;
    setTimeout(function (){
        x = 100;
    }, 3000)
    return x;
 }
 var result = getVar();
 console.log("Now I a trying to Async with function",result);


 
 var hello;
 setTimeout(()=>{
    hello = 1000;
 }, 3000)
 console.log("I am cool",hello)
 