document.addEventListener("DOMContentLoaded", () => {
    const userTitle = document.getElementById("user-title");
    
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((todos) => {
            const titleItem = document.createElement("li");
            titleItem.textContent = todos.title
            userTitle.appendChild(titleItem)

        })
    })
    .catch((error) => console.log(error))
})