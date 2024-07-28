// Activity 1
// Task 1
function factorial(n){
    if(n===0) return 1;
    let fact=n*factorial(n-1)
    return fact;
};
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// Task 2
function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
};
console.log(fibonacci(8));
console.log(fibonacci(1));
console.log(fibonacci(2));


// Activity 2
// Task 3
function findSum(a,n){
    if(n<=0) return 0;
    return (findSum(a,n-1)+a[n-1]);
};
console.log(findSum([1,2,3,4,5],5));
console.log(findSum([10,20,30,40,50],5));
console.log(findSum([2,4,6],3));

// Task 4
function findMax(){
    
}
