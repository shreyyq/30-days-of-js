// Activity 1
// Task 1
localStorage.setItem('greeting','Hello,World!');
const greeting=localStorage.getItem('greeting');
console.log(greeting);

// Task 2
const user={
    name:'Mark',
    age:26
};
const userJSON=JSON.stringify(user);
localStorage.setItem('user',userJSON);
const retrievedUserJSON=localStorage.getItem('user');
const retrievedUser=JSON.parse(retrievedUserJSON);
console.log(retrievedUser);


// Activity 2
// Task 4
console.log(`Before removal:`,localStorage.getItem('name'));
localStorage.removeItem('name');
console.log(`After removal:`,localStorage.getItem('name'));


