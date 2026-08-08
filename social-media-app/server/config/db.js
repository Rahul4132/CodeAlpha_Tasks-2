const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.join(__dirname, "../.env")
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rahul@4132",
    database: "social_media"
});



db.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("MySQL connected successfully");
});

module.exports = db;