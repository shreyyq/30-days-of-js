// Activity 4
// Task 7
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get getname(){
        console.log(`Hello! ${this.firstName} ${this.lastName}`);
    }
    // Task 8
    set changeName(newLastName){
        this.lastName=newLastName;
    }
};

const a=new Person("Shreya","Sanjay");
a.getname;
// Task 8
a.changeName='Lee';
console.log(`Hello! ${a.firstName} ${a.lastName}`);


// Activity 5
// Task 9
class Account{
    #balance;
    constructor(initialBalance=0){
        this.#balance=initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
        }
        else{
            console.log(`Deposit amount must be valid`);
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.#balance}`);
        }
        else if(amount>this.#balance){
            console.log(`Insufficient Balance`);
        }
        else{
            console.log(`Withdrawal amount must be valid`);
        }
    }

    getBalance(){
        return this.#balance;
    }
};

// Task 10
const myAccount=new Account(100);
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(200);
myAccount.deposit(-20);
myAccount.deposit(-10);
console.log(`Final balance: ${myAccount.getBalance()}`);