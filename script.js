function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'task-details';
    detailsDiv.innerHTML = `<strong>${taskText}</strong>
                            <div class="task-date">${taskDateValue ? new Date(taskDateValue).toLocaleString() : ''}</div>`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.onclick = () => editTask(li, detailsDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.onclick = () => li.remove();

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(detailsDiv);
    li.appendChild(actionsDiv);

    taskList.appendChild(li);

    // Reset input
    taskInput.value = '';
    taskDate.value = '';
}

function editTask(taskItem, detailsDiv) {
    const newTaskText = prompt('Edit your task:', detailsDiv.querySelector('strong').textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        detailsDiv.querySelector('strong').textContent = newTaskText.trim();
    }
}