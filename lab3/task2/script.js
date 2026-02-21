const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (!taskText) return;


    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    span.textContent = taskText;
    deleteButton.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" 
       width="18" height="18" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       stroke-width="2" 
       stroke-linecap="round" 
       stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-2 14H7L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4h6v2"></path>
  </svg>
`;
    deleteButton.classList.add('delete-btn');

    
    checkbox.addEventListener('change', () => {
        li.classList.toggle('done');
    });

    
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    input.value = '';
});