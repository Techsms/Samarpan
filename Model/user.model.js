import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true // Password is required for authentication
    },
    role: {
        type: String,
        enum: ["NGO", "Company", "Volunteer"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Users = mongoose.model("Users", UserSchema);