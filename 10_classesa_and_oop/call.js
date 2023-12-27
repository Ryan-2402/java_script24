function setusername(username){
  //complexdb call
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
  setusername.call(this, username)
  this.email = email
  this.password = password
}

const chai = new createUser("ryan", "ryan@google.com", '1234')
console.log(chai);