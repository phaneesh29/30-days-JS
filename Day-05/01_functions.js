// activity - 1
function checkNum(number) {
    console.log(number % 2 == 0 ? "Even" : "Odd");

}

checkNum(44556 + 456 + 63)

console.log();

function square(number){
    return number ** 2
}

let squareNum = square(5)
console.log(squareNum);

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity - 2
const maxNum = function (num1,num2) {
    if (num1 > num2) {
        return num1
    } else if (num2>num1) {
        return num2
    }
    else{
        return "Both are equal"
    }
}

console.log(maxNum(5, 8));

console.log();

const concatStr = function (str1, str2) {
    return str1 + str2
}

console.log(concatStr("sree","phaneesha"));

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity - 3
const sumNum = (num1,num2)=>(num1+num2)

console.log(sumNum(5, 8));

console.log();

const containsChar = (str, char) => (str.includes(char))
console.log(containsChar("sree", "e"));

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity - 4
function product(num1, num2=6){
    return num1*num2
}
console.log(product(5));

console.log();

function greet(name, age = 19){
    return `Hello ${name}, you are ${age} years old`
}

console.log(greet("sreephaneesh"));

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity - 5
function higherOrderFunction(callback,number){
    for (let i = 0; i < number; i++) {
        callback()
    }
}

function callbackFunction() {
    console.log("Hello World");
}
higherOrderFunction(callbackFunction, 5);

console.log();
console.log();

function higherOrderFunction1(callback1,callback2,value){
    return callback2(callback1(value))
}

function functionCallback1(value) {
    return value*2
}

function functionCallback2(value) {
    return value**2
}

console.log(higherOrderFunction1(functionCallback1, functionCallback2, 5))