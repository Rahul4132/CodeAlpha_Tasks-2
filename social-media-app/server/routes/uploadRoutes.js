const express = require("express");

const router = express.Router();

const upload = require("../config/multer");

const {
    uploadImage
} = require("../controllers/uploadController");

router.post(
    "/image",
    upload.single("image"),
    uploadImage
);

module.exports = router;