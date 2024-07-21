// Activity - 1

let personName = "sreephaneesha"
let age = 19
console.log(`Name is ${personName} and age is ${age}`);

console.log();

console.log(`Multiline String Using a Template Literal
Name is ${personName} and age is ${age} `);

console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------------------------");
// Activity - 2

let  [a,b] = [10,20,30,40,50,60,70]
console.log(`${a} ${b}`);

console.log();

let {title,author} = {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
console.log(`${title} ${author}`);

console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------------------------");

//Activity - 3

let myArr = [1,2,3,4,5,6,7]
let newArr = [...myArr , ...[8,9,10]]
console.log(newArr);

function sumAll(...num) {
    return num.reduce((acc,res)=>(acc+res),0)
    
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------------------------");

// Activity - 4

function returnProduct(num1,num2=1){
    return num1*num2
}
console.log(returnProduct(10));

console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------------------------");

// Activity-5

const person = {
    personName,age,greet(){
        console.log(`${this.personName} ${this.age}`);
    }
}
console.log(person);
person.greet()

const propName = "dynamicProperty";
const value = 42;

console.log();

const obj = {
    [propName]: value, // Computed property name
    [`${propName}Extra`]: value + 1 // Another computed property name
};

console.log(obj);