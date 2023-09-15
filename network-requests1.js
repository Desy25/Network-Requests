const url = 'https://jsonplaceholder.typicode.com/todos';

const listOfTodos = async () => {
    try {
        const response = await fetch(url);
        const todos = await response.json();
        console.log(todos);
        const todoList = document.querySelector('.todo-list');

        todos.forEach((element) => {
            const li = document.createElement('li');
            li.textContent = element.title;
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
listOfTodos();