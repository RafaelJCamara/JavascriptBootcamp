//global scope
let username = "Rafael";

helloWorld(username);

/**
 * This way of creating a function is called function statement.
 */
function helloWorld(username){
    // function scope
    let message = "Hello world";
    console.log(`${message} ${username}`);
}

/**
 * message is not available here because it is defined as a function scope
 */
//console.log(message);


/**
 * The way of defining functions down below is called function expression
 * We can do that because functions are defined as objects
 */

const square = function (num){
    return num * num;
}

console.log(`Using square function with 2: ${square(2)}`);


function laugh(){
    console.log("ahahahaha");
}

/**
 * Since func is going to be executed inside the function, it is called a callback
 */
function executeOther(func){
    func();
    func();
}

executeOther(laugh);

