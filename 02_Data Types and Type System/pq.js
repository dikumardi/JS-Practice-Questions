/** 1. What will be the output of: `console.log([] + []);` ? Why?
2. Predict: `console.log([] + {});` and `console.log({} + []);`.
3. Convert a boolean into a number without using `Number()`.
4. Explain why `NaN === NaN` is false. Prove it with code.
5. Write code to safely check if a variable is truly `null`. **/

console.log([] + [])//  undefined because we are adding two array that why 

console.log([] + {});// object , object

console.log({} + []); // object , object

console.log(NaN === NaN);
let a = NaN ;
let b = NaN ;

console.log(a + b );
