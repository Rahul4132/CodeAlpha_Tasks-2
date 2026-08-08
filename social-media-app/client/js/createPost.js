const button =
    document.getElementById(
        "createPostButton"
    );

button.addEventListener("click", async () => {

    const content =
        document.getElementById(
            "postContent"
        ).value;

    const response = await fetch(
        "http://127.0.0.1:5000/api/posts/create",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                user_id: 1,
                content: content
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    location.reload();
});