// task - 1 
try {
    const myNumber = 11;
    console.log(myNumber);
    myNumber++;
    console.log(myNumber);
    
} catch (error) {
    console.log(`Error: ${error}`);
}

// task - 2
function divide(num1,num2) {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1/num2

    } catch (error) {
        return `Error: ${error}`
    }
}

console.log(divide(11,2))
console.log(divide(16,4))
console.log(divide(16,0))

// task-3
try {
    const username = "sreephaneesh29"
    const email = "sreephaneesha@gmail.com"

    console.log("Running Checks...");

    if (username.length > 5 && email.includes("@")) {
        console.log("Verified");
    }
    else{
        throw new Error("Invalid username or email")
    }

} catch (error) {
    console.log(`USER ERROR ${error}`);
    
}
finally{
    console.log("Execution completed");
}

//task-4

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwError() {
    throw new CustomError("This is a custom error");
}

try {
    throwError()
} catch (error) {
    if (error instanceof CustomError) {
        console.log(`Custom Error: ${error.message}`);
    } else {
        console.log(`Generic Error: ${error.message}`);
    }
}

// task-5
function validateUser(username) {
    try {
        if (username.trim()!=="" && typeof username == "string") {
            return "UserName Verified"
        } else {
            throw new Error("Invalid Username")
        }
    } catch (error) {
        return `Error: ${error}`
    }
}

console.log(validateUser("sreephaneesh29"))
console.log(validateUser(""))
console.log(validateUser(45454854))

// task-6
let randomPromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 1000);
});

randomPromiseOne.then((result) => {
    console.log(`Random Promise One Resolved: ${result}`);
}).catch((error) => {
    console.log(`Random Promise One Rejected: ${error}`);
});

//task - 7
let randomPromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    }, 2000);
});

async function handleRandomPromise() {
    try {
        let result = await randomPromiseTwo;
        console.log(`Random Promise Two Resolved: ${result}`);
    } catch (error) {
        console.log(`Random Promise Two Rejected: ${error}`);
    }
}
handleRandomPromise();

// task -8 
const apiUrl = "https://api.githphaneeshub.com/users/phaneesh29"
fetch(apiUrl).then((response)=>{
    response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(`APIERROR: ${error}`);
})

async function invalidAPIRequest(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(`APIERROR: ${error}`);
    }   
}

invalidAPIRequest(apiUrl)