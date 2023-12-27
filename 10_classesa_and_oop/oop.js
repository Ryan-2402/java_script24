// const user = {
//   username: "ryan",
//   logInCount: 0,
//   signedIn: true,
//   getuserDetails: function(){
//       // console.log("Got user details from database");
//       // console.log(`username: ${this.username}`);
//       console.log(this);
//   }
// }

// console.log(user.username);
// //console.log(user.getuserDetails());
// console.log(this);


function user(username, logInCount, isLoggedIn){
  this.username = username;
  this.logInCount= logInCount;
  this.isLoggedIn = isLoggedIn;
  return this
}

const userOne = new user("ryan", 44, false)
const userTwo = new user("syed", 24, true)

console.log(userOne.constructor);
// console.log(userTwo);
