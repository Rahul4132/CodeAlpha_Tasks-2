const db = require("../config/db");

const searchUser = (req, res) => {

    const username = req.params.username;

    const sql = `
        SELECT id, username, profile_image
        FROM users
        WHERE username LIKE ?
    `;

    db.query(sql, [`%${username}%`], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

module.exports = {
    searchUser
};