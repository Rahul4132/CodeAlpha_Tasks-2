async function loadNotifications() {

    const response = await fetch(
        "http://127.0.0.1:5000/api/notifications/1"
    );

    const notifications =
        await response.json();

    const container =
        document.getElementById(
            "notifications"
        );

    container.innerHTML = "";

    notifications.forEach((notification) => {

        container.innerHTML += `
            <p>
                ${notification.message}
            </p>
        `;
    });
}

loadNotifications();