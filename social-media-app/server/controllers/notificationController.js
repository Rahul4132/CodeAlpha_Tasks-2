const db = require("../config/db");

const getNotifications = (req, res) => {

    const userId = req.params.id;

    const sql = `
        SELECT *
        FROM notifications
        WHERE receiver_id = ?
        ORDER BY created_at DESC
    `;

    db.query(sql, [userId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

module.exports = {
    getNotifications
};