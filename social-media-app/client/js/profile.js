const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    document.getElementById("username").innerText = user.username;
    document.getElementById("email").innerText = user.email;
    document.getElementById("bio").innerText = user.bio || "No bio available";
}