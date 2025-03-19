const Comment = require("../models/commentModel");

// ✅ Get all comments
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
};

// ✅ Get comments for a specific post
const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ postId });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
};

// ✅ Add a new comment
const addComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();

        res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error });
    }
};

// ✅ Delete a comment
const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        await Comment.findOneAndDelete({ id: commentId });

        res.status(200).json({ message: `Comment ${commentId} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment", error });
    }
};

module.exports = { getAllComments, getCommentsByPost, addComment, deleteComment };
