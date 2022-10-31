const task = document.querySelector('input');
const addTask = document.querySelector('button');

addTask.addEventListener('click',()=>{
    const taskList = document.querySelector('ul');  //Task list in ul
    let li = document.createElement('Li');  //create li element
    li.textContent = task.value;  //assign content to li
    taskList.appendChild(li);  //add li to ul
})



document.querySelector('.delete').addEventListener('click',()=>{
    let taskList = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    taskList.removeChild(li)
})
