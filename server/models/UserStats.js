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
        strengthLevel:{
            type: Number,
            required : true, 
        },
        strengthStatus:{
            type: Number,
            required : true, 
        },
        strengthXp:{
            type: Number,
            required : true, 
        },
        intelligenceLevel:{
            type: Number,
            required : true,
        },
        intelligenceStatus:{
            type: Number,
            required : true, 
        },
        intelligenceXp:{
            type: Number,
            required : true,
        },
        healthLevel:{
            type: Number,
            required : true,
        },
        healthStatus:{
            type: Number,
            required : true, 
        },
        healthXp:{
            type: Number,
            required : true,
        },
        charismaLevel:{
            type: Number,
            required : true,
        },
        charismaStatus:{
            type: Number,
            required : true, 
        },
        charismaXp:{
            type: Number,
            required : true,
        },
        creativityLevel:{
            type: Number,
            required : true,
        },
        creativityStatus:{
            type: Number,
            required : true, 
        },
        creativityXp:{
            type: Number,
            required : true,
        },
    },
},{timestamps: true});
const UserStats = mongoose.model("UserStats",UserStatsSchema);
export default UserStats;