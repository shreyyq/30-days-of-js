// Activity 3
// Task 5
sessionStorage.setItem('greeting','Bye, World!');
const greeting=sessionStorage.getItem('greeting');
console.log(greeting);

// Task 6
const user={
    name:'Felix',
    age:24
};
const userJSON=JSON.stringify(user);
sessionStorage.setItem('user',userJSON);
const retrievedUserJSON=sessionStorage.getItem('user');
const retrievedUser=JSON.parse(retrievedUserJSON);
console.log(retrievedUser);
