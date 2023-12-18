const myNum = [1, 3 , 4]

// const myTotal = myNum.reduce(function (acc, currval) {
//     return acc + currval
// }, 

const myTotal = myNum.reduce((acc,curval)=> acc+curval,0)
console.log(myTotal);