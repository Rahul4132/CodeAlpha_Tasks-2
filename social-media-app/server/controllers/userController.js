const db = require("../config/db");

const registerUser = (req, res) => {
    const { username, email, password } = req.body;

    const sql = `
        INSERT INTO users(username, email, password)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "User registered successfully"
        });
    });
};

const loginUser = (req, res) => {

    const { email, password } = req.body;

    const sql = `
        SELECT * FROM users
        WHERE email = ? AND password = ?
    `;

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Login failed"
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.json({
            message: "Login successful",
            user: result[0]
        });

    });
};
module.exports = {
    registerUser,
    loginUser
};