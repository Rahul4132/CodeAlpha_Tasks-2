const db = require("../config/db");

const getSuggestions = (req, res) => {

    const sql = `
        SELECT id, username, profile_image
        FROM users
        WHERE id != 1
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

module.exports = {
    getSuggestions
};