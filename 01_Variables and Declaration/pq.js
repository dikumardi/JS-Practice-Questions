/**
 1. Without using a third variable, swap values of three variables: `a = 1, b = 2, c = 3`.
2. Write a program to swap two numbers using only arithmetic operators (`+` and `-`).
3. Create a program that shows the difference between `var`, `let`, and `const` inside nested blocks.
 **/

let a = 1 ;
let b = 2 ;
let c = 3 ;

[a,b,c] = [b,c,a]

a = a - b ;
b = b - a ;
a = a + b ;
c = b - a ;
console.log(a,b,c);

/**
 
 let a = 5 ; 
 let b = 10 ;

 a = a + b ;
 b = a - b ;
 a = a - b ;
 console.log(a,b);
 
 * **/
 var x = 10
 if (x > 2 ) {
    let  y = 10
    const z = 55 ;
     console.log(x);
     if (x > 3) {
             console.log(x);    
             console.log(y);
             console.log(z);

     } 
        console.log(x);
             console.log(y);
             console.log(z);
     
 }
    console.log(x);
          