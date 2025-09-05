/** 1. Write a function to print "Hello, World!".
2. Write a function that takes a name as parameter and greets the person.
3. Write a function to add two numbers and return the result.
4. Write a function that checks if a number is even or odd.
5. Write a function to find the square of a number.
6. Write a function with default parameter (e.g., greet with default name).
 **/


function print() {
    console.log("Hello, World!"); 
}

print();


function greet(name) {
    console.log(`Hello,`+name); 
}

greet("yourName");


function add(a,b) {
    return a + b ;
}
add(2,2);


function check(a) {
    if (a % 2 === 0) {
        console.log("even"); 
    }else{
        console.log("odd");
    
    }
}
check(24);


function square(val) {
    return val * val ;
}
square(4);

function xyz(name= "yourName") {
    console.log(`hello `+name);
}
xyz();