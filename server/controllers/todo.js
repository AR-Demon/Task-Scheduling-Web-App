import mongoose from "mongoose";
import Todo from "../models/Todo.js"

// create a todo of user with userId email content description label attachAttribute
export const createTodo = async(req, res) => {
    try{
        const userId = req.query.Id;
        const userName = req.query.userName;
        const {
            email,
            content,
            description,
            priority,
            label,
            attachedAttribute,
        } = req.body;
        const date = new Date().getDate();
        const newTodo = new Todo({
            userId,
            userName,
            email,
            content,
            description,
            priority,
            label,
            attachedAttribute,
            checked:false,
            completed_at:date,
            due:{
                _date:date,
                date:date,
                isRecurring: false,
                string:label,
            },
        });
        const saveTodo = await newTodo.save();
        res.status(200).json(saveTodo);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const updateTodo = async(req, res) => {
    try{}catch(error){
        res.status(500).json({error: error.message});
    }
}

export const completeTodo = async(req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['checked', 'completed_at'];
    const isValidOperation = updates.every(update => allowUpdates.includes(update));
    if(!isValidOperation){return res.status(400).json({error: "Invalid Updates!"});}
    const currentDate = new Date();
    try {
        const userTodo = await Todo.findByIdAndUpdate(req.params.Id, {checked:true,completed_at:currentDate});
        if(!user){return res.status(404).json({error:'User Not Found'});}
    }catch(error){res.status(500).json({error: error.message});}
}

export const GetTodos = async(req, res) => {
    try{
        const userId = req.query.Id;
        const userTodos = await Todo.find({userId:userId});
        if(!userTodos){ return res.status(410).json({msg:"User Have No Todo"})}
        res.status(200).json(userTodos);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const GetTodo = async(req, res) => {
    try{
        const todoId = req.query.todoId;
        const userTodo = await Todo.findOne({_id:todoId});
        if(!userTodo){ return res.status(410).json({msg:"User Have No Todo"})}
        res.status(200).json(userTodo);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const deleteTodo = async(req, res) => {
    try{}catch(error){
        res.status(500).json({error: error.message});
    }
}

export const deleteTodos = async(req, res) => {
    try{}catch(error){
        res.status(500).json({error: error.message});
    }
}