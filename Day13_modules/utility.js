// Activity 1
// Task 1
export function adds(n1,n2){
    return n1+n2;
}

// Task 2
const person={
    name:'javascript',
    isLoggedIn:true,
    age:30,
    greet: function(){
    return `Hello,my name is ${this.name} and age is ${this.age}.`;
    },
    celebrateBday: function(){
        this.age+=1;
        return `Happy Birthday! I am ${this.age} years old.`;
    }
};
export {person};


// Activity 2
// Task 3
export function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}
export function multiply(a,b){
    return a*b;
}
export function divide(a,b){
    if(b===0){
        throw new Error('Division by zero is not allowed');
    }
    return a/b;
};

// Task 4
export default function welcome(name){
    return `Welcome to JS Modules, ${name}`;
};


// Activity 3
// Task 5

