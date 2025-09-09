/** 
### Easy
1. Create an object `person` with name, age, city.
2. Access properties using dot notation.

### Medium
3. Add a new property `gender` to the object.
4. Delete the `city` property.
5. Add a method `greet` that prints a message.

### Hard
6. Create an object `book` with title, author, and a method `getSummary()` that returns a string.
7. Create an array of 3 objects (students) and print their names using a loop.
 **/

const person = {
    name:"yourName",
    age:24,
    city:"cityName"
}

console.log(person.name);

person.gender = "male"
console.log(person);


console.log(delete person.city);

const book = {
    title:"The book beyound everything",
     author:"yda"
}
