/**  1. Create variables of type: string, number, boolean, undefined, null, object.
2. Use `typeof` to check the type of each variable.
3. Add a string and a number together. What is the result?
4. Convert a number to a string using `String()`. Print the type.
5. Convert a string to a number using `Number()`. Print the type.
6. What is the result of `null + 5`? Why? **/


// 1 . Answer : 
let name = "yourName";
let num = 3;
let boolean = true ;
let a = undefined ;
let b = null ;
let c = {};

// 2 . Answer : 
console.log(typeof(name));
console.log(typeof(num));
console.log(typeof(boolean));
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// 3 .Answer : Add String and number output will be hello10
console.log("hello"+ 10); //OUTPUT: hello10

// 4 .Answer  Convert a number to a string using string() will be string
let val = String(10) ;
console.log(typeof(val)); // type is string

//5.Answer  Convert a string to a number using `Number() will be  number
let str = Number(10) ;
console.log(typeof(str));

// 6. `null + 5` is 5
console.log(null + 5);
