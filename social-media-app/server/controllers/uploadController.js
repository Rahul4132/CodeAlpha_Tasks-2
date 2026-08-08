const db = require("../config/db");

const uploadImage = (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            message: "No file uploaded"
        });
    }

    const imageName = req.file.filename;

    const userId = 1;

    const sql = `
        UPDATE users
        SET profile_image = ?
        WHERE id = ?
    `;

    db.query(sql, [imageName, userId], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Image uploaded successfully",
            image: imageName
        });
    });
};

module.exports = {
    uploadImage
};