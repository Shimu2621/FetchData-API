document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById("post-list");

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((comments) => {
            const listItem = document.createElement("li");
            listItem.textContent = comments.name
            postList.appendChild(listItem)
            //console.log(comments.name);
        })
    })


    .catch((error) => console.log(error))
})