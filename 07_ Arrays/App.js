/** ### Easy
1. Create an array of 5 colors.
2. Print the first and last element of the array.

### Medium
3. Add and remove elements using `push()` and `pop()`.
4. Loop through an array and print each item.
5. Find the index of a specific element.

### Hard
6. Reverse an array without using `reverse()`.
7. Sort an array of numbers in ascending order.
 **/

let arr = ["green", "pink","blue","yellow"];

console.log(arr[0]);
console.log(arr[3]);

arr.push("red");
arr.pop();

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

let array = [10 ,30 ,20,50 ,40,70,60]

function sortNumber(a,b) {
    return a - b ;
}
let sortAns = sortNumber(array);
console.log(sortAns);
