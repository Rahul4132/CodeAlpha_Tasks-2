const db = require("../config/db");

const addComment = (req, res) => {

    const { post_id, user_id, comment } = req.body;

    const sql = `
        INSERT INTO comments (post_id, user_id, comment)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [post_id, user_id, comment], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Comment added successfully"
        });
    });
};
const deleteComment = (req, res) => {

    const commentId = req.params.id;

    const sql = `
        DELETE FROM comments
        WHERE id = ?
    `;

    db.query(sql, [commentId], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Comment deleted successfully"
        });
    });
};
const getComments = (req, res) => {

    const postId = req.params.postId;

    const sql = `
      SELECT comments.id, comments.comment, users.username
        FROM comments
        JOIN users
        ON comments.user_id = users.id
        WHERE comments.post_id = ?
    `;

    db.query(sql, [postId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

module.exports = {
    addComment,
    getComments,
    deleteComment
};