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
    
}