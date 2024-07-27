// ToDO:Revise
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
    };
}

const counter=createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());


// Activity 2
// Task 3
function generateIds(){
    let lastId=0;
    return function(){
        lastId++;
        return lastId;
    };
}

const Id=generateIds();
console.log(Id());
console.log(Id());
console.log(Id());

// Task 4
function greetUser(username){
    return function(){
        console.log(`Welcome! ${username}`); 
    };
}
const greet=greetUser("Shreya");
greet();


// Activity 3
// Task 5
function createFunctionArray(){
    const functions=[];
    for(let i=0;i<=5;i++){
        functions.push(((index)=>{
            return function(){
                console.log(index);
            };
        })(i));
    }
    return functions;
}
const functionArray=createFunctionArray();
functionArray.forEach((func)=>func());


// Activity 4
// Task 6
const itemManager=(function(){
    let items=[];
    return {
        addItem:function(item){
            items.push(item);
        },
        removeItem:function(item){
            items=items.filter(i=>i!==item);
        },
        listItems:function(){
            return items.slice();
        }
    };
})();

itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
console.log(itemManager.listItems());
itemManager.removeItem("Item 1");
console.log(itemManager.listItems());


// Activity 5 //ToDo: Revise Properly
// Task 7
function memoize(fn){
    const cache={};

    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        else{
            const result=fn.apply(this,args);
            cache[key]=result;
            return result;
        }
    };
}

function slowFunction(num){
    for(let i=0;i<1e6;i++){}
    return num*2;
}

const memoizedSlowFunction=memoize(slowFunction);
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));

// Task 8
function memoizeFactorial(){
    const cache={};

    function factorial(n){
        if(n<=1){
            return 1;
        }
        else{
            if(!cache[n]){
                cache[n]=n*factorial(n-1);
            }
            return cache[n];
        }
    }
    return factorial;
}

const memoizedFactorial=memoizeFactorial();
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));