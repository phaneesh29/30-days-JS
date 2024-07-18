// Activity - 1
const numArray = [1, 2, 3, 4, 5]
console.log(numArray);
console.log(`first element: ${numArray[0]} last element: ${numArray[numArray.length - 1]}`);

console.log("-----------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------");

// Activity - 2
numArray.push(6, 7, 8, 9, 10);
console.log(numArray);

numArray.pop()
console.log(numArray);

numArray.shift()
console.log(numArray);

numArray.unshift(99)
console.log(numArray);

console.log("-----------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------");

// Activity-3
let numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = numArray2.map((num) => num * 2);
console.log(newArray);

let filtedArray = numArray2.filter((num) => num % 2 == 0)
console.log(filtedArray);

let sumArray = numArray2.reduce((acc, num) => acc + num, 0)
console.log(sumArray);

console.log("-----------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------");

// Activity-4

console.log("for loop");
for (let index = 0; index < numArray2.length; index++) {
    const element = numArray2[index];
    console.log(element);
    
    
}

console.log();

console.log("for each loop");
numArray2.forEach((element) => {
    console.log(element);
});

console.log("------------------------------------------------------------------------");
console.log("------------------------------------------------------------------------");

// Activity-5

let twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(twoDimensionalArray);
console.log(`Middle Element: ${twoDimensionalArray[1][1]}`)

