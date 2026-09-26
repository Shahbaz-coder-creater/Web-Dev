import mongoose from "mongoose";

// Schema create
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true
    },

    age: {
        type: Number,
        min: 18,
        max: 100
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String
    }

}, {
    timestamps: true
});

// Model create
const User = mongoose.model("User", UserSchema);

export default User;