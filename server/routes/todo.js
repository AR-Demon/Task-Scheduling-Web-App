import express from "express";
import {createTodo, GetTodos, GetTodo, updateTodo} from "../controllers/todo.js";

const Routes = express.Router();

/* TODO ROUTES */
Routes.post("/todo", createTodo);
Routes.get("/todo",GetTodo);
Routes.get("/todos", GetTodos);
Routes.patch("/todo/complete/:Id",updateTodo);


export default Routes;