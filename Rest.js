// REST perametter.

// ES5 -- example understanding rest perametter.
function es5(){
    for(var i = 0; i < arguments.length; i++){ // arguments declear mean when no perametter use.
        console.log('wellcome' + arguments[i])
    }
}
es5('sujon', 'sheikh', 'man');

// --------------------------------------------------------
// ES6 -- arrow function not support arguments.
const arrowFunction = () =>{
    for(let i = 0; i < arguments.length; i++){
        console.log('wow ' + arguments[i]) // OutPut: es6 arrow function has not support arguments.
    }
}
arrowFunction('bd', 'uk', 'cn', 'nk')