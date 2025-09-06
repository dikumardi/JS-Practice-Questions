/**### Easy
1. Create a variable for each type: string, number, boolean, null, undefined.
2. Use `typeof` to print the type of each variable.

### Medium
3. Convert a string like `"123"` into a number.
4. Add `true + 5`. What is the result?
5. Concatenate a string and number, e.g., `"Age: " + 22`.

### Hard
6. What is the difference between `null` and `undefined`?
7. Try `"10" - 2` and `"10" + 2`. Explain the difference.
 **/

let str = "hello";
let num = 10 ;
let boolean = true ;
let val = null ;
let ud = undefined ;

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(boolean));
console.log(typeof(val));
console.log(typeof(ud));

let convert = Number("123");
console.log(typeof(convert));
 
console.log(true + 5); //6

console.log("Age"+ 22); //Age22

// null: null mean when you don't want to give value you set the value as null like nothing

//undefined:  undefined  is something that when you put on purpose that you have set undefined but in future you will get or put value intead of undefined . something like a placeholder 

console.log("10"-2);//8
console.log("10"+ 2); //102

