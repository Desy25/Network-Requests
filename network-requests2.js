const url = 'https://jsonplaceholder.typicode.com/todos/4';

async function fetchTodoById() {
    try {
        const response = await fetch(url);
        const todo = await response.json();

        const h2 = document.createElement('h2');
        h2.textContent = todo.title;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        
        const todoDetails = document.querySelector('.todo-details');
        todoDetails.appendChild(h2);
        todoDetails.appendChild(checkbox);
    } catch (error) {
        console.error(error);
    }
}

fetchTodoById();