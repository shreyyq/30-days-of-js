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
const display=document.getElementById("demo");
function handleSubmit(e){
    e.preventDefault();
    const formdata=new FormData(e.target);
    const object={};
    formdata.forEach((value,key)=>{
        object[key]=value;
    });
    localStorage.setItem("formData",JSON.stringify(object));
}
document.querySelector("form").addEventListener("submit",handleSubmit);

window.onload=function(){
    const retrievedObjectString=localStorage.getItem("formData");
    const retrievedObject=JSON.parse(retrievedObjectString);
    const name=retrievedObject.name;
    const email=retrievedObject.email;
    display.innerHTML=`Name: ${name} and Email:${email}`;
};
