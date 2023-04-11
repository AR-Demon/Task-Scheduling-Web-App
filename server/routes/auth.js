import express from "express";
import { register } from "../controllers/auth.js"
import { login } from "../controllers/auth.js"

const Routes = express.Router();
Routes.post("/register", register);
Routes.post("/login", login);

export default Routes;
