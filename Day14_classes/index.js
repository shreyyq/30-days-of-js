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
    // Task 5
    static hello(){
        console.log("Hello!");
    } 
}

const me=new Person("Shreya",23);
me.greet();
me.newAge();


// Activity 2
// Task 3
class Student extends Person{
    // Task 6
    static studentCount=0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
        Student.studentCount+=1;
    }
    info(){
        console.log(`Student ID of ${this.name} is ${this.studentId}.`);
    }
    // Task 4
    greet(){
        console.log(`Hi! ${this.name} of ${this.age} years with a Student ID ${this.studentId}, Welcome!`);
    }
    // Task 6
    static logStudentCount(){
        console.log(`Total no of Students: ${Student.studentCount}`);
    }
}
const stud1=new Student("Mark",25,200);
stud1.info();
stud1.greet();
Student.logStudentCount();


// Activity 3
// Task 5
Person.hello();

// Task 6
const stud2=new Student("Haechan",24,660);
stud2.info();
stud2.greet();
Student.logStudentCount();