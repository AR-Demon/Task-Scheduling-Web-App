import express from "express";
import {createTodo} from "../controllers/todo.js";

const Routes = express.Router();

/* TODO ROUTES */
Routes.post("/todo", createTodo);


export default Routes;