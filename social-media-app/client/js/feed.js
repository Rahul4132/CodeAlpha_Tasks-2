async function loadPosts() {

    const response = await fetch(
        "http://127.0.0.1:5000/api/posts/all"
    );

    const posts = await response.json();

    const container = document.getElementById("posts");

    container.innerHTML = "";

    posts.forEach((post) => {

        container.innerHTML += `
            <div class="post-card">
<div class="profile-section">

    <img
        src="http://127.0.0.1:5000/uploads/${post.profile_image}"
    >

    <h3>${post.username}</h3>

</div>

                <p>${post.content}</p>

                <button onclick="likePost(${post.id})">
                    Like ❤️
                </button>
                <button onclick="followUser(${post.id})">
    Follow 👤
</button>
                <input
                    type="text"
                    id="comment-${post.id}"
                    placeholder="Write a comment"
                >

                <button onclick="addComment(${post.id})">
                    Comment
                </button>

                <div id="comments-${post.id}"></div>

                <hr>

            </div>
        `;

        loadComments(post.id);
    });
}

async function likePost(postId) {

    const response = await fetch(
        "http://127.0.0.1:5000/api/likes/add",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                post_id: postId,
                user_id: 1
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}

async function addComment(postId) {

    const commentText = document.getElementById(
        `comment-${postId}`
    ).value;

    const response = await fetch(
        "http://127.0.0.1:5000/api/comments/add",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                post_id: postId,
                user_id: 1,
                comment: commentText
            })
        }
    );

    const data = await response.json();

    alert(data.message);

    loadComments(postId);
}
async function followUser(userId) {

    const response = await fetch(
        "http://127.0.0.1:5000/api/followers/follow",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                follower_id: 1,
                following_id: userId
            })
        }
    );

    const data = await response.json();

    alert(data.message);
}

async function loadComments(postId) {

    const response = await fetch(
        `http://127.0.0.1:5000/api/comments/${postId}`
    );

    const comments = await response.json();

    const container = document.getElementById(
        `comments-${postId}`
    );

    container.innerHTML = "";

    comments.forEach((comment) => {

        container.innerHTML += `
    <div class="comment-box">

        <p>
            <strong>${comment.username}</strong>
            ${comment.comment}
        </p>

        <button onclick="deleteComment(${comment.id})">
            Delete
        </button>

    </div>
`;
    });
}
async function deleteComment(commentId) {

    await fetch(
        `http://127.0.0.1:5000/api/comments/delete/${commentId}`,
        {
            method: "DELETE"
        }
    );

    location.reload();
}

loadPosts();