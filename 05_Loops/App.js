/** ### Easy
1. Print numbers 1 to 5 using `for` loop.
2. Print numbers 1 to 5 using `while` loop.

### Medium
3. Print multiplication table of any number entered by the user.
4. Find sum of even numbers from 1 to 50.

### Hard
5. Print Fibonacci series up to 10 terms.
6. Print factorial of a number using a loop.
 **/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let j = 1 ;
while (j <= 5) {
    console.log(j);
    j++;
    
}

let num = prompt("Enter any number");
for (let i = 1; i <= 10; i++) {
    let ans =  num * i ;
    console.log(num + ` * `+ i +` = `+ ans );
}

 let  sum = 0;
for (let x = 1; x <= 50; x++) {
  if  (x % 2 === 0) {
        sum = sum + x ;

  }
}
    console.log(sum);

