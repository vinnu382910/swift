const express = require("express");
const { loadUsers, deleteAllUsers, deleteUser, getUser, addUser } = require("../controller/userController");

const router = express.Router();

// ✅ Route to load users from JSONPlaceholder
router.get("/load", loadUsers);

// ✅ Route to delete all users
router.delete("/", deleteAllUsers);

// ✅ Route to delete a specific user
router.delete("/:userId", deleteUser);

// ✅ Route to get a user with posts & comments
router.get("/:userId", getUser);

// ✅ Route to add a user (changed to `POST` instead of `PUT`)
router.post("/", addUser);

module.exports = router;
