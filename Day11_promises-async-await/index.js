//ToDo: Revise
// Activity 1
// Task 1
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },2000)
});
promiseOne.then(function(){
    console.log("Promise one Consumed");
});

// Task 2
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve()
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    },2000)
});
promiseTwo
.then(function(){
    console.log("Promise two Consumed");
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log(`Promise two was either Resolved or Rejected`));


// Activity 2
// Task 3
const userData=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"shreya",password:123,isLoggedIn:true})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    },2000)
})
userData
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log(`The user data was either fetched or not fetched`));


// Activity 3
// Task 4
