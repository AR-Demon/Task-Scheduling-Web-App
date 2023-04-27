import express from "express";
import {createTodo, GetTodos, GetTodo, updateTodo, completeTodo, deleteTodo, deleteTodos} from "../controllers/todo.js";
import {verifyToken} from "../middleware/auth.js"

const Routes = express.Router();

/* TODO ROUTES */
//create todo
Routes.post("/todo", verifyToken, createTodo);
//get single todo of user from todoId 
Routes.get("/todo",verifyToken ,GetTodo);
//get multiple Todos pf the user by userId
Routes.get("/todos",verifyToken, GetTodos);
Routes.delete("/todo",verifyToken, deleteTodo);
Routes.delete("/todos",verifyToken, deleteTodos);
Routes.patch("/todo/complete/:Id",verifyToken, completeTodo);


export default Routes;