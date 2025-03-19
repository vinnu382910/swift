const axios = require("axios");
const User = require("../models/userModel");
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// ✅ Load 10 users with posts & comments from JSONPlaceholder
const loadUsers = async (req, res) => {
    try {
        // Fetch data from JSONPlaceholder
        const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10");
        const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const { data: comments } = await axios.get("https://jsonplaceholder.typicode.com/comments");

        // Filter posts for the 10 users
        const userIds = users.map(user => user.id);
        const filteredPosts = posts.filter(post => userIds.includes(post.userId));

        // Filter comments for the posts of these users
        const postIds = filteredPosts.map(post => post.id);
        const filteredComments = comments.filter(comment => postIds.includes(comment.postId));

        // Clear existing data to avoid duplication
        await User.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});

        // Insert new data
        await User.insertMany(users);
        await Post.insertMany(filteredPosts);
        await Comment.insertMany(filteredComments);

        // ✅ Structure response JSON
        const responseData = users.map(user => {
            // Find posts for the user
            const userPosts = filteredPosts
                .filter(post => post.userId === user.id)
                .map(post => ({
                    ...post,
                    comments: filteredComments.filter(comment => comment.postId === post.id)
                }));

            return {
                ...user,
                posts: userPosts
            };
        });

        // ✅ Send structured JSON response
        res.status(200).json(responseData);
    } catch (error) {
        console.error("❌ Error loading data:", error);
        res.status(500).json({ message: "Error loading data", error: error.message });
    }
};

// ✅ Delete all users
const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting users", error });
    }
};

// ✅ Delete specific user
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedUser = await User.findOneAndDelete({ id: userId });

        if (!deletedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: `User ${userId} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

// ✅ Get specific user with posts and comments
const getUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ id: userId });

        if (!user) return res.status(404).json({ message: "User not found" });

        const posts = await Post.find({ userId });
        const comments = await Comment.find({ postId: { $in: posts.map(post => post.id) } });

        const postsWithComments = posts.map(post => ({
            ...post._doc,
            comments: comments.filter(comment => comment.postId === post.id),
        }));

        res.status(200).json({ ...user._doc, posts: postsWithComments });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error });
    }
};

// ✅ Add a new user
const addUser = async (req, res) => {
    try {
        const { id, name, username, email } = req.body;

        if (!id || !name || !username || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const existingUser = await User.findOne({ id });
        if (existingUser) return res.status(409).json({ message: "User already exists" });

        const newUser = new User(req.body);
        await newUser.save();
        console.log("✅ User Added Successfully");

        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
};

module.exports = { loadUsers, deleteAllUsers, deleteUser, getUser, addUser };
