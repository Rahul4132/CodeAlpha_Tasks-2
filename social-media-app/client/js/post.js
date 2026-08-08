const button = document.getElementById("postButton");

button.addEventListener("click", async () => {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const postData = {
       user_id: 1,
        content: document.getElementById("content").value
    };

    const response = await fetch(
        "http://localhost:5000/api/posts/create",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(postData)
        }
    );

    const data = await response.json();

    alert(data.message);
});