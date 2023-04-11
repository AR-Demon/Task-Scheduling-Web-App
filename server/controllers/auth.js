import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const register = async (req, res) => {
    try{
        const {
            firstName,
            middleName,
            lastName,
            email,
            password,
            phoneNumber,
            location
        } = req.body;
 
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            middleName,
            lastName,
            email,
            password:passwordHash,
            phoneNumber,
            location
        });

        const saveUser = await newUser.save();
        res.status(201).json(saveUser);

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
        //delete user.password;
        res.status(200).json({token, user});
    }catch(err){
        res.status(500).json({error : err.message});
    }

    
};