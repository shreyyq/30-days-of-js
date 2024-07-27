// Activity 1
// Task 1
function outer(){
    const name='vscode';
    function inner(){
        console.log(name);
    }
    inner();
};
outer();

// Task 2
function createCounter(){
    let count=0;
    return{
        increment: function(){
            count++;
        },
        getCount:function(){
            return count;
        }
    }
};
const counter=createCounter();
counter.increment();
console.log(counter.getCount());