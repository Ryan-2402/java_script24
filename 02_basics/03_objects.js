//singleton
//object.create
//object literals
const mysym = Symbol("key1")

const jsuser = {
    name: "ryan",
    [mysym]: "mysym1",
    age: 24,
    location: "mysore",
    email: "ryan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mysym]);

// console.log(typeof jsuser.mysym);


jsuser.email = "ryan@chat.com"
// Object.freeze(jsuser)
jsuser.email = "ryan@micro.com"

// console.log(jsuser);
jsuser.greeting = function(){
    console.log("hello ryan");
}
console.log(jsuser.greeting());
jsuser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(jsuser.greetingTwo());