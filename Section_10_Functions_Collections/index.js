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


