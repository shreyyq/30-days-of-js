// Activity 1
// Task 1
const heading=document.getElementById('heading');
heading.textContent="DOM Manipulation in JavaScript";

// Task 2
const subHeading=document.querySelector(".subHeading");
subHeading.style.backgroundColor="green";


// Activity 2
// Task 3
const divElement=document.createElement("div");
divElement.textContent="This is a div Element";
document.body.appendChild(divElement);

// Task 4
const ulList=document.querySelector(".fruits");
const newLi=document.createElement("li");
newLi.textContent="Orange";
ulList.append(newLi);


// Activity 3
// Task 5
divElement.remove();

// Task 6
ulList.lastChild.remove();


// Activity 4
// Task 7
const image=document.getElementById('image');
image.setAttribute('src','img19.jpg');

// Task 8
//TODO:Revise
const addClass=document.getElementsByTagName("h3");
addClass[0].classList.add("newClass");

console.log(addClass[0].classList);
addClass[0].classList.remove("newClass");
console.log(addClass[0].classList);


// Activity 5
// Task 9
const para=document.getElementsByClassName("para")[0];
const button=document.getElementsByClassName("btn")[0];
button.addEventListener("click",()=>{
    para.textContent="The content of the paragraph is changed.";
});

// Task 10
button.addEventListener("mouseover",()=>{
    button.style.border="2px solid green";
});