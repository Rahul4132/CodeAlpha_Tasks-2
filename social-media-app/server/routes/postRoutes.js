const express = require("express");

const router = express.Router();

const {
    createPost,
    getPosts
} = require("../controllers/postController");

router.post("/create", createPost);
router.get("/all", getPosts);

module.exports = router;