async function loadSuggestions() {

    const response = await fetch(
        "http://127.0.0.1:5000/api/suggestions"
    );

    const users = await response.json();

    const container =
        document.getElementById("suggestions");

    container.innerHTML = "";

    users.forEach((user) => {

        container.innerHTML += `
            <div class="suggestion-card">

                <img
                    src="http://127.0.0.1:5000/uploads/${user.profile_image}"
                    width="40"
                >

                <span>${user.username}</span>

                <button
                    class="follow-btn"
                    onclick="followUser(${user.id})"
                >
                    Follow
                </button>

            </div>
        `;
    });
}

loadSuggestions();