//todo:revise
// Activity 1
// Task 1
function validateAge(age){
    if(age<18){
        throw new Error(`Age must be 18 or older`);
    }
    return true;
}

try{
    validateAge(16);
} catch (error){
    console.error(`Validation failed:`,error.message);
}

// Task 2
function divide(n1,n2){
    if(n2===0){
        throw new Error(`Dominator should not be zero`);
    }
    return n1/n2;
};

try{
    let result=divide(10,0);
    console.log(`Result:`,result);
} catch (error){
    console.log(`Division failed:`,error.message);
};


// Activity 2
// Task 3
function convertToNumber(value){
    try{
        let number=parseFloat(value);
        if(isNaN(number)){
            throw new Error(`Invalid Number Format`);
        }
        console.log(`Converted number:`,number);
    } catch (error){
        console.error(`Error:`,error.message);
    } finally{
        console.log(`Conversion attempt completed`);
    }
};
convertToNumber('123.45');
convertToNumber('abc');


// Activity 3
// Task 4
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name='CustomError';
    }
}
function testCustomError(){
    throw new CustomError("This is a custom error message");
}

try{
    testCustomError();
}
catch(error){
    if(error instanceof CustomError){
        console.error(`Caught a Custom Error:`,error.message);
    }
    else{
        console.error(`Caught an unexpected error:`,error.message);
    }
};


// Task 5
class InvalidInputError extends Error{
    constructor(message){
        super(message);
        this.name='InvalidInputError';
    }
};
function processInput(input){
    if(typeof input!=='string'|| input.trim()===''){
        throw new InvalidInputError('Input must be a non empty string');
    }
    console.log(`Processing input:`,input);
};

try{
    processInput('');
} 
catch(error){
    if(error instanceof InvalidInputError){
        console.error(`Invalid Input Error:`,error.message);
    }
    else{
        console.error(`Unexpected Error:`,error.message);
    }
}
finally{
    console.log('Input processing attempt Completed');
};

try{
    processInput('valid input');
} 
catch(error){
    if(error instanceof InvalidInputError){
        console.error(`Invalid Input Error:`,error.message);
    }
    else{
        console.error(`Unexpected Error:`,error.message);
    }
}
finally{
    console.log('Input processing attempt Completed');
};


// Activity 4
// Task 6
function createRandomPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSuccess=Math.random()>0.5;
            if(isSuccess){
                resolve('Promise Resolved Successfully');
            }
            else{
                reject('Promise rejected due to failure');
            }
        },1000)
    })
};

createRandomPromise()
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.error('Caught an error:',error);
});

// Task 7
function createRandomPromise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isSuccess=Math.random()>0.5;
            if(isSuccess){
                resolve('Promise Resolved Successfully');
            }
            else{
                reject('Promise rejected due to failure');
            }
        },1000)
    })
};

async function handlePromise(){
    try{
        const result=await createRandomPromise2();
        console.log(result);
    }
    catch(error){
        console.error('Caught an error:',error);
    }
};
handlePromise();


// Activity 5
// Task 8
const invalidUrl="https://invalid-url.example.com";

fetch(invalidUrl)
.then(response=>{
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data=>{
    console.log(`Data Received:`,data);
})
.catch(error=>{
    console.error(`Caught an error:`,error.message);
});

// Task 9
async function fetchDataFromInvalidUrl(){
    const invalidUrl2="https://invalid-url.example.com";

    try{
        const response=await fetch(invalidUrl2);

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data=await response.json();
        console.log(`Data Received:`,data);
    }
    catch(error){
        console.error(`Caught an error:`,error.message);
    }
};
fetchDataFromInvalidUrl();