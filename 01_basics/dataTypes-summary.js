// #Primitive
//Call by value
//7 types : string, Number, Boolean, null, undefined, symbol, bigInt

const score = 200
const scoreValue = 100.88

const isLoggedin = false


const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 575923898402398590328592048592085n

console.log(typeof bigNumber);


// No primitive
//call by reference
// Array, Object, Function
//array

const heros = ["shaktiman", "Krish", "naga"];

//objects

let myObj = {
    name: "ryan",
    age: 24,
}

//Functions

const myFunction =function(){
    console.log("hello");
}


console.log(typeof myObj);

