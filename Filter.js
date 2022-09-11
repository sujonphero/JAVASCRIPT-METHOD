// FILTER

// Note: filter method find some result base on condition. 
const numbers = [1, 17, 3, 41, 5, 61, 7, 81, 9, 101];
const result = numbers.filter(number => {
    const even = number % 2 == 0
    return even
})
console.log(result)

