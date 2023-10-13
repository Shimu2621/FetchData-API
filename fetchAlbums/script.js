document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((albums) => {
            //console.log(albums.title);
            const listItem = document.createElement("li");
            listItem.textContent = albums.title
            userList.appendChild(listItem)
        })
    })
    .catch((error) => console.log(error))
})