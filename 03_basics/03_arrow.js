const user = {
    username: "ryan",
    price: 999,
    welcomeMessage: function() {
       console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "syed"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     let username = "ryan"
//     console.log(this.username);
// }

// one()

// const one = () => {
//     let username = "ryan"
//     console.log(this.username);
// }

// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)

//implicity return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,5));


const addTwo = (num1, num2) =>  ({username: "ryan"})
console.log(addTwo(3,5));

