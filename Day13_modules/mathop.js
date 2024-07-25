// Activity 3
// Task 5
export const PI=3.14;
export const E=2.7;

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