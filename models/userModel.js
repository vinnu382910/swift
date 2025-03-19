const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },  // JSONPlaceholder ID (not MongoDB _id)
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
        street: { type: String },
        suite: { type: String },
        city: { type: String },
        zipcode: { type: String },
        geo: {
            lat: { type: String },
            lng: { type: String }
        }
    },
    phone: { type: String },
    website: { type: String },
    company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
    }
}, { collection: "users" });  // Explicit collection name

module.exports = mongoose.model("User", userSchema);
