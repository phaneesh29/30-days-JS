// task-1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static getGenricGreetings() {
        return "Hello, this is a static method!";
    }
}

const person1 = new Person('John', 30);
console.log(person1.greeting());

// task-2

person1.updateAge(31);

// task-3

class Student extends Person {
    static studentCount = 0
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
        console.log(`Total number of students: ${Student.studentCount}`);
    }
    getStudentId() {
        return `StudentId: ${this.studentId}`;

    }
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. STudentId is: ${this.studentId}`;
    }
}

const studentInstance = new Student('Alice', 20, 12345);
console.log(studentInstance.getStudentId());

//  task-4
console.log(studentInstance.greeting())

//task-5
console.log(Person.getGenricGreetings())

//task-6
const student1 = new Student("Jane", 22, "S12345");
const student2 = new Student("John", 23, "S12346");

console.log(`Final total number of students: ${Student.studentCount}`);

