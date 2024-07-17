// Activity 1
// Task 1
function evenOrOdd(num){
    if(num%2===0) return console.log(`${num} is even`)
        else return console.log(`${num} is odd`)
}
evenOrOdd(15);
evenOrOdd(24);

// Task 2
function square(a){
    let sq=a*a;
    return console.log(`sqaure of ${a} is ${sq}`);
}
square(5)
square(12)


// Activity 2
// Task 3
function max(n1,n2){
    if(n1>n2) return console.log(`${n1} is maximum`)
        else return console.log(`${n2} is maximum`)
}
max(5,4)
max(9,10)

// Task 4
function concat(s1,s2){
    return console.log(s1+ " "+s2)
}
concat('hi','shre')
concat("hello","world!")


// Activity 3
// Task 5
sum=(a,b)=>{
    return console.log(`sum of ${a} and ${b} is ${a+b}`)
};
sum(3,4)
sum(7,90)

// Task 6
checkChar=(word)=>{
    if(word.includes("a") || word.includes("A")){
        return true;
    }
    else{
        return false;
    }
};
console.log(checkChar('shreya'));
console.log(checkChar('fulls'));


// Activity 4
// Task 7
 product=(i,j=5)=>{
    return (i*j);
};
console.log(product(10));
console.log(product(2));

// Task 8
greeting=(name,age=18)=>{
    return console.log(`Hi ${name} of ${age} years welcome!`)
};
greeting('haechan');



// Activity 5
// Task 9
function1=(n)=>{
    console.log(`hello`);
};

function function2(func,n){
    for(let i=1;i<=n;i++){
        func(n);
    }
}
function2(function1,5);

// Task 10
fun1=(value)=>{
    val=value;
    return val;
}

fun2=(val)=>{
    console.log(`result is ${val}`);
}

highFunction=(func1,func2,value)=>{
    valueAssign=fun1(value);
    fun2(valueAssign);
};
highFunction(fun1,fun2,5);