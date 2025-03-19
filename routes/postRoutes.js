const express = require("express");
const { getAllPosts, getPostWithComments, addPost, deletePost } = require("../controller/postController");

const router = express.Router();

router.get("/", getAllPosts);  // Get all posts
router.get("/:postId", getPostWithComments);  // Get post with comments
router.post("/", addPost);  // Add a new post
router.delete("/:postId", deletePost);  // Delete a post

module.exports = router;
