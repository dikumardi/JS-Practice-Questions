/** 1. Write a program to check if a number is positive, negative, or zero.
2. Check if a person is eligible to vote (age >= 18).
3. Print grade based on marks:
   - 90+ → A
   - 75–89 → B
   - 50–74 → C
   - Below 50 → Fail
4. Use `switch` to print day of the week based on a number (1–7). **/

let num  = 40 ;
if (num < 0) {
    console.log("negative");
}else if (num > num) {
    console.log("positive");
    
}else {
    console.log("Zero");
    
}


let age = 45 ;
if (age > 18 ) {
    console.log("person is eligible to vote");
}else{
    console.log("Not eligible to vote");
    
}

let marks = 65 ;
if (marks > 90) {
    console.log("A");
}else if (marks >=78 && marks <=89 ){
    console.log("B");  
}else if (marks >=50 && marks <=74){
    console.log("C");
}else if (marks <= 50) {
    console.log("fail");
    
}


let day = 5 ;

switch (day) {
  
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;   
          case 7:
        console.log("Sunday");
        break;            
    default:
        console.log("Invalid Input");
        break;
}

