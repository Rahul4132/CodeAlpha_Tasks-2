const db = require("../config/db");

const createPost = (req, res) => {

    const { user_id, content } = req.body;

    const sql = `
        INSERT INTO posts (user_id, content)
        VALUES (?, ?)
    `;

    db.query(sql, [user_id, content], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Post created successfully"
        });
    });
};
const getPosts = (req, res) => {

 const sql = `
SELECT
    posts.id,
    posts.content,
    posts.created_at,
    users.username,
    users.profile_image,

    (
        SELECT COUNT(*)
        FROM likes
        WHERE likes.post_id = posts.id
    ) AS total_likes,

    (
        SELECT COUNT(*)
        FROM comments
        WHERE comments.post_id = posts.id
    ) AS total_comments

FROM posts

JOIN users
ON posts.user_id = users.id

ORDER BY posts.created_at DESC
`;

   db.query(sql, (err, result) => {

    if (err) {
        console.log(err);
        return res.status(500).json(err);
    }

    console.log(result);

    res.json(result);
});
};

module.exports = {
    createPost,
    getPosts
};