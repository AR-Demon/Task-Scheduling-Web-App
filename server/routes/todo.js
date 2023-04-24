import express from "express";
import {createTodo, GetTodos, GetTodo, updateTodo, completeTodo, deleteTodo, deleteTodos} from "../controllers/todo.js";

const Routes = express.Router();

/* TODO ROUTES */
//create todo
Routes.post("/todo", createTodo);
//get single todo of user from todoId 
Routes.get("/todo",GetTodo);
//get multiple Todos pf the user by userId
Routes.get("/todos", GetTodos);
Routes.delete("/todo",deleteTodo);
Routes.delete("/todos", deleteTodos);
Routes.patch("/todo/complete/:Id",completeTodo);


export default Routes;