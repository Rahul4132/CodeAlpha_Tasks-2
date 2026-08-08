const button = document.getElementById(
    "searchButton"
);

button.addEventListener("click", async () => {

    const username = document.getElementById(
        "searchInput"
    ).value;

    const response = await fetch(
        `http://127.0.0.1:5000/api/search/${username}`
    );

    const users = await response.json();

    console.log(users);

    alert(`${users.length} user(s) found`);
});