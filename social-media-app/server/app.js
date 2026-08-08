const express = require("express");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const likeRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");
const searchRoutes = require("./routes/searchRoutes");
const notificationRoutes =
    require("./routes/notificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());



app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/upload", uploadRoutes);
//app.use("/api/suggestions", suggestionRoutes);
//app.use("/api/search", searchRoutes);
//app.use( "/api/notifications",notificationRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});