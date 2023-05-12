import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password:passwordHash,
        });

        const saveUser = await newUser.save();
        delete saveUser.password;
        const response = await fetch(`http://localhost:3001/user/stats?Id=${saveUser._id}`, {
            method:"POST",
        });
        const CreateUserStats = await response.json();
        res.status(201).json({saveUser, CreateUserStats});
    }catch(error){
        res.status(500).json({ error : error.message}); 
    }
};

/* LOGGING IN */

export const login = async(req, res) => {
    try{
        const{
            email,
            password
        } = req.body;
        if (!email || !password) {
            return res.status(400).json({message: "Username or Password not present"})
        }
        const user = await User.findOne({email});
        if(!user){return res.status(400).json({token: null,msg: "User Does Not Exist"});}

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){return res.status(401).json({msg: "Invalid Credentials"});}

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});
    }catch(err){
        res.status(500).json({error : err.message});
    }

    
};