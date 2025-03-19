const express = require("express");
const { getAllComments, getCommentsByPost, addComment, deleteComment } = require("../controller/commentController");

const router = express.Router();

router.get("/", getAllComments);  // Get all comments
router.get("/:postId", getCommentsByPost);  // Get comments for a specific post
router.post("/", addComment);  // Add a new comment
router.delete("/:commentId", deleteComment);  // Delete a comment

module.exports = router;
