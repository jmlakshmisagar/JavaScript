const totalTasks = 3;
let completedTasks = 0;

const addTaskButton = document.getElementById('addTask');
const taskList = document.querySelector('.task-list');
const progressBar = document.querySelector('.progress-bar');

let myTasks = JSON.parse(localStorage.getItem('myTask')) || [];

addTaskButton.addEventListener('click', () => {
    if (myTasks.length) {
        myTasks.forEach((task, i) => {
            const ul = document.createElement('ul');
            ul.innerHTML = `
                <li>
                    <label>
                        <input type="checkbox" class="task-checkbox" />
                        <textarea rows="1">${task}</textarea>
                    </label>
                </li>
            `;
            taskList.appendChild(ul);
        });
    } else {
        for (let i = 1; i <= totalTasks; i++) {
            const ul = document.createElement('ul');
            ul.innerHTML = `
                <li>
                    <label>
                        <input type="checkbox" class="task-checkbox" />
                        <textarea placeholder="Enter the Task ${i}" rows="1"></textarea>
                    </label>
                </li>
            `;
            taskList.appendChild(ul);
        }
    }

    addTaskButton.remove();

    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            completedTasks = Array.from(checkboxes).filter(c => c.checked).length;
            updateProgress();

            const textarea = cb.closest('label').querySelector('textarea');
            if (cb.checked) {
                textarea.style.textDecoration = 'line-through';
            } else {
                textarea.style.textDecoration = 'none';
            }
        });
    });

});

taskList.addEventListener('input', () => {
    const taskData = Array.from(taskList.querySelectorAll('textarea')).map(textarea => textarea.value);
    localStorage.setItem('myTask', JSON.stringify(taskData));
});

function updateProgress() {
    const percent = (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${percent}%`;
    progressBar.innerHTML = `<p>✌🏻 ${completedTasks}/${totalTasks}</p>`;
}
