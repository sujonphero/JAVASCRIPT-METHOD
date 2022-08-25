// LOOP
// Javascript has some loop.
/*
    #1 for
    #2 do...while
    #3 while
    #4 break
    #4 continue
*/

// -----------------------------------------------------------------------------------

// #1 FOR LOOP.
for(let i = 0; i <= 10; i++){
    console.log('step ' + i)
}

// #2 DO WHILE LOOP.

// note: Not important this loop. ------------------------------------------

// #3 WHILE LOOP.

// note: Not important this loop. ------------------------------------------

// -----------------------------------------------------------------------------------

// #4 BREAK. Note: stop break statement value.
for (let state = 1; state < 10; state++){
    if(state == 8){
        break
    }
    console.log('alhamdullilah ' + state)
}

// -----------------------------------------------------------------------------------

// #4 CONTINUE. Note: skip continue statement value.
for(let initialValue = 0; initialValue < 15; initialValue++){
    if(initialValue == 10){
        continue
    }
    console.log('allah ' + initialValue)
}