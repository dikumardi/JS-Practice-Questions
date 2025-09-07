/** ### Easy
1. Write a program to check if a number is even or odd.
2. Check if a number is greater than 100.

### Medium
3. Write a program that checks if a year is a leap year.
4. Use `switch` to print the month name from a number (1–12).

### Hard
5. Write a program that checks if three numbers can form a triangle.
 **/
let a = 24;
if ( a %2 === 0) {
    console.log("Even Number are: "+a);
}else{
    console.log("odd"+a);
    
}

let num = 50 ;
if (num >= 100) {
    console.log("Number is greater than 100");
    
}else{
    console.log("Not greater than 100");
}

let year = 2021;
if ((year % 4 === 0 && year % 100 !== 0 ) || ( year % 400===0)) {
console.log(year + "is a leap year ");
}else{
    console.log(year + "is not a leap year");   
}




let month = 8 ;
switch (month) {
    case 1:
    console.log("January");
        break;

    case 2:
    console.log("February");
        break;

    case 3:
    console.log("March");
        break;

    case 4:
    console.log("April");
        break;

    case 5:
    console.log("May");
        break;

    case 6:
    console.log("June");
        break;

    case 7:
    console.log("July");
        break;

    case 8:
    console.log("August");
        break;

    case 9:
    console.log("September");
        break;

    case 10:
    console.log("October");
        break;

    case 11:
    console.log("November");
        break;

    case 12:
    console.log("Decmeber");
        break;

    default:
        console.log("Invalid Input");
        break;
}