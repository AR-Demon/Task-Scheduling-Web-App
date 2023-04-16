import mongoose from "mongoose";

const UserStatsSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        min: 3,
        max: 50,
    }





})