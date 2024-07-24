// Task-1
let promOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task-1 will be resolved')
        resolve('Task-1')
    }, 2000)
})
promOne.then((res) => {
    console.log(res);
    console.log('Task-1 is done')
})

console.log();

// task-2
let promTwo = new Promise((resolve, reject) => {
    console.log('Task-2 will be resolved');
    reject('Task-2 rejected')
})
promTwo.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    console.log('Task-2 is done')
})

console.log();

// task-3

function fetchData(server, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched data from ${server}`);
            resolve();
        }, delay);
    });
}

fetchData('Server 1', 1000)
    .then(() => fetchData('Server 2', 3500))
    .then(() => fetchData('Server 3', 4500))
    .then(() => fetchData('Server 4', 4800))
    .then(() => console.log('All data fetched'));

console.log();

// task-4

let promFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Task-5 will be resolved');
        resolve('Task-5')
    }, 2000);
})

async function handlePromFive(){
    let res = await promFive;
    console.log(res);
    console.log('Task-5 is done')
}
handlePromFive();

// task-5

let promSix = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Task-6 will be resolved/rejected');
        reject('Task-6 rejected')
    }, 2000);
})

async function handlePromSix(){
    try {
        const res = await promSix;
        console.log(res);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("promsix completed");
        
    }
}
handlePromSix();

// task-6
fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1").then((response)=>{
 return response.json()
}).then((data)=>{
    if (data.success) {
        data.data.data.forEach((element,index) => {
            console.log(`${index} ${element.content}`);
            console.log();
        });
    } else {
        console.log(data.message);
        
    }
}).catch((err)=>{
    console.log(err);
})

// task-7

async function fetchDataFromApi() {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1");
        const data = await response.json();
        if (data.success) {
            data.data.data.forEach((element, index) => {
                console.log(`${index} ${element.content}`);
                console.log();
            });
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error);
    }
}
fetchDataFromApi();

// task-8

function fetchData(server, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data from ${server}`);
        }, delay);
    });
}


async function logAllResolvedValues() {
    try {
        const promises = [
            fetchData('Server 1', 1000),
            fetchData('Server 2', 2000),
            fetchData('Server 3', 1500),
            fetchData('Server 4', 500)
        ];
        
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    }
}
logAllResolvedValues();

//task-9

function fetchData(server, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data from ${server}`);
        }, delay);
    });
}


async function logFirstResolvedValue() {
    try {
        const promises = [
            fetchData('Server 1', 1000),
            fetchData('Server 2', 2000),
            fetchData('Server 3', 500),
            fetchData('Server 4', 1500)
        ];
        
        const firstResult = await Promise.race(promises);
        console.log(firstResult);
    } catch (error) {
        console.error('Error:', error);
    }
}


logFirstResolvedValue();
