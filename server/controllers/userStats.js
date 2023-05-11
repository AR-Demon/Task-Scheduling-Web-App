import mongoose from "mongoose";
import UserStats from "../models/UserStats.js"
import fetch from "node-fetch";

/* create or set the stats to zero or base level */
export const createStats = async(req,res) => {
    try {
        const Id = req.query.Id;
        const newUserStats = new UserStats({
            user_Id:Id,
            userLevel:1,
            userLevelExp:0,
            userAttribute:{
                strengthLevel:1,
                strengthStatus:0,
                strengthXp:0,
                intelligenceLevel:1,
                intelligenceStatus:0,
                intelligenceXp:0,
                healthLevel:1,
                healthStatus:0,
                healthXp:0,
                charismaXp:0,
                charismaLevel:1,
                charismaStatus:0,
                creativityLevel:1,
                creativityStatus:0,
                creativityXp:0
            },
        });
        const saveUser = await newUserStats.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


export const resetUserStats = async(req,res) => {
    try {
        const userStats_Id = req.query.Id;
        const resetStats = await UserStats.findByIdAndUpdate(userStats_Id,{
        userLevel:1,
        userLevelExp:0,
        userAttribute:{
            strengthLevel:1,
            strengthStatus:0,
            strengthXp:0,
            intelligenceLevel:1,
            intelligenceStatus:0,
            intelligenceXp:0,
            healthLevel:1,
            healthStatus:0,
            healthXp:0,
            charismaXp:0,
            charismaLevel:1,
            charismaStatus:0,
            creativityLevel:1,
            creativityStatus:0,
            creativityXp:0
        }
        }, {new: true, runValidators:true});
        if(!resetStats){return res.status(404).json({error:"User Not Found"})}
        res.status(200).json(resetStats);
    } catch (error) {
        res.status(500).json({error: error.message});
    }

}
export const updateStats = async(req,res) => {
    try {

        //user_Id for finding user stats
        const user_Id = req.query.userId;
        const token = req.query.token;
        

        //url of getTodo backend
        const url = "http://localhost:3001/user/todo?todoId="+req.query.todoId;

        //fetching todo with the url and storing in response
        const response = await fetch(url,{
            method:"GET",
            headers:{Authorization:`Bearer ${token}`},
        });

        //converting response into json to access associatedAttribute
        const userTodo = await response.json();

        //error handling if there are any errors
        if(!userTodo){return res.status(400).json({msg:"failed",text:url});}
        if(userTodo.msg == "User Have No Todo"){return res.status(404).json({msg:"Todo not Found!"});}

        //userAttribute store the attribute of the user todo
        const todoAttribute = userTodo.attachedAttribute;

        const Stats = {
            Level: userTodo.attachedAttribute.toLowerCase() + "Level",
            Xp: userTodo.attachedAttribute.toLowerCase() + "Xp",
        };
        
        //userStats store full user stats 
        const userStats = await UserStats.findOne({user_Id});
        if(!userStats){return res.status(404).json({msg:"Invalid UserId"});}

        //create logic
        /*
            1.userAttribute is given(string), userStats is given(object)
            2.associated stats status is incremented by 1, if status reaches 5 reset it to zero and stats xp is incremented by X
            3.then i Don't know
        */
        const updateUserStats = async() => {
            userStats.userAttribute[Stats.Xp] += 10;
            if(userStats.userAttribute[Stats.Xp] == 50){
                userStats.userAttribute[Stats.Level] += 1;
                userStats.userAttribute[Stats.Xp] = 0;
                userStats.userLevelExp += 10;
                if(userStats.userLevelExp == 50){userStats.userLevel += 1;userStats.userLevelExp = 0;}
            }
            const updateStats = await UserStats.findByIdAndUpdate(userStats._id,userStats,{ new: true, runValidators: true });
            return updateStats;
        }


       console.log(userStats.userAttribute[Stats.Level]);
       
        res.status(200).json({attribute:todoAttribute, Stats:await updateUserStats()});

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