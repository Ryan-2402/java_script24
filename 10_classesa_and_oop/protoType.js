// let myName = "ryan       "

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}


Object.prototype.ryan = function(){
  console.log(`ryan is present in all object`);
}
Array.prototype.heyRyan = function(){
  console.log(`ryan say hello`);
}
// myHeros.ryan()
// myHeros.heyRyan()
// heroPower.heyRyan()
//heroPower.ryan()





let anotherUsername = "ryan           "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()




"syedriyan".trueLength()
