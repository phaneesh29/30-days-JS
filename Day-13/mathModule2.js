function add(num1,num2) {
    return num1+num2
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};