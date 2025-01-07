function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.onclick = () => listItem.remove();
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}