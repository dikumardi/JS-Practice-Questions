/** 1. Create an array of 5 fruits and print it.
2. Access the first and last element of the array.
3. Add a new fruit to the array using `push()`.
4. Remove the last element using `pop()`.
5. Loop through an array and print each element.
6. Find the length of an array.
7. Use `indexOf()` to find position of an element.
8. Sort an array of numbers.
 **/

let fruits = ["apple", "mango", "Guava", "pineapple","cherry"]
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[4]);

fruits.push("Banana");

fruits.pop();

let num = [4 , 1 , 2 , 7];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(element);    
    
}  


let val = [10, 40,20,50, 30,  60 ,70];
console.log(val.length);



val.sort();

