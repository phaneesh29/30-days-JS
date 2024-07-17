// Activity-1
let numberCheck = -67
if (numberCheck > 0){
    console.log("Number is positive");
}
else if (numberCheck == 0){
    console.log("Number is zero");
}
else{
    console.log("Number is negative");
}

let age = 18
if (age>=18) {
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity-2
let num1 = 100
let num2 = 100
let num3 = 100

if (num1>num2) {
    if (num1>num3) {
        console.log(`${num1} is the greatest number`);
    }
    else if (num3>num1) {
        console.log(`${num3} is the greatest number`);
        
    }
}
else if (num2>num1) {
    if (num2>num3) {
        console.log(`${num2} is the greatest number`);
    }
    else if (num3>num2) {
        console.log(`${num3} is the greatest number`);
    }
}
else if (num3>num1) {
    if (num3>num2) {
        console.log(`${num3} is the greatest number`);
    }
    else if (num2>num3) {
        console.log(`${num2} is the greatest number`);
    }
}
else {
    console.log("All numbers are equal");
}

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity-3

let day = 1
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
        console.log("Invalid day");
        break;
}

let score = 80
switch (true) {
    case score>=90:
        console.log("Grade A");
        break;
    case score>=80:
        console.log("Grade B");
        break;
    case score>=70:
        console.log("Grade C");
        break;
    case score>=60:
        console.log("Grade D");
        break;
    case score>=50:
        console.log("Grade E");
        break;
    default:
        console.log("Grade F");
        break;
}

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity-4
let numEven = 665
let checkEven = numEven%2 ? "even":"odd"
console.log(`${numEven} is ${checkEven}`);

console.log("---------------------------------------------------------------------------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------------------");

// Activity-5
let year = 1900
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(`${year} is a leap year`);
        }
        else{
            console.log(`${year} is not a leap year`);
        }
    }
    else{
        console.log(`${year} is a leap year`);
    }
}
