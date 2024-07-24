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
