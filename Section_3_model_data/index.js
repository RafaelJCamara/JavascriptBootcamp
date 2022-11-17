let username = ' rafael ';

console.log(username[0]);
/**
 * Returns the length of a string
 */
console.log(username.length);
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.trim());
/**
 * Returns the first occurance of af
 * Returns the starting index, if exist (in this case, returns index 1, which is the index at which we found af inside username)
 */
console.log(username.indexOf('af'))

/**
 * Slice returns the chunk of the string specified in the range given as argument
 * Does not modify the original string
 */
console.log(username.slice(0,3))
console.log(username)

/**
 * String template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
 */
console.log(`The sum of 3 and 4 is: ${3 + 4}`)

