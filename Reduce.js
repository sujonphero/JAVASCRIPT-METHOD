// REDUCE
// reduce works on state variable. if you want to plus all array number elements use REDUCE.

const numbers = [1,2,3,4,5,6];
console.log(
    array.reduce((previousResult,currentResult)=>{
        return previousResult + currentResult;
    },0)
)

// -------------------------------------------------------------------------

const reducer = numbers.reduce((old, current) => {
    const result = old + current;
    return result
},0)
console.log(reducer)
