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
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript", password:123})
        }
        else{
            reject(`ERROR in Promise Four`)
        }
    },2000)
});

async function consumePromiseThree(){
        const response=await promiseThree
        console.log(response);
}

consumePromiseThree();

// Task 5
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"java", password:123})
        }
        else{
            reject(`ERROR`)
        }
    },2000)
});

async function consumePromiseFour(){
    try{
        const response=await promiseFour
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}

consumePromiseFour();


// Activity 4
// Task 6
fetch (`https://api.github.com/users/shreyyq`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));

// Task 7
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPosts();


// Activity 5
// Task 8
const bulbasaur_pokemons_url='https://pokeapi.co/api/v2/pokemon/bulbasaur';
const raticate_pokemons_url='https://pokeapi.co/api/v2/pokemon/raticate';
const kakuna_pokemons_url='https://pokeapi.co/api/v2/pokemon/kakuna';

async function getPromise(url){
    return fetch(url).then(response=>{
        if(!response.ok){
            throw new Error(`Network response was not ok`);
        }
        return response.json();
    });
}

let promise1=getPromise(bulbasaur_pokemons_url);
let promise2=getPromise(raticate_pokemons_url);
let promise3=getPromise(kakuna_pokemons_url);

Promise.all([promise1,promise2,promise3]).then(result=>{
    console.log({result});
})
.catch(error=>{
    console.log('An Error Occurred');
});

// Task 9
Promise.race([promise1,promise2,promise3]).then(result=>{
    console.log(JSON.parse(result));
})
.catch(error=>{
    console.log('An Error Occurred');
});