// Activity 1
// Task 1
let a=[1,2,3,4,5];
console.log(`array is ${a}`);

// Task 2
let first=a[0];
let last=a[4];
console.log(`the first element of the array is ${first} and the last element is ${last}`);


// Activity 2
// Task 3
a.push(6);
console.log(a);

// Task 4
a.pop();
console.log(a);

// Task 5
a.shift();
console.log(a);

// Task 6
a.unshift(1);
console.log(a);


// Activity 3
// Task 7
const arr=[2,4,6,8,10,12];
const output=arr.map((num)=>num*=num)
console.log(arr);
console.log(output);

// Task 8
const num=[1,2,3,4,5,6,7,8,9,10];
const even=num.filter((num)=>num%2===0)
console.log(num);
console.log(even);

// Task 9
const n=[5,10,15,20,25];
const sum=n.reduce((total,currentValue)=>{
    return total+currentValue;
},0)
console.log(`sum of array ${n} is ${sum}`);


// Activity 4
// Task 10
let array=[12,13,56,77,6,34,23,54];
for(let i=0;i<array.length;i++){
    console.log(`element at index ${i} is ${array[i]}`);
}

// Task 11
array.forEach((element)=>console.log(element));


// Activity 5
// Task 12
let salary=[
    ["ABC",23,1000],
    ["DEF",34,3400],
    ["GHI",81,7000],
];
console.log(salary);

// Task 13
console.log(salary[0][2]);
console.log(salary[1][1]);