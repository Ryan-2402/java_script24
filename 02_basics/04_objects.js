// const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "ryan"
tinderuser.isLoggedIN = false

// console.log(tinderuser);

const regularUser = {
    email: "ryyan@gamail.com",
    fullname: {
        userfullname: {
            firstname: "syed",
            lastname: "ryan"
        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


// const obj3 = { obj1, obj2}

// const obj3  =Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email:"ryan@google.com"
    }




]



///////////////////////////////

const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "ryan"
}
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

