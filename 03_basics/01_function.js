

function sayMyName(){
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n");
}
//sayMyName()
//  function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
//  }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
 }


    const result = addTwoNumber(3, 5)
    //console.log("result: ",result);
function loginuserMessage(username ="ryan"){
    if (!username) {
      
        console.log("please eneter a username ")
        return
    }

    return `${username} just logged in`
}
//console.log(loginuserMessage("ryan"));
// console.log(loginuserMessage("syed"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 5000));
const user = {
    username: "ryan",
    price: 5000
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}


// handleObject(user)

handleObject({
    username: "ryan",
    price: 499
})

const myNewArray = [22, 33, 44, 55]
function returnsecondvalue(getArray){
    return getArray[1]
}
// console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([22, 33, 44, 55]));





