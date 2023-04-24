import Jwt from "jsonwebtoken";

export const verifyToken = async (req,res) => {
    try{
        let token = req.header("Authorization");

        if(!token){
            return res.status(400).send("Access Denied");
        }

        if(token.startswith("Bearer")){
            token = token.slice(7, token.length).trimleft();
        }

        const verified = Jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(error){
        res.status(500).json({error: error.message})
    };

};