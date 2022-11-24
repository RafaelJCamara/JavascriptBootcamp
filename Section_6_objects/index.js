/**
 * Õbjects are collections of properties
 * Properties are key-value pairs
 * Objects are dictionaries
 * Keys are converted to strings
 */
const person = {
    firstName: "Rafael",
    lastName: "Camara",
    planet: "Earth",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }   
}

console.log(person.firstName);
/**
 * You can access attributes from the object with bracket notation
 * You should use bracket notation when:
 * -> Your keys are not valid js variable names (ex. key with value 76 trombones)
 * -> When you want to access dynamic properties
 */
console.log(person["lastName"]);
console.log(person.fullName());
/**
 * You can add properties with the dot notation or bracket notation, like we do down below.
 */
person["age"] = 100; //or person.age = 100
console.log(person.age);