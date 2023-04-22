import mongoose from "mongoose";
import UserStats from "../models/UserStats.js"

/* create or set the stats to zero or base level */
export const createStats = async(req,res) => {
    try {
        const Id = req.query.Id;
        const newUserStats = new UserStats({
            user_Id:Id,
            userLevel:1,
            userLevelExp:0,
            userAttribute:{
                strength:1,
                strengthXp:0,
                intelligence:1,
                intelligenceXp:0,
                agility:1,
                agilityXp:0,
                dexterity:1,
                dexterityXp:0,
                luck:1,
                luckXp:0
            },
        });
        const saveUser = await newUserStats.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

/* update the stats of the user 
    1.
*/
export const updateStats = async(req,res) => {
    try {
        const user_Id = req.query.userId;

        const userStats = await UserStats.findOne({user_Id});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

/* to get stats of the user */
export const getStats = async(req,res) => {
    try {
        const userId= req.query.Id;
        const userStats = await UserStats.findOne({user_Id:userId});
        res.status(200).json(userStats);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}