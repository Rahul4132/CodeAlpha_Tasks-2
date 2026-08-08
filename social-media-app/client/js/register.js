const form = document.getElementById("registerForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const userData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

        alert(data.message);

    } catch (error) {

        console.log(error);

    }

});