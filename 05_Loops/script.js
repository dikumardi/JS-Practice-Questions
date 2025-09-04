/** 1. Print numbers from 1 to 10 using a `for` loop.
2. Print even numbers from 1 to 20.
3. Print sum of numbers from 1 to 100.
4. Print multiplication table of 5.
5. Use a `while` loop to print numbers from 10 down to 1.
6. Use a `do...while` loop to print numbers from 1 to 5. **/

for(let num=1; num <= 10; num++ ){
    console.log(num);
}

for (let i = 0; i <= 20; i++) {
    if( i%2 === 0 ) {
        console.log("Even Number: "+ i);
    }
}

let sum = 0;
for (let j = 1; j <= 100; j++) {
    sum = sum + j ;
}
    console.log(sum);  



for (let table = 1; table <= 10; table++) {
    console.log(`5 * `+ table + ` = ` + 5 * table);
}


let number = 10 ;
while (number >= 1 ) {
    console.log(number);
    number--;
}


let a = 1
do {
    console.log(a);
    a++;
} while (a <= 5);

