//for of

// ["","",""]
// [{},{},{}]
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

//Map

//no duplicates values
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Pak', "Pakistan")
map.set('IN', "India")
console.log(map);
for (const key of map) {
   console.log(key);
}
for (const [key, value]  of map) {
   // console.log(key, ':-', value);
}
// const myObj = {
//     'game1': 'nfs',
//     'game2': 'cs'
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }



