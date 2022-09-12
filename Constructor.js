// Example without constructor.
const sujon = {
    firstName: "sujon",
    lastName: "sheikh",
    job: "student",
    dream: "programer",
    age:23
}
const rahim = {
    firstName: "rahim",
    lastName: "islam",
    job: "student",
    dream: "programer",
    age:23
}
const hasib = {
    firstName: "hasib",
    lastName: "bin",
    job: "student",
    dream: "programer",
    age:23
}
// console.log(sujon,rahim,hasib)

// ----------------------------------------------------------

// CREATE CONSTRUCTOR...
const Person = function(firstName,lastName,age,dream){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dream = dream;
}

const personOne = new Person("sujon","sheikh",23,"programmer")
const persontwo = new Person("rahim","islam",24,"farmer")
const personThree = new Person("hasib","bin",22,"viral")
console.log(personOne,persontwo,personThree)