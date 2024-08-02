// TODO: REVISE!!
// Activity 1
// Task 1
localStorage.setItem('greeting','Hello, World!');
const greeting=localStorage.getItem('greeting');
console.log(greeting);

// Task 2
const user={
    name:"Shreya Sanjay",
    age:23,
};
const userJSON=JSON.stringify(user);
localStorage.setItem('user'.userJSON);
const retrievedUserJSON=localStorage.getItem('user');
const retrievedUser=JSON.parse(retrievedUserJSON);
console.log(retrievedUser);


// Activity 2
// Task 3
document.getElementById('userForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);

    displaySavedData();
});

function displaySavedData(){
    const savedName=localStorage.getItem('name');
    const savedEmail=localStorage.getItem('email');

    document.getElementById('displayData').textContent=`Name: ${savedName}, Email: ${savedEmail}`;
}
document.addEventListener('DOMContentLoaded',displaySavedData);

// Task 4
console.log(`Before removal:`,localStorage.getItem('name'));
localStorage.removeItem('name');
console.log(`After removal:`,localStorage.getItem('name'));


// Activity 3
// Task 5
const string="Hello, World! from Sessions Storage";
sessionStorage.setItem("keys",string);
const retrievedString=sessionStorage.getItem("keys");
console.log(retrievedString);

// Task 6
sessionStorage.setItem("obj",objString);
const newString=JSON.parse(sessionStorage.getItem("obj",objString));
console.log(newString);


// Activity 4
// Task 7
