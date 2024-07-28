// task -1 
function outerFunction() {
    let outerVariable = "Hello from the outer function!";

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}
const innerFunc = outerFunction();
console.log(innerFunc());

//task-2
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter());

//task-3
function createIDGenerator() {
    let lastID = 10000;
    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();

console.log(generateID());
console.log(generateID());
console.log(generateID());

//task-4
function greetUser(name){
    return function(){
        console.log(`Hello, ${name}!`);
    }
}
const greetBob = greetUser('Bob');
greetBob();

//task-5

function createFunctionArray(size) {
    const functions = [];

    for (let i = 0; i < size; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log(index);
            };
        })(i);
    }

    return functions;
}

const functionArray = createFunctionArray(5);

functionArray[0](); 
functionArray[1]();
functionArray[2]();
functionArray[3](); 
functionArray[4]();

// task-6

function createItemManager() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`Added: ${item}`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`Removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function() {
            console.log("Items:", items.join(", "));
        }
    };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems();
itemManager.removeItem('Apple');
itemManager.listItems();   
itemManager.removeItem('Grape'); 

// task-7
function memoize(fn) {
    const cache = {}; // Object to store the results of previous computations

    return function(...args) {
        const key = JSON.stringify(args); // Use JSON.stringify to create a unique key for each set of arguments
        if (cache[key] !== undefined) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            console.log('Computing result for:', key);
            return result;
        }
    };
}

// Example usage
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Output: Computing result for: [1,2] 3
console.log(memoizedAdd(1, 2)); // Output: Fetching from cache: [1,2] 3
console.log(memoizedAdd(2, 3)); // Output: Computing result for: [2,3] 5
console.log(memoizedAdd(2, 3)); // Output: Fetching from cache: [2,3] 5

// task-8
function memoize(fn) {
    const cache = {}; // Object to store the results of previous computations
    

    return function(...args) {
        const key = JSON.stringify(args); // Use JSON.stringify to create a unique key for each set of arguments
        if (cache[key] !== undefined) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            console.log('Computing result for:', key);
            return result;
        }
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: Computing result for: [5] 120
console.log(memoizedFactorial(5)); // Output: Fetching from cache: [5] 120
console.log(memoizedFactorial(6)); // Output: Computing result for: [6] 720
console.log(memoizedFactorial(6)); // Output: Fetching from cache: [6] 720
console.log(memoizedFactorial(5)); // Output: Fetching from cache: [5] 120
