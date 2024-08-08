document.addEventListener("DOMContentLoaded",function(){

const taskForm=document.getElementById('task-form');
const taskList=document.getElementById('task-list');
let taskIndex=1;

taskForm.addEventListener("submit",function(event){
    event.preventDefault();

    const taskInput=document.getElementById('task-input');
    const taskText=taskInput.value.trim();

    if(taskText!==""){
        const taskItem=document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.textContent=`${taskIndex}  - ${taskText}`;

        taskItem.addEventListener("click",function(){
            console.log('completed');
            this.classList.toggle('completed');
        });

        taskList.appendChild(taskItem);
        taskIndex++;
        taskInput.value="";
    }
    });
})
