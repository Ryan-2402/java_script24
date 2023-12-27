const promiseOne = new Promise(function(resolve, reject) {
  //Do an async task
  //db calls,cryptography, network
  setTimeout(function(){
    console.log('Async task is completed');
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise consumed");
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  }, 1000)
}).then(function(){
  console.log("Asynced 2 resolved");
})

const PromiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "ryan", email: "ryan@google.com"})
  }, 1000)
})
 PromiseThree.then(function(user){
  console.log(user);
 })

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if (!error) {
      resolve({username: "ryan", password: "1234"})
    } else {
      reject('ERROR: Something went wrong')
    }

  },1000)
})

promiseFour.then((user) => {
console.log(user);
return user.username
}).then((username) => {
  console.log(username);
} ).catch(function(error){
  console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if (!error) {
      resolve({username: "ryan", password: "1234"})
    } else {
      reject('ERROR: js went wrong')
    }

  },1000)
}); 


async function consumePromiseFive(){
  const response = await promiseFive
  console.log(response);
}
consumePromiseFive()





      // async function getAllusers(){
      //   try {
      // const response =  await fetch('https://jsonplaceholder.typicode.com/users')

      // const data = await response.json()
      // console.log(data);
      // }catch (error) {
      //   console.log("E: ",error);
      // }
      // }

      // getAllusers()


  fetch('https://api.github.com/users/ryan-2402')
  .then((response)=>{
      return response.json()
  })
  .then((data)=> {
    console.log(data);
  })
  .catch((error) => console.log(error))




































