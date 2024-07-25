// utils.js

// Define constants
const PI = 3.14159;
const E = 2.71828;

// Define functions
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Export everything as an object
export default {
    PI,
    E,
    square,
    cube,
    factorial
};