import mongoose from "mongoose";
import Todo from "../models/Todo.js"

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
        //res.status(200).json({userId:userId,email:email});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const updateTodo = async(req, res) => {
    try{}catch(error){}
}

export const GetTodo = async(req, res) => {
    try{}catch(error){}
}

export const deleteTodo = async(req, res) => {
    try{}catch(error){}
}