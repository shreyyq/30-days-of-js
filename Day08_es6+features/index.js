// Activity 1
// Task 1
let name="Shreya";
let age=23;
console.log(`My name is ${name} and age is ${age}`);

// Task 2
console.log(`This is a multi line string,
    which goes into a second line.`);


// Activity 2
// Task 3
const a=[1,2,3,4,5];
const[first,second,third,fourth,fifth]=a;
console.log(first);
console.log(second);

// Task 4
const book={
    title:'OS',
    author:'ABC',
    year:1998
};
const {title,author,year}=book;
console.log(`The title of the book is ${title} and author is ${author}`);


// Activity 3
// Task 5 (spread operator)
const b=[6,7,8,9,10];
const arr=[...a,...b];
console.log(arr);

// Task 6 (rest operator)
function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0);
}
console.log("Sum:",sum(1,2,3,4,5));
console.log("Sum:",sum(10,20));


// Activity 4
// Task 7
function product(n1,n2=1){
    return n1*n2;
}
console.log((product(5)));
console.log((product(5,2)));


// Activity 5 //TODO: Revise
// Task 8
const person={
    name,
    age,
    greet(){
        console.log(`I am ${this.name} and I am ${this.age}`);
    },
    ["isAdult"](){
        return this.age>=18;
    }
};
person.greet();
console.log(person.isAdult());

// Task 9
let property1="first_name";
let property2="last_name";

const message={
    [property1]:'Java',
    [property2]:'Script',

    name(){
        console.log(`Hello, I am learning ${this[property1]}${this[property2]}.`);
    }
};
console.log(person.first_name);
console.log(person.last_name);
message.name();