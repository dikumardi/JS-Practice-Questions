/** 1. Create an object `student` with properties: name, age, grade.
2. Access object properties using dot notation and bracket notation.
3. Add a new property to the object (e.g., city).
4. Change the value of an existing property.
5. Delete a property from the object.
6. Create an object `car` with a method `start()` that prints "Car started!".
7. Create an array of objects (3 students) and print each student’s name.
 **/

const student = {
    name: "yourName", 
    age: 21, 
    grade:"A"
}

console.log(student.age);
console.log(student["name"]);

student.city = "yourCity"
console.log(student);

student.name = "myName"
console.log(student);

console.log(delete student.grade);


let car = {
    carName: "BMW",
    type: "slim",
    price: 5000000,
    start: function (params) {
        console.log("car started");
        
    }
}
car.start();


let student =[
    { name:"zwew", age:20 ,grade: "A",},
   { name:"wsaeh", age:40 ,grade: "B",},
    {name:"wefs", age:28 ,grade: "c",},
];

for (let i = 0; i < student.length; i++) {
console.log(student[i].name);
    
}
