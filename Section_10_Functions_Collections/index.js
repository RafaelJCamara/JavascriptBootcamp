const array = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * The forEach array methods applies a callbackfunction to each element and returns the elements that match a specific condition
 * The function is called once per element in the array
 * The other alternative that is the "for of" loop
 */
console.log("************************************************************************************")
console.log("***** FOR EACH *****")
array.forEach(element => {
    if(element%2==0){
        return console.log(element)
    }
});

//you can also have acces to the index of the element
array.forEach(function(element, index) {
    if(element%2==0){
        console.log(`${element} at ${index}`)
    }
});

console.log("************************************************************************************")



console.log("************************************************************************************")
console.log("***** MAP *****")
/**
 * The map function returns a modified version of the array, but does not modify the original array.
 * If we don't return something from the map function, we return undenfined, so we would have an array of undefined elements
 */
const doubleArray = array.map(function(element){
    return element*2;
});
console.log(doubleArray)

//you can also return an array of objects
const objectArray = array.map(function(element){
    return {
        value: element,
        isEven: element%2==0
    }
});

console.log(objectArray);

console.log("************************************************************************************")


console.log("************************************************************************************")
console.log("***** FIND *****")

/**
 * The find function returns the first matching element that matches the callback function provided, even if there are 10 matching elements
 */

const words = ["Day", "Month", "Year", "Pay"]
const word = words.find(el => el.indexOf("ay")!=-1);
console.log(word);

console.log("************************************************************************************")



console.log("************************************************************************************")
console.log("***** FILTER *****")

/**
 * The filter function returns an array of the elements that pass the filter function passed as callback
 * The function doesn't modify the original array
 */
const otherNums = [1, 10, 100, 200, 300, 400];
const filteredNums = otherNums.filter(num => num < 200);
console.log(filteredNums)

console.log("************************************************************************************")


console.log("************************************************************************************")
console.log("***** SOME and EVERY *****")

/**
 * SOME: returns true or false, depending if there is at least one element that matches the callback function passed
 * EVERY: returns true or false, depending if every element that matches the callback function passed
 */

const names = ["Jan", "Feb", "Mar", "Apr", "May", "Juns"]
console.log(names.some(name => name.length === 3))
console.log(names.every(name => name.length === 3))


console.log("************************************************************************************")


console.log("************************************************************************************")
console.log("***** Reduce *****")

/**
 * The purpose of reduce is tho shrink down all the elements from an array down to a single element
 * For example, it might be useful if you want to find the sum of the elements of an array or if you want to find the maximum value of an item in the array
 * The value returned from each array pass is stored inside the accumulator variable
 * When we start the reduce function, the accumulator starts with the value of the first element and the current starts with the value of the second element
 */

const elements = [1,2,3,4,5]

//find the sum of the elements
const sumOfArray = elements.reduce((accumulator, current) =>{
    return accumulator + current;
});

console.log(sumOfArray)

/**
 * The reduce function also accepts a second argument that corresponds to the initial value we want to start with
 * In the example below, the "regular" sum would be 15, but by passing the initial value of 100, the final sum will be 115.
 */
const sumOfArrayWithInitValue = elements.reduce((accumulator, current) =>{
    return accumulator + current;
}, 100);

console.log(sumOfArrayWithInitValue)

const maxElement = elements.reduce((maxValue, current) =>{
    return Math.max(maxValue, current);
});

console.log(maxElement)

console.log("************************************************************************************")