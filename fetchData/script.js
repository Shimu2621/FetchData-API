//load all element by using this listener 
document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/posts")         //calling API and copy the link
        .then((response) => response.json())                    //getting as a response and converting all the data into Json
        .then((data) => {                                       //getting the actual data and this data are array
            data.forEach((post) => {                            //foreach loop iterate all object post element
              const listItem = document.createElement("li");    //store li element into the listItem as a object
              listItem.textContent = post.title                 //Add all post title as a text in the li(listitem) 
              userList.appendChild(listItem)                    //listeitem adding in the userlist by using appenchild method
            //  console.log(post.title);

            })
        })
       
        .catch((error) => console.log(error))                    //if anything is error
})