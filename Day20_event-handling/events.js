// Activity 1
// Task 1
const btn1=document.getElementById('button1');
btn1.addEventListener("click",()=>{
    const para1=document.getElementById('para');
    para1.textContent="Changed the content of paragraph using the button";
});

// Task 2
const btn2=document.getElementById('showImg');
const img1=document.getElementById('image');
btn2.addEventListener("dblclick",()=>{
    img1.hidden=!img1.hidden;
});


// Activity 2
// Task 3
const h1=document.getElementById('heading1');
h1.addEventListener("mouseover",()=>{
    h1.style.backgroundColor="green";
});

// Task 4
h1.addEventListener("mouseout",()=>{
    h1.style.backgroundColor="";
});


// Activity 3
// Task 5
const inputField=document.getElementById('inputField');
inputField.addEventListener("keydown",(event)=>{
    console.log(`Key Pressed: ${event.key}`);
});

// Task 6
const input=document.getElementById('input');
const para2=document.getElementById('displayParagraph');
input.addEventListener("keyup",()=>{
    para2.textContent=input.value;
});

