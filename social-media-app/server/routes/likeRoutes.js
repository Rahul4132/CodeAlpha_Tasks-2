const express = require("express");

const router = express.Router();

const { addLike } = require("../controllers/likeController");

router.post("/add", addLike);

module.exports = router;