// task-1
function factorial(num){
    if (num==1 || num==0) {
        return 1;
    } else {
        return num*factorial(num-1);
    }
}
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(6))

// task-2
function fibonacci(n){
    if (n<0){
       throw new Error("n should be greater than 0")
    }
    else if (n==1){
        return 0;
    }
    else if (n==2){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }

}
console.log(fibonacci(6))

// task-3
function sumOfDigits(arr){
    if (arr.length==0){
        return 0;
    }
    else{
        return arr[0]+sumOfDigits(arr.slice(1));
    }
}
console.log(sumOfDigits([1,2,3,4,5,6,7,8,9,10]))

//task-4
function maxElement(arr){
    if (arr.length==1){
        return arr[0];
    }
    else{
        return Math.max(arr[0],maxElement(arr.slice(1)));
    }
}

console.log(maxElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//task-5
function reverseString(str){
    if (str.length==0){
        return "";
    }
    else{
        return str[str.length-1]+reverseString(str.slice(0, str.length-1));
    }
}
console.log(reverseString("hello"))

//task-6

function isPalindrome(str) {
    // Helper function to remove non-alphanumeric characters and convert to lowercase
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
    
    // Recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }
    
    // Clean the input string
    const cleanedStr = cleanString(str);
    
    // Use the recursive function to check palindrome
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Test cases
const testCases1 = ["racecar", "hello", "", "madam", "A man, a plan, a canal, Panama"];

testCases1.forEach(test => {
    console.log(`"${test}" is ${isPalindrome(test) ? "" : "not "}a palindrome`);
});

// task-7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Target not found
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid; // Target found
    }
    
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); // Search in the left half
    } else {
        return binarySearch(arr, target, mid + 1, right); // Search in the right half
    }
}

// Test cases
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testCases = [1, 5, 10, -1, 11];

testCases.forEach(target => {
    const index = binarySearch(testArray, target);
    console.log(`Index of ${target}: ${index}`);
});

//task-8
function countOccurrences(arr, target, index = 0) {
    if (index === arr.length) {
        return 0; // Reached the end of the array
    }
    
    return (arr[index] === target ? 1 : 0) + countOccurrences(arr, target, index + 1);
}

// Test cases
const testArray1 = [1, 2, 3, 2, 2, 4, 2];
const testArray2 = [5, 5, 5, 5, 5];
const testArray3 = [1, 3, 5, 7, 9];
const testArray4 = [];

console.log(`Occurrences of 2 in [${testArray1}]: ${countOccurrences(testArray1, 2)}`);
console.log(`Occurrences of 5 in [${testArray2}]: ${countOccurrences(testArray2, 5)}`);
console.log(`Occurrences of 3 in [${testArray3}]: ${countOccurrences(testArray3, 3)}`);
console.log(`Occurrences of 0 in [${testArray4}]: ${countOccurrences(testArray4, 0)}`);

//task-9
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);  // Traverse the left subtree
    console.log(node.value);      // Visit the node
    inOrderTraversal(node.right); // Traverse the right subtree
}

// Test case
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

//task-10
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0; // Base case: empty tree has depth 0
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1; // Depth of the tree is max of left or right subtree depth plus 1
}

// Test cases
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.left.left = new TreeNode(4);

const root3 = new TreeNode(1);

console.log(`Depth of the binary tree (root1): ${calculateDepth(root1)}`); // Expected output: 3
console.log(`Depth of the binary tree (root2): ${calculateDepth(root2)}`); // Expected output: 4
console.log(`Depth of the binary tree (root3): ${calculateDepth(root3)}`); // Expected output: 1
console.log(`Depth of the binary tree (null): ${calculateDepth(null)}`);   // Expected output: 0
