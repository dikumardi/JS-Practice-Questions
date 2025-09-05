/**## 1. Variables and Declarations

### Easy
1. Declare a variable `country` and assign your country name. Print it.
2. Create two variables `x = 10` and `y = 20`. Print their sum.
3. Use `const` to declare a variable that cannot be changed.

### Medium
4. Swap two variables (`a = 5`, `b = 10`) without using a third variable.
5. Declare a variable without assigning, then print its value.

### Hard
6. What will happen if you redeclare a `let` variable? Try and note the error.
7. What is the difference between `var`, `let`, and `const` when used inside a block `{}`?
 **/
 let country = "India"
 console.log(country);

 let x = 10 ;
 let y = 20 ;
 console.log( x + y ); // 30

 const name = "myName" ;

 // ### Medium ###

 let a = 5 ; 
 let b = 10 ;

 a = a + b ;
 b = a - b ;
 a = a - b ;
 console.log(a,b);
 

 [a,b]=[b,a]; //another way
 

 let abc ;
 console.log(abc); //undefined
 
//  let declare = 100;
//  let declare = 12 ; cannot redeclare let variable it will give error Identifier 'declare' has already been declared


{
    var num = 10;
    let val = 20 ;
    const pi = 3.14;
 
}
    console.log(num); // 10 accessible out block scope because var doesn't respet {}
    console.log(val); // error but not accessible outside block
    console.log(pi); // error but not accessible outside block
    