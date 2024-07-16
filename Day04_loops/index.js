// Activity 1
// Task 1
for(let i=1;i<=10;i++){
    console.log(i);
}

// Task 2
const n=5;
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
}


// Activity 2
// Task 3
let sum=0;
let i=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(`sum of nos form 1 to 10 = ${sum}`);

// Task 4
let j=10;
while(j>0){
    console.log(j);
    j--;
}


// Activity 3
// Task 5
let k=0;
do{
    k++;
    console.log(k);
}
while(k<5);

// Task 6
let fact=1;
let x=5;
let f=x;
do{
    fact=fact*x;
    x=x-1;
}
while(x>1)
    console.log(`factorial of ${f} is ${fact}`);


// Activity 4
// Task 7
let m=5;
let str="";
for(let i=0;i<=m;i++)
{
    for(let j=1;j<=i;j++)
    {
        str=str+"* ";
    }
    console.log(str);
    str="";
}


// Activity 5
// Task 8
for(let i=1;i<=10;i++)
{
    if(i===5) continue;
    console.log(i);
}

// Task 9
for(let i=1;i<=10;i++)
{
    if(i>=7) break;
    console.log(i);
}