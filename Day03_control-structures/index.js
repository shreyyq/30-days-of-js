// Activity 1
// Task1
let num=-90;
if(num===0) console.log(`${num} is zero`);
    else if(num>0) console.log(`${num} is positive`);
    else console.log(`${num} is negative`);

// Task 2
let age=23;
if(age>=18) console.log(`person is eligible to vote`)
    else console.log(`person is not eligible to vote`)


// Activity 2
//Task 3
let n1=5;
let n2=27;
let n3=11;
if(n1>n2 && n1>n3) console.log(`${n1} is the largest`)
    else if(n2>n3) console.log(`${n2} is the largest`)
        else console.log(`${n3} is the largest`)


// Activity 3
// Task 4
const days=7;
switch(days){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("enter a valid day");
}

// Task 5
const score=77;
switch(true){
    case score>=90:
        console.log('A');
        break;
    case score>=80:
        console.log('B');
        break;
    case score>=70:
        console.log('C');
        break;
    case score>=60:
        console.log('D');
        break;
    default:
        console.log('F');
}


// Activity 4
// Task 6
const number=48;
const isEvenOdd= number%2===0? "Even":"Odd";
console.log(isEvenOdd);


// Activity 5
// Task 7
const year=2024;
const isLeap= year%100===0? year%400===0:year%4===0;
console.log(isLeap);