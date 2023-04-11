import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },

    middleName: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },

    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        min: 5,
    },

    password:{
        type: String,
        required: true,
        min: 5,
        max: 16,
    },
},{timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;