// task-7
class Person {
    constructor(fname,lname ,age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static getGenricGreetings() {
        return "Hello, this is a static method!";
    }
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }
    set fullName(name) {
        const [fname, lname] = name.split(' ');
        this.fname = fname;
        this.lname = lname;
      }
}

const person2= new Person("John", "Doe", 30);
console.log(person2.fullName)

//task-8

person2.fullName = "Jane Smith";
console.log(`updated fullName is: ${person2.fullName}`)

// task - 9
class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
      } else if (amount > this.#balance) {
        console.log("Insufficient balance.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create an instance of the Account class
  const account = new Account(1000);
  
  // Deposit money
  account.deposit(500);
  
  // Withdraw money
  account.withdraw(300);
  
  // Attempt to withdraw more than the current balance
  account.withdraw(1500);
  
  // Attempt to deposit a negative amount
  account.deposit(-200);
  
  // Check balance
  console.log(`Final balance: $${account.getBalance()}`);

