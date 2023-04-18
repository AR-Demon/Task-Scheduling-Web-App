import mongoose from "mongoose";

const UserStatsSchema = new mongoose.Schema({
    user_Id:{
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
        strengthXp:{
            type: Number,
            required : true, 
        },
        intelligence:{
            type: Number,
            required : true,
        },
        intelligenceXp:{
            type: Number,
            required : true,
        },
        agility:{
            type: Number,
            required : true,
        },
        agilityXp:{
            type: Number,
            required : true,
        },
        dexterity:{
            type: Number,
            required : true,
        },
        dexterityXp:{
            type: Number,
            required : true,
        },
        luck:{
            type: Number,
            required : true,
        },
        luckXp:{
            type: Number,
            required : true,
        },
    },
},{timestamps: true});
const UserStats = mongoose.model("UserStats",UserStatsSchema);
export default UserStats;