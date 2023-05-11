import express from "express";
import {createStats ,updateStats, getStats, resetUserStats} from "../controllers/userStats.js"
import {verifyToken} from "../middleware/auth.js"
const Routes = express.Router();

/* User Stats Routes */
Routes.post("/stats",verifyToken,createStats);
Routes.patch("/stats/reset", verifyToken, resetUserStats);
Routes.patch("/stats/update",verifyToken,updateStats);
Routes.get("/stats",verifyToken,getStats);

export default Routes;