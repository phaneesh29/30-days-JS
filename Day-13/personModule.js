const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    greet(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old and I live in ${this.city}.`);
    }
    }

    module.exports = person