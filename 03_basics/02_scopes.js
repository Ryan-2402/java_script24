//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 
    // console.log("INNER:",a);
}



// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const userName = "ryan"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()




//++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num + 1
}
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
addTwo(5)


