const array = [1,2,3,4,5,6];

console.log(
    array.reduce((previousResult,currentResult)=>{
        return previousResult + currentResult;
    },0)
)


if (100 === '100') {
    console.log('awesome')
} else {
    console.log('nothing')
}