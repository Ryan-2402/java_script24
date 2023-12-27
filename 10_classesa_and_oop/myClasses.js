//ES6

class User {
  constructor(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password
  }
  encryptPassword(){
    return `${this.password}abc`
  }
  encryptName(){
    return `${this.userName.toUpperCase()}`
  }
}

const chai = new User("ryan", "ryan@google.com", "123")

console.log(chai.encryptPassword());
console.log(chai.encryptName());

// behind the scene

function user(userName, email, password){
  this.userName = userName;
  this.email = email;
  this.password = password
}
user.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
user.prototype.encryptName = function(){
  return `${this.userName.toUpperCase()}`
}

const syed = new user("syed", "syed@gmail.com","123")
console.log(syed.encryptPassword());
console.log(syed.encryptName());
