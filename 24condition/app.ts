/// <reference lib="es2016" />
const car :string= "Honda"
const age: number = 32
const score: number[]= [90,75,80]
//Test for equailty and inequilty
console.log(car == "Honda")
console.log(car != "Honda")
//Test using Lower case function
console.log(car.toLowerCase() == "Honda")
//Numerical test
console.log(age == 32)
console.log(age != 32)
console.log( age > 32)
console.log( age < 32)
console.log( age >= 34)
console.log(age <= 34)
// and or
console.log(car == "Honda" && age == 32)
// and opertor will genrate true only both conditions are same as AND logic gate
console.log(car == "Honda" || age == 32)
// or opertor will genrate true if any condition is true same as OR logic gate
//array test
console.log(score.includes(90))
console.log(!score.includes(80))
