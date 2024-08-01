// TODO: REVISE!!
// Activity 1
// Task 1
const value="Hello, World!";
localStorage.setItem("key",value);
const retrievedValue=localStorage.getItem("key");
console.log(retrievedValue);

// Task 2
const obj={
    name:"Shreya Sanjay",
    age:23,
    address:"India",
};
const objString=JSON.stringify(obj);
localStorage.setItem("obj",objString);
const retrievedObjString=localStorage.getItem("obj");
const retrievedObj=JSON.parse(retrievedObjString);
console.log(retrievedObj);


// Activity 2
// Task 3
function handleSubmit(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);

    displaySavedData();
    document.querySelector('form').reset();
}

function displaySavedData(){
    const savedName=localStorage.getItem('name');
    const savedEmail=localStorage.getItem('email');

    if(savedName && savedEmail){
        document.getElementById('demo').textContent=`Name: ${savedName}, Email:${savedEmail}`;
    }
}
document.addEventListener('DOMContentLoaded',displaySavedData);

// Task 4
function removeItem(key){
    console.log(`Content before removal of ${key}:`,localStorage.getItem(key));
    localStorage.removeItem(key);
    console.log(`Content after removal of ${key}:`,localStorage.getItem(key));
}
document.addEventListener('DOMContentLoaded',function(){
    displaySavedData();
    setTimeout(()=>removeItem('name'),5000);
});