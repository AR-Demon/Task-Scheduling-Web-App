import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import { verifyToken } from "./middleware/auth.js";
import userRoutes from "./routes/userStats.js"
import todoRoutes from "./routes/todo.js"
import { todo, userStats, users } from "./Data/index.js";
import User from "./models/User.js";
import UserStats from "./models/UserStats.js";
import Todo from "./models/Todo.js";


/*  CONFIGURATIONS  */
const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage});

/* ROUTES FROM FILES */

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/user", todoRoutes);


/* MONGOOSE SETUP */
const currentDate = new Date();
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT,() => console.log('Server Port:',PORT,currentDate));

    /* ADD DATA ONE Time */
    //User.insertMany(users);console.log("Inserted Many Users");
    //UserStats.insertMany(userStats);console.log("Inserted Many Users Stats");
    //Todo.insertMany(todo);console.log("Inserted Many Users Todo");
}).catch((error) => console.log(error + 'did not connect'));

//192.168.1.68