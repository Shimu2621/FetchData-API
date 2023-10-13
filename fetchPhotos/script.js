document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((photos) => {
            const listItem = document.createElement("li");
            listItem.textContent = photos.url 
            userList.appendChild(listItem)
            //console.log(photos.url);
        })
    })
    .catch((error) => console.log(error))
})