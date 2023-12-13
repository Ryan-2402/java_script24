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


// console.log(typeof myObj);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(non-primitive)

let myname = "syed Ryan"
let anothername = myname
anothername = "rysd"
// console.log(myname);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "ryan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

