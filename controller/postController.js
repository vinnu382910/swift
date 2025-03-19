const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// ✅ Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
};

// ✅ Get a single post with its comments
const getPostWithComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findOne({ id: postId });

        if (!post) return res.status(404).json({ message: "Post not found" });

        const comments = await Comment.find({ postId });
        res.status(200).json({ ...post._doc, comments });
    } catch (error) {
        res.status(500).json({ message: "Error fetching post", error });
    }
};

// ✅ Add a new post
const addPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(201).json({ message: "Post added successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ message: "Error adding post", error });
    }
};

// ✅ Delete a post
const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const deletedPost = await Post.findOneAndDelete({ id: postId });

        if (!deletedPost) return res.status(404).json({ message: "Post not found" });

        res.status(200).json({ message: `Post ${postId} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting post", error });
    }
};

module.exports = { getAllPosts, getPostWithComments, addPost, deletePost };
