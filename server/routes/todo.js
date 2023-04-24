import express from "express";
import {createTodo, GetTodos, GetTodo} from "../controllers/todo.js";

const Routes = express.Router();

/* TODO ROUTES */
Routes.post("/todo", createTodo);
Routes.get("/todo",GetTodo);
Routes.get("/todos", GetTodos);


export default Routes;