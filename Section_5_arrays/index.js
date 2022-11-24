/**
 * Down below, we have the most common way of instatiating an array.
 * There is also another way of doing it, which would be: let shoppingList = new Array('bread', 'butter', 'juice');
 */
let shoppingList = ['bread', 'butter', 'juice'];

/**
 * To access any element, we must specify the index at which this element exists, starting at 0 for the first element
 * If you try to access an index that does not exist, you will get an undenfined returned.
 */
console.log(shoppingList[1]);

/**
 * The have the length of an array, you can use the length property
 */
console.log(shoppingList.length)

/**
 * OPERATIONS AT THE END OF THE ARRAY
 */

/**
 * Pushing an element will add that element to the end of the array
 * The returning value will be the array's new length
 */
console.log(shoppingList.push('banana'));

/**
 * To remove the last element from the array, we can use the pop method
 * The returning value will be the deleted element
 */
console.log(shoppingList.pop());


/**
 * OPERATIONS AT THE BEGINNING OF THE ARRAY
 */

/**
 * Unshift an element will add that element to the beginning of the array
 * The returning value will be the array's new length
 */
 console.log(shoppingList.unshift('banana'));

/**
 * To remove the first element from the array, we can use the shift method
 * The returning value will be the deleted element
 */
 console.log(shoppingList.shift());





let fruits = ['apple', 'banana'];
let meat = ['steak', 't-bone'];
/**
 * To merge/combine two arrays, we can use the concat method.
 * This method won't change the orinal array, but rather return a new array with the changes.
 */
const stuff = fruits.concat(meat);
console.log(stuff)


/**
 * The includes method will check if the value exists in the array.
 * If exists, returns true.
 * If not, returns false.
 */
console.log(stuff.includes('steak'))

/**
 * The indexOf method returns the index at which the elenent exists.
 * If exists, returns the index of the element.
 * If it doesn;t, returns -1.
 */
console.log(stuff.indexOf('orange'))
console.log(stuff.indexOf('banana'))
