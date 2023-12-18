const userEmail = "ryan@google.com"
if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truty
// '0'," riyan"

//Nullish Coalesing operater (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// console.log(val1);

val1 = undefined ?? 10
// console.log(val1);

// Terniary Operator
//condition ? true : false
const iceprice = 100
iceprice <=80 ? console.log("less than 80") : console.log("greater than 80");