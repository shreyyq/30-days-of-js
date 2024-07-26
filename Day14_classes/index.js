// Activity 1
// Task 1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hi! ${this.name} of ${this.age} years, Welcome!`);
    }

    //Task 2
    newAge(){
        this.age+=1;
        console.log(`After one year ${this.name} will be ${this.age} years old.`);
    }
}
const me=new Person("Shreya",23);
me.greet();
me.newAge();


// Activity 2
// Task 3
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
    }
    info(){
        console.log(`Student ID of ${this.name} is ${this.studentId}.`);
    }
    // Task 4
    greet(){
        console.log(`Hi! ${this.name} of ${this.age} years with a Student ID ${this.studentId}, Welcome!`);
    }
}
const stud1=new Student("Mark",25,200);
stud1.info();
stud1.greet();