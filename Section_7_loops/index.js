for(let i=0; i<10; i++){
    console.log(`Value: ${i}`);
}

/**
 * In the while loop, we must have this work in advance of declaring the variable and manually decrement at the end of the loop.
 */
let i = 10;
while(i>0){
    console.log(i);
    i--;
}


const fruits = ['apple', 'banana', 'orange'];

/**
 * For of loops allows us to iterate over an iterable (in this case, we will iterate over each element of the array)
 */
for(let fruit of fruits){
    console.log(`Fruit: ${fruit}`);
}

for(let char of "hello"){
    console.log(char);
}


const person = {
    firstName: "Rafael",
    lastName: "Camara"
}

for(let prop in person){
    console.log(prop);
    console.log(person[prop]);
}
