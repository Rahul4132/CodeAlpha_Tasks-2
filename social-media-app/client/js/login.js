const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

localStorage.setItem(
    "user",
    JSON.stringify(data.user)
);

alert(data.message);

window.location.href = "profile.html";

    } catch (error) {

        console.log(error);

    }

});