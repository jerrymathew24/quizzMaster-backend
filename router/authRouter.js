import express from "express";
import {loginHandler, signupHandler} from "../controllers/authControllers.js";


const loginRouter = express.Router();
const signupRouter = express.Router();

signupRouter.route("/").post(signupHandler)

loginRouter.route("/").post(loginHandler)


export{loginRouter, signupRouter};