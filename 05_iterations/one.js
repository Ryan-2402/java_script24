//for
for (let j = 1; j <= 10; j++) {
    const element = j ;
    if (element == 5) {
        // console.log(" 5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
       // console.log(i + '*' + j + '='+ i*j);
    }
    
    
}
let array = ["flash", "batman", "superman"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(element);
}

//break and continue
for (let index = 1; index <= 30; index++) {
    if (index == 24) {
        console.log(`Happy Birthday`);
        break
    }
    console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <= 30; index++) {
    if (index == 24) {
        console.log(`Happy Birthday`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}
