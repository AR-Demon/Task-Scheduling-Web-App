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
        agilityLevel:{
            type: Number,
            required : true,
        },
        agilityStatus:{
            type: Number,
            required : true, 
        },
        agilityXp:{
            type: Number,
            required : true,
        },
        dexterityLevel:{
            type: Number,
            required : true,
        },
        dexterityStatus:{
            type: Number,
            required : true, 
        },
        dexterityXp:{
            type: Number,
            required : true,
        },
        luckLevel:{
            type: Number,
            required : true,
        },
        luckStatus:{
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