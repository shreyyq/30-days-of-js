// Activity 1
// Task 1
import {adds} from "./utility.js";
console.log(adds(2,3));

// Task 2
import { person } from "./utility.js";
console.log(person.greet());
console.log(person.celebrateBday());
console.log(person.greet());


// Activity 2
// Task 3
import {add,subtract,multiply,divide} from './utility.js';

console.log('Addition:',add(5,3));
console.log('Subtraction:',subtract(5,3));
console.log('Multiply:',multiply(5,3));
try{
    console.log('Division:',divide(5,0));
}
catch(error){
    console.error(error.message);
};

// Task 4
import welcome from "./utility.js";
console.log(welcome('Shreya'));


// Activity 3
// Task 5
import * as math from './mathop.js';

console.log('PI:',math.PI);
console.log('E:',math.E);
console.log('Addition:',add(5,5));
console.log('Subtraction:',subtract(5,5));
console.log('Multiply:',multiply(5,5));
try{
    console.log('Division:',divide(5,5));
}
catch(error){
    console.error(error.message);
};
