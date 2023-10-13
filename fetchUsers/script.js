document.addEventListener("DOMContentLoaded", () => {
    const userData = document.getElementById("user-data");

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((users) => {
            const dataList = document.createElement("li");
            dataList.textContent = users.email
            userData.appendChild(dataList)
        })
    })
    .catch((error) => console.log(error))
})