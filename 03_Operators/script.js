/** 1. Add, subtract, multiply, and divide two numbers.
2. Use `%` operator to find remainder of 17 ÷ 5.
3. Use `++` and `--` on a number. Print before and after.
4. Compare two numbers using `>`, `<`, `>=`, `<=`.
5. Compare `"5" == 5` and `"5" === 5`. What’s the difference?
6. Use logical operators (`&&`, `||`, `!`) in examples. **/

console.log(10+20); //30
console.log(10-20); //-10
console.log(2*5); //10 
console.log(10/2); //5


console.log(17%5); // 2


let num = 10 ;
++num ;
console.log(num); //11
console.log(--num);//10


let x = 10 ;
let y = 20 ;
console.log(x > y); //false 
console.log(x < y); //true 

let a = 17 ;
let b = 21 ;
console.log(x >= y); //false 
console.log(x <= y); //true 


console.log("5" == 5); // true it check only value if type is different it  but it is number than no problem
console.log("5" === 5); //false because it check value as well as its type


console.log(18 > 12 && 10 < 5); //false
console.log(18 > 12 || 10 < 5); //true
console.log(!true); //false



