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
