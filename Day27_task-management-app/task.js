document.addEventListener('DOMContentLoaded',()=>{
const taskForm=document.getElementById('task-form');
const taskList=document.getElementById('task-list');

let tasks=[];
let editMode=false;
let editTaskId=null;

taskForm.addEventListener('submit',function(event){
    event.preventDefault();

    const titleInput=document.getElementById('task-title');
    const descInput=document.getElementById('task-desc');
    const dateInput=document.getElementById('task-date');

    if(editMode){
    const task= tasks.find(t=>t.id===editTaskId);
    task.title=titleInput.value.trim();
    task.description=descInput.value.trim();
    task.dueDate=dateInput.value;
    editMode=false;
    editTaskId=null;
    taskForm.querySelector('button').textContent="Add Text";
    }
    else{
        const task={
        id: Date.now(),
        title: titleInput.value.trim(),
        description: descInput.value.trim(),
        dueDate: dateInput.value,
        completed:false
    };
    tasks.push(task);
    }

    displayTasks();
    taskForm.reset();
});

function displayTasks(){
    taskList.innerHTML='';

    tasks.forEach(task=>{
        const taskItem=document.createElement('li');
        taskItem.classList.add('task-item');
        if(task.completed){
            taskItem.classList.add('completed');
        }
        taskItem.innerHTML=`
        <input type="checkbox" ${task.completed ? 'checked':''} onclick="toggleComplete(${task.id})">
        <span>${task.title} - ${task.description} (Due: ${task.dueDate})</span>
        <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function toggleComplete(id){
    const task=tasks.find(t=>t.id===id);
    if(task){
        task.completed=!task.completed;
        displayTasks();
    }
}

function editTask(id){
    const task=tasks.find(t=>t.id===id);
    if(task){
        document.getElementById('task-title').value=task.title;
        document.getElementById('task-desc').value=task.description;
        document.getElementById('task-date').value=task.dueDate;

        editMode=true;
        editTaskId=id;
        
        taskForm.querySelector('button').textContent='Update Task';
    }
}

function deleteTask(id){
    if(confirm('Are you sure you want to delete this task?')){
        tasks=tasks.filter(task=>task.id!==id);
        displayTasks();
    }
}

window.toggleComplete=toggleComplete;
window.editTask=editTask;
window.deleteTask=deleteTask;

});