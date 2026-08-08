const db = require("../config/db");

const followUser = (req, res) => {

    const { follower_id, following_id } = req.body;

    const sql = `
        INSERT INTO followers (
            follower_id,
            following_id
        )
        VALUES (?, ?)
    `;

    db.query(
        sql,
        [follower_id, following_id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "User followed successfully"
            });
        }
    );
};

module.exports = {
    followUser
};