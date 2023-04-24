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
                agilityLevel:1,
                agilityStatus:0,
                agilityXp:0,
                dexterityLevel:1,
                dexterityStatus:0,
                dexterityXp:0,
                luckLevel:1,
                luckStatus:0,
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

        //user_Id for finding user stats
        const user_Id = req.query.userId;

        //url of getTodo backend
        const url = "http://localhost:3001/user/todo?todoId="+req.query.todoId;

        //fetching todo with the url and storing in response
        const response = await fetch(url);

        //converting response into json to access associatedAttribute
        const userTodo = await response.json();

        //error handling if there are any errors
        if(!userTodo){return res.status(400).json({msg:"failed",text:url});}
        if(userTodo.msg == "User Have No Todo"){return res.status(404).json({msg:"Todo not Found!"});}
        //if(userTodo.status == 410){return res.status(404).json({msg:"Todo not Found!"});}

        //userAttribute store the attribute of the user todo
        const userAttribute = userTodo.attachedAttribute;
        const userStats = await UserStats.findOne({user_Id});

        //create logic
        /*
            1.userAttribute is given(string), userStats is given(object)
            2.associated stats status is incremented by 1, if status reaches 5 reset it to zero and stats xp is incremented by X
            3.then i Don't know
        */

        res.status(200).json({userAttribute,userStats});
        //const userStats = await UserStats.findOne({user_Id});

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

/*export const test = async(req,res) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const json = await response.json();
        //if(!response){return res.status(400).json({msg:"failed",text:url});}
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}*/