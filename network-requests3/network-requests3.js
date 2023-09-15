const url = "https://jsonplaceholder.typicode.com/posts";
const form = document.querySelector('form');

async function sendData() {
    const title = document.getElementById("todo-title").value;
    const completed = document.getElementById("todo-completed").checked;

    const newPost = {
        title: title,
        completed: completed
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })

    const result = await response.json()
    console.log(response);
    console.log(result);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendData();
})
