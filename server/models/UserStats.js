import mongoose from "mongoose";

const UserStatsSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        min: 3,
        unique:true,
    },
    userLevel:{
        type: Number,
        required:true,
    },
    userLevelExp:{
        type: Number,
        required: true,

    },
    userAttribute:{
        strength:{
            type: Number,
            required : true, 
        },
        intelligence:{
            type: Number,
            required : true,
        },
        agility:{
            type: Number,
            required : true,
        },
        dexterity:{
            type: Number,
            required : true,
        },
        luck:{
            type: Number,
            required : true,
        },
    }
},{timestamps: true});
const UserStats = mongoose.model("UserStats",UserStatsSchema);
export default UserStats;