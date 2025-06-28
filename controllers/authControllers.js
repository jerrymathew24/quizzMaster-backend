import jwt from "jsonwebtoken";
import { userData } from "../db/users.js";
import dotenv from "dotenv";

dotenv.config();


const loginHandler = (req,res)=> {
      const { userName, password } = req.body;
    const isUserVerified = userData.users.some(user => user.userName === userName && user.password === password);
    if(isUserVerified){
        const token = jwt.sign({id: userName}, process.env.SECRET_KEY)
        res.json({userName, token, message: " User Verified Successfully!"});
    }else{
        res.status(401).json({message: "Invalid username or password"});
    }
}

export default loginHandler;