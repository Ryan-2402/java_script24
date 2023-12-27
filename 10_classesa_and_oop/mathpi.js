const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desc);



// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI);

const chai = {
  name: 'green chai',
  price: 100,
  isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
Object.defineProperty(chai, 'name', {
  writable: false,
  enumerable: false

})
console.log(Object.getOwnPropertyDescriptor(chai , "name"));
