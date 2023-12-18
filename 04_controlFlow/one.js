///if statement
// <, > , <=, >=, ==, !=, ===
// const userLoggedIn = true
// if (2 === "2") {
//     console.log("executed");
// }

//if else 
// const temp = 45
// if (temp === 45 ) {
//     console.log("less than 50");
// } else {
//     console.log("temp greater than 50");
// }

// const score = 200
// if(score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//shoet hand notaion
const balance = 1000
// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLogged = true
const debitCard = true
const loggedInGoogle = false
const loggedInEmail = true
if (userLogged && debitCard && 2==2) {
    console.log("allow to buy course");
    
}
if (loggedInEmail ||  loggedInGoogle) {
    console.log("user logged in");
    
}
