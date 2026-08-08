const db = require("../config/db");

const addLike = (req, res) => {

    const { post_id, user_id } = req.body;

    const sql = `
        INSERT INTO likes (post_id, user_id)
        VALUES (?, ?)
    `;

    db.query(sql, [post_id, user_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Post liked successfully"
        });
    });
};

module.exports = {
    addLike
};